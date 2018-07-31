// @flow

const addError = (errors, path, message) => ({
    ...errors,
    [path]: message,
});

export default (constraints) => (values) => {
    let errors = {};

    constraints.forEach(constraint => {
        if (!constraint.check(values)) {
            errors = addError(errors, constraint.path, constraint.message);
        }
    });

    return errors;
};
