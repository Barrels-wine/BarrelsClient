// @flow
import * as React from 'react';
import { InputGroupAddon, FormGroup, Label, FormText } from 'reactstrap';
import { FormattedMessage } from 'react-intl';

import { AbstractInput, InputRender, TranslationError } from './Abstract';

const SimpleInput = (type) => AbstractInput((props) => (<InputRender type={type} {...props} />));

const TextInput = SimpleInput('text');
const TextareaInput = AbstractInput((props) => (
    <InputRender
        type="textarea"
        props={{ rows: "3" }}
        className="note-editor"
        {...props}
    />
));
const EmailInput = SimpleInput('email');
const NumberInput = SimpleInput('number');
const TelephoneInput = SimpleInput('tel');
const HiddenInput = SimpleInput('hidden');
const PasswordInput = AbstractInput((props) => (
    <InputRender
        type="password"
        inputAddon={
            <InputGroupAddon addonType="append">
                <span className="input-group-text fa fa-lock text-muted bg-transparent border-left-0" />
            </InputGroupAddon>
        }
        {...props}
    />
));
const FileInput = SimpleInput('file');

const PriceInput = AbstractInput((props) => (
    <InputRender
        type="number"
        props={{step: '0.01', min: 0}}
        inputAddon={
            <InputGroupAddon addonType="append">€</InputGroupAddon>
        }
        {...props}
    />
));

const PercentInput = AbstractInput((props) => (
    <InputRender
        type="number"
        props={{step: '0.01', min: 0}}
        inputAddon={
            <InputGroupAddon addonType="append">%</InputGroupAddon>
        }
        {...props}
    />
));

const CheckboxInput = (props) => (
    <FormGroup check>
        <Label check>
            <InputRender
                type="checkbox"
                invalid={props.meta.touched && props.meta.error}
                checked={props.input.value}
                onChange={(e) => props.input.onChange(e.target.checked)}
                {...props}
            />
            {' '}
            <FormattedMessage id={props.label} />
        </Label>
        {props.meta.touched && props.meta.error && TranslationError(props.meta.error)}
        {props.help && <FormText className="small">{props.help}</FormText>}
    </FormGroup>
);

const TemperatureInput = AbstractInput((props) => (
    <InputRender
        type="number"
        props={{step: '0.1', min: 0}}
        inputAddon={
            <InputGroupAddon addonType="append">°</InputGroupAddon>
        }
        {...props}
    />
));

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
    TemperatureInput,
};
