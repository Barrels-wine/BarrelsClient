// @flow
import * as React from 'react';
import { InputGroup, FormGroup, FormControl, Checkbox, HelpBlock } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

import { AbstractInput, FormControlRender, TranslationError } from './Abstract';

const SimpleInput = (type) => AbstractInput((props) => (<FormControlRender type={type} {...props} />));

const TextInput = SimpleInput('text');
const TextareaInput = AbstractInput((props) => (
    <FormControlRender componentClass="textarea" {...props} />
));
const EmailInput = SimpleInput('email');
const NumberInput = SimpleInput('number');
const TelephoneInput = SimpleInput('tel');
const HiddenInput = (props) => (<FormControlRender type="hidden" {...props} />);
const PasswordInput = AbstractInput((props) => (
    <InputGroup>
        <FormControlRender className="br0" type="password" {...props} />
        <InputGroup.Addon className="bg-transparent bl0">
            <span className="input-group-text fa fa-lock text-muted" />
        </InputGroup.Addon>
    </InputGroup>
));
const FileInput = SimpleInput('file');

const PriceInput = AbstractInput((props) => (
    <InputGroup>
        <FormControlRender type="number" {...props} props={{step: '0.01', min: 0}} />
        <InputGroup.Addon>€</InputGroup.Addon>
    </InputGroup>
));

const PercentInput = AbstractInput((props) => (
    <InputGroup>
        <FormControlRender type="number" {...props} props={{step: '0.01', min: 0}} />
        <InputGroup.Addon>%</InputGroup.Addon>
    </InputGroup>
));

const CheckboxInput = (props) => {
    return (
        <FormGroup controlId={props.input.name} validationState={props.meta.touched && props.meta.error ? 'error' : null}>
            <Checkbox
                checked={props.input.value}
                onChange={(e) => props.input.onChange(e.target.checked)}
            >
                <FormattedMessage id={props.label} />
            </Checkbox>
            {props.help && <HelpBlock className="small">{props.help}</HelpBlock>}
            {props.meta.touched && props.meta.error && TranslationError(props.meta.error)}
            <FormControl.Feedback />
        </FormGroup>
    );
};

export default {
    TextInput,
    TextareaInput,
    EmailInput,
    NumberInput,
    HiddenInput,
    PasswordInput,
    FileInput,
    CheckboxInput,
    PriceInput,
    PercentInput,
    TelephoneInput,
};
