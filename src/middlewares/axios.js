// @flow
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { normalize } from 'normalizr';
import { push } from 'connected-react-router';

import routesNames from '../config/routesNames';
import { DANGER, message } from '../actions/messages';
import { API_URL } from '../config/parameters';

const client = axios.create({
    baseURL: API_URL,
    responseType: 'json'
});

const options = {
    returnRejectedPromiseOnError: true,
    interceptors: {
        request: [
            ({getState, dispatch, getSourceAction}, config) => {
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
    onError: ({ action, next, error, getState, dispatch }) => {
        let errorObject = error;
        if (!error.response) {
            errorObject = {
                message: error.message,
                status: 0
            };
        }

        const isLoggingIn = getState().router.location.pathname === routesNames.LOGIN;
        if (!isLoggingIn && error.response && error.response.status === 401) {
            dispatch(message(DANGER, 'common.errors.must_be_logged_in'));
            push(routesNames.LOGIN);
        } else if (!error.response || error.response.status !== 400) {
            dispatch(message(DANGER, 'common.errors.default'));
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
