//@flow
import { SubmissionError } from 'redux-form';
import merge from 'lodash/merge';

export const unflattenApiErrors = (errors) => {
    const unflattenedErrors = {};
    Object.keys(errors).forEach((key) => {
        const error = errors[key];
        if (key.includes('.')) {
            const keys = key.split('.');
            const currentKey = keys.shift();
            unflattenedErrors[currentKey] = merge(unflattenedErrors[currentKey] || {}, unflattenApiErrors({[keys.join('.')]: error}));
        } else {
            unflattenedErrors[key] = error.message;
        }
    });
    return unflattenedErrors;
}

export const handleApiError = (action) => {
    const error = action.error;
    const response = error ? error.response : null;

    if (response && response.data && response.data.violations) {
        const errors = unflattenApiErrors(response.data.violations);
        throw new SubmissionError(errors);
    } else if (response && response.data) {
        throw new SubmissionError({_error: response.data && response.data.message ? response.data.message : 'Server error'});
    } else {
        if (error) {
            throw error;
        }
        throw action;
    }
}
