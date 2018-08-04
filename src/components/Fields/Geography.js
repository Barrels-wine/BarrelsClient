// @flow
import * as React from 'react';
import Select from 'react-select';
import countries from 'i18n-iso-countries';
import VirtualizedSelect from 'react-virtualized-select'
import classNames from 'classnames';
import { connect } from 'react-redux';
import isArray from 'lodash/isArray';

import Simple from './Simple';
import { AbstractInput } from './Abstract';

class Country extends React.Component {
    constructor(props) {
        super(props);
        const namesByIso = countries.getNames(props.intl.locale);
        const options = Object.keys(namesByIso).map(iso => ({
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
        if (this.props.input.value !== nextProps.input.value) {
            this.setState({
                value: this.getValueOption(nextProps.input.value),
            })
        }
    }

    getValueOption = (value) => (
        value ? {
            value,
            label: this.state.namesByIso[value],
        } : null
    );

    getOptionValue = (option) => (
        option ? option.value : null
    );

    render() {
        const { label, meta, input, intl, disabled } = this.props;
        const { value, options } = this.state;

        const placeholder = this.props.placeholder || label || null;
        const invalid = !!meta.touched && !!meta.error;

        return (
            <VirtualizedSelect
                className={classNames('select', {
                    'is-invalid': invalid,
                })}
                name={input.name}
                placeholder={placeholder ? intl.formatMessage({id: placeholder}) : ''}
                value={value}
                onChange={options => input.onChange(this.getOptionValue(options))}
                options={options}
                isDisabled={disabled}
                selectComponent={Select}
                {...this.props.props}
            />
        );
    }
};

const CountryInput = AbstractInput(props => <Country {...props} />);

class FrenchRegion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: this.getValueOption(props.frenchRegions),
            value: this.getValueOption(props.input.value),
        };
    }

    componentWillReceiveProps(nextProps) {
        let { options, value } = this.state;

        if (nextProps.varietals !== this.props.frenchRegions) {
            options = this.getValueOption(nextProps.frenchRegions);
        }
        if (this.props.input.value !== nextProps.input.value) {
            value = this.getValueOption(nextProps.input.value);
        }

        this.setState({
            options,
            value,
        });
    }

    getValueOption = (value) => {
        if (!value) {
            return null;
        }

        if (!isArray(value)) {
            return {
                value,
                label: value,
            };
        }

        return value.map(val => this.getValueOption(val));
    };

    getOptionValue = (option) => {
        if (!option) {
            return [];
        }

        if (!isArray(option)) {
            return option.value;
        }

        return option.map(opt => this.getOptionValue(opt));
    };

    render() {
        const { label, meta, input, intl, disabled } = this.props;
        const { options, value } = this.state;

        const placeholder = this.props.placeholder || label || null;
        const invalid = !!meta.touched && !!meta.error;

        return (
            <VirtualizedSelect
                className={classNames('select', {
                    'is-invalid': invalid,
                })}
                name={input.name}
                placeholder={placeholder ? intl.formatMessage({id: placeholder}) : ''}
                value={value}
                onChange={option => input.onChange(this.getOptionValue(option))}
                options={options}
                isDisabled={disabled}
                selectComponent={Select}
                {...this.props.props}
            />
        );
    }
};

const mapStateToProps = (state) => ({
    frenchRegions: state.references.frenchRegions,
});

const FrenchRegionInput = connect(mapStateToProps)(
    AbstractInput(props => <FrenchRegion {...props} />)
);

const RegionInput = (props) => {
    if (props.country === 'FR') {
        return <FrenchRegionInput {...props} />;
    }

    return <Simple.TextInput {...props} />;
};

export default {
    CountryInput,
    RegionInput,
};
