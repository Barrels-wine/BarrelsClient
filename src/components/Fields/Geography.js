// @flow
import * as React from 'react';
import Select from 'react-select';
import countries from 'i18n-iso-countries';

import { AbstractInput } from './Abstract';

const Country = AbstractInput(props => {
    const placeholder = props.placeholder || props.label || null;
    const invalid = !!props.meta.touched && !!props.meta.error;

    const namesByIso = countries.getNames(props.intl.locale);
    const options = Object.keys(namesByIso).map((iso) => ({
        value: iso,
        label: namesByIso[iso],
    }));
    const value = props.input.value ? {
        value: props.input.value,
        label: namesByIso[props.input.value],
    } : null;

    return (
        <Select
            name={props.input.name}
            placeholder={placeholder ? props.intl.formatMessage({id: placeholder}) : ''}
            value={value}
            onChange={option => props.input.onChange(option.value)}
            options={options}
            disabled={props.disabled}
            invalid={invalid}
            {...props.props}
        />
    );
});

export default {
    Country,
};
