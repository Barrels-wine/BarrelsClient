// @flow
import * as React from 'react';
import Select from 'react-select';
import countries from 'i18n-iso-countries';
import classNames from 'classnames';

import { AbstractInput } from './Abstract';

class Country extends React.Component {
    constructor(props) {
        super(props);
        const namesByIso = countries.getNames(props.intl.locale);
        const options = Object.keys(namesByIso).map((iso) => ({
            value: iso,
            label: namesByIso[iso],
        }));

        this.state = {
            namesByIso,
            options,
            value: this.getValueOption(props.input.value),
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            value: this.getValueOption(nextProps.input.value),
        })
    }

    getValueOption = (value) => (
        value ? {
            value,
            label: this.state.namesByIso[value],
        } : null
    );

    render() {
        const { label, meta, input, intl, disabled } = this.props;
        const { value, options } = this.state;

        const placeholder = this.props.placeholder || label || null;
        const invalid = !!meta.touched && !!meta.error;

        return (
            <Select
                className={classNames('select', {
                    'is-invalid': invalid,
                })}
                name={input.name}
                placeholder={placeholder ? intl.formatMessage({id: placeholder}) : ''}
                value={value}
                onChange={option => input.onChange(option.value)}
                options={options}
                disabled={disabled}
                invalid={invalid}
                {...this.props.props}
            />
        );
    }
};

const CountryInput = AbstractInput(props => <Country {...props} />);

export default {
    CountryInput,
}
