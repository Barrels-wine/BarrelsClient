// @flow
const isAuthenticated = (auth) => {
    if (!auth.token) {
        return false;
    }

    const now = new Date();
    const exp = new Date(auth.user ? auth.user.exp * 1000 : Date.now());

    return now.getTime() <= exp.getTime();
};

export default isAuthenticated;
