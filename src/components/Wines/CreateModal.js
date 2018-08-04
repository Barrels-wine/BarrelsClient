//@flow
import * as React from 'react';
import { connect } from 'react-redux';
import { submit } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import { toast } from 'react-toastify';
import { withRouter } from 'react-router-dom';

import Form from './Form';
import { createWine } from '../../actions/cellar';
import { Modal, Submit } from '../Common';
import { handleApiError } from '../../config/api';
import routesNames from '../../config/routesNames';

const FORM_NAME="wines";

const CreateModal = ({create, submit, children}) => (
    <Modal
        size="lg"
        title="wines.create.title"
        toggler={children}
        button={
            <Submit
                form={FORM_NAME}
                label="common.create"
            />
        }
    >
        <Form
            onSubmit={create}
            form={FORM_NAME}
        />
    </Modal>
);

const mapDispatchToProps = (dispatch, { history }) => {
    return {
        create: (wine) => (
            dispatch(createWine(wine))
            .then(action => {
                toast.success(<FormattedMessage id="wines.create.success" />);
                history.push(routesNames.WINES);
            })
            .catch(action => handleApiError(action))
        ),
        submit: () => dispatch(submit(FORM_NAME)),
    };
}

export default withRouter(connect(null, mapDispatchToProps)(CreateModal));
