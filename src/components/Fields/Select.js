// @flow
import * as React from 'react';

import { AbstractInput, InputRender } from './Abstract';

const SelectInput = AbstractInput((props) => {
    const options = props.choices.map(choice => (
        <option key={choice} value={choice}>
            {props.intl.formatMessage({ id: `${props.optionPrefix || ''}${choice}` })}
        </option>
    ));

    const placeholder = 
        props.required
        ? <option value="" key="placeholder" disabled hidden>
            {props.intl.formatMessage({ id: props.placeholder || props.label })}
        </option>
        : <option value="" key="empty">
            {props.intl.formatMessage({ id: props.placeholder })}
        </option>
    ;
    options.unshift(placeholder);

    return (
        <InputRender
            type="select"
            props={{step: '0.01', min: 0}}
            {...props}
        >
            {options}
        </InputRender>
    );
});

SelectInput.defaultProps = {
    required: false,
};

export default SelectInput;
