// @flow
import * as React from 'react';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { normalize } from 'normalizr';
import { push } from 'connected-react-router';
import { toast } from 'react-toastify';
import { FormattedMessage } from 'react-intl';

import routesNames from '../config/routesNames';
import { API_URL } from '../config/parameters';

const client = axios.create({
    baseURL: API_URL,
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
});

const options = {
    returnRejectedPromiseOnError: true,
    interceptors: {
        request: [
            ({getState}, config) => {
                const { auth } = getState();
                if (auth.token) {
                    if (!config.headers) {
                        config.headers = {};
                    }
                    config.headers.Authorization = `Bearer ${auth.token}`;
                }

                return config;
            }
        ],
        response: [({getSourceAction}, response) => {
            const action = getSourceAction(response.config);
            return (action.schema && response.data) ? normalize(response.data, action.schema) : response.data;
        }],
    },
    onError: ({ action, next, error, getState }) => {
        let errorObject = error;
        if (!error.response) {
            errorObject = {
                message: error.message,
                status: 0
            };
        }

        const isLoggingIn = getState().router.location.pathname === routesNames.LOGIN;
        if (!isLoggingIn && error.response && error.response.status === 401) {
            toast.error(<FormattedMessage id="error.must_be_logged_in" />);
            push(routesNames.LOGIN);
        } else if (error.response && error.response.data && error.response.data.message) {
            toast.error(<FormattedMessage id={error.response.data.message} />);
        } else {
            toast.error(<FormattedMessage id="error.default" />);
        }

        const nextAction = {
            type: action.types[2],
            error: errorObject,
            meta: {
                previousAction: action
            }
        };

        next(nextAction);
        return nextAction;
    },
};

export default axiosMiddleware(client, options);
