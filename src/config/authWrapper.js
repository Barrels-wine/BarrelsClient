// @flow
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'

const UserIsAuthenticated = connectedRouterRedirect({
    redirectPath: '/login',
    authenticatedSelector: state => state.auth !== null,
    predicate: (auth) => {
        if (!auth.token) {
            return false;
        }

        const now = new Date();
        const exp = new Date(auth.user ? auth.user.exp * 1000 : Date.now());

        return now.getTime() <= exp.getTime();
    },
    wrapperDisplayName: 'UserIsAuthenticated',
});

export default UserIsAuthenticated;
