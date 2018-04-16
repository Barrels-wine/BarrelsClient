// @flow
import { connect } from 'react-redux';

import { handleApiError } from '../../config/api';
import routesNames from '../../config/routesNames';
import Form from './Form';
import { login } from '../../actions/auth';

const validateAndLogin = (values, dispatch, {location, router}) => {
    return dispatch(login(values)).then(() => {
        const redirectUrl = location.query.redirect;
        router.push(redirectUrl && redirectUrl !== '/logout' ? redirectUrl : {name: routesNames.DASHBOARD});
    }).catch((action: ActionFailedType) => {
        handleApiError(action);
    });
};

const mapDispatchToProps = () => {
    return {
        login: validateAndLogin,
    };
};

export default connect(() => { return {}; }, mapDispatchToProps)(Form);
