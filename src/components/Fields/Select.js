// @flow
import * as React from 'react';
import ReactSelect from 'react-select';
import VirtualizedSelect from 'react-virtualized-select';
import classNames from 'classnames';

import { getOptionFromValue, getValueFromOption } from './utils';
import { AbstractInput } from './Abstract';

class SelectInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: getOptionFromValue(props.choices, this.translate),
            value: getOptionFromValue(props.input.value, this.translate),
        };
    }

    componentWillReceiveProps(nextProps) {
        let { options, value } = this.state;

        if (nextProps.choices !== this.props.choices) {
            options = getOptionFromValue(nextProps.choices, this.translate);
        }
        if (this.props.input.value !== nextProps.input.value) {
            value = getOptionFromValue(nextProps.input.value, this.translate);
        }

        this.setState({
            options,
            value,
        });
    }

    translate = value => {
        if (this.props.formatLabel) {
            return this.props.formatLabel(value);
        }

        return this.props.translated
            ? this.props.intl.formatMessage({ id: `${this.props.optionPrefix || ''}${value}` })
            : value
        ;
    };

    render() {
        const { label, meta, input, intl, disabled } = this.props;
        const { options, value } = this.state;

        const placeholder = this.props.placeholder || label || null;
        const invalid = !!meta.touched && !!meta.error;

        return (
            <VirtualizedSelect
                {...this.props}
                className={classNames('select', {
                    'is-invalid': invalid,
                })}
                name={input.name}
                placeholder={placeholder ? intl.formatMessage({id: placeholder}) : null}
                value={value}
                onChange={option => input.onChange(getValueFromOption(option))}
                options={options}
                isDisabled={disabled}
                selectComponent={ReactSelect}
            />
        );
    }
};

SelectInput.defaultProps = {
    translated: true,
};

const Select = AbstractInput(props => (
    <SelectInput {...props} />
));

export default Select;
export {
    SelectInput
};
