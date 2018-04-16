// @flow
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { handleApiError } from '../../config/api';
import Form from './Form';
import { login } from '../../actions/auth';

const mapDispatchToProps = (dispatch, { location, history }) => {
    return {
        login: (values) => {
          return dispatch(login(values)).then(() => {
              const redirectUrl = location.query.redirect;
              history.push(redirectUrl && redirectUrl !== '/logout' ? redirectUrl : '/dashboard');
          }).catch((action) => {
              handleApiError(action);
          });
        },
    };
};

export default withRouter(connect(null, mapDispatchToProps)(Form));
