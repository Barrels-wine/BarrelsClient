//@flow
import * as React from 'react';
import { connect } from 'react-redux';
import { submit } from 'redux-form';

import Form from './Form';
import { createWine } from '../../actions/cellar';
import { Modal, Submit } from '../Common';
import { handleApiError } from '../../config/api';

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

const mapDispatchToProps = (dispatch) => {
    return {
        create: (wine) => {
            return dispatch(createWine(wine))
            .catch(action =>handleApiError(action));
        },
        submit: () => dispatch(submit(FORM_NAME)),
    };
}

export default connect(null, mapDispatchToProps)(CreateModal);
