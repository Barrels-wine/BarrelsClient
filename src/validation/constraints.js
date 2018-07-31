// @flow
const notNull = value => value !== null && value !== undefined;

const notBlank = value => notNull(value) && value !== '';

const number = value => !notNull(value) || !isNaN(Number(value));

const positiveNumber = value => !notNull(value) || (number(value) && value >= 0);

const range = (value, min = null, max = null) => {
    if (!notNull(value)) {
        return true;
    }

    if (min && value < min) {
        return false;
    }

    if (max && value > max) {
        return false;
    }

    return true;
};

export {
    notNull,
    notBlank,
    number,
    positiveNumber,
    range,
};
