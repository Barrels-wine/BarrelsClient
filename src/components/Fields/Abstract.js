import * as React from 'react';
import { FormGroup, FormControl, ControlLabel, HelpBlock, InputGroup } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

export const TranslationLabel = (label) => {
    return (
        <ControlLabel><FormattedMessage id={label} /></ControlLabel>
    );
};

export const TranslationError = (error) => {
    return (
        <span className="text-danger">
            <FormattedMessage id={`validation.${error}`} />
        </span>
    );
};

export const FormControlRender = (props) => {
    const placeholder = props.placeholder || (props.label ? props.label : null);

    const formControl = (
        <FormControl
            className={props.className}
            autoComplete={props.autoComplete}
            ref={props.refCallback()}
            componentClass={props.componentClass}
            type={props.type}
            placeholder={placeholder ? props.intl.formatMessage({id: placeholder}) : ''}
            name={props.input.name}
            value={props.input.value}
            checked={props.input.value}
            onChange={props.input.onChange}
            disabled={props.disabled}
            {...props.props}
        />
    );

    if (!props.inputAddon) {
        return formControl;
    }

    return (
        <InputGroup>
            {formControl}
            {props.inputAddon}
        </InputGroup>
    );
};

FormControlRender.defaultProps = {
    props: {},
    label: null,
    placeholder: null,
    disabled: false,
    componentClass: 'input',
    onChange: () => {},
    refCallback: () => {},
};

export const AbstractInput = (renderInput) => {
    const component = (props) => (
        <FormGroup controlId={props.input.name} validationState={props.meta.touched && props.meta.error ? 'error' : null}>
            {props.label && TranslationLabel(props.label)}
            {renderInput(props)}
            {props.meta.touched && props.meta.error && TranslationError(props.meta.error)}
            {props.help && <HelpBlock className="small">{props.help}</HelpBlock>}
            <FormControl.Feedback />
        </FormGroup>
    );

    return component;
};
