// @flow
import * as React from 'react';
import Select from 'react-select';
import VirtualizedSelect from 'react-virtualized-select'
import classNames from 'classnames';
import { connect } from 'react-redux';

import { AbstractInput } from './Abstract';
import { isArray } from 'util';

class VarietalsInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: this.getValueOption(props.varietals),
            value: this.getValueOption(props.input.value),
        };
    }

    componentWillReceiveProps(nextProps) {
        let { options, value } = this.state;

        if (nextProps.varietals !== this.props.varietals) {
            options = this.getValueOption(nextProps.varietals);
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
                closeMenuOnSelect={false}
                name={input.name}
                placeholder={placeholder ? intl.formatMessage({id: placeholder}) : ''}
                value={value}
                onChange={options => input.onChange(this.getOptionValue(options))}
                options={options}
                isDisabled={disabled}
                isMulti
                selectComponent={Select}
                {...this.props.props}
            />
        );
    }
};

const mapStateToProps = (state) => ({
    varietals: state.references.varietals,
});

const Varietals = connect(mapStateToProps)(
    AbstractInput(props => <VarietalsInput {...props} />)
);

export default Varietals;
