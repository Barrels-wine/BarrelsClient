// @flow
import isArray from 'lodash/isArray';

export const getOptionFromValue = (value, formatLabel) => {
    if (!value) {
        return null;
    }

    if (!isArray(value)) {
        return {
            value,
            label: formatLabel ? formatLabel(value) : value,
        };
    }

    return value.map(val => getOptionFromValue(val, formatLabel));
};

export const getValueFromOption = option => {
    if (!option) {
        return [];
    }

    if (!isArray(option)) {
        return option.value;
    }

    return option.map(opt => getValueFromOption(opt));
};
