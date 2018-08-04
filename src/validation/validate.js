// @flow

const addError = (errors, path, message) => ({
    ...errors,
    [path]: message,
});

export default (constraints) => (values) => {
    let errors = {};

    constraints.forEach(constraint => {
        if (!constraint.check(values)) {
            if (constraint.setErrors) {
                errors = constraint.setErrors(errors);
                return;
            }
            
            errors = addError(errors, constraint.path, constraint.message);
        }
    });

    return errors;
};
