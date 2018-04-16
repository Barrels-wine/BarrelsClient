//@flow

export default (store) => (next) => (action) => {
    try {
        return next(action);
    } catch (err) {
        if (console && console.error) {
            console.error('Caught an exception in middleware', err, action);
        }
    }
};
