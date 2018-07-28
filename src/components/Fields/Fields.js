//@flow
import * as React from 'react';
import { Field } from 'redux-form';
import { injectIntl } from 'react-intl';

import Simple from './Simple';

function ConnectedField(component) {
    return injectIntl((props) => (
        <Field
            {...props}
            props={{...props}}
            component={component}
        />
    ));
}

function ConnectedPriceField(component) {
    return injectIntl((props) => (
        <Field
            {...props}
            parse={(value) => (isNaN(Number(value)) ? '' : Math.round(value * 100))}
            format={(value) => (isNaN(Number(value)) ? '' : parseFloat(value / 100))}
            props={{...props}}
            component={component}
        />
    ));
}

export const TextField = ConnectedField(Simple.TextInput);
export const TextareaField = ConnectedField(Simple.TextareaInput);
export const EmailField = ConnectedField(Simple.EmailInput);
export const PasswordField = ConnectedField(Simple.PasswordInput);
export const NumberField = ConnectedField(Simple.NumberInput);
export const FileField = ConnectedField(Simple.FileInput);
export const CheckboxField = ConnectedField(Simple.CheckboxInput);
export const PriceField = ConnectedPriceField(Simple.PriceInput);
export const PercentField = ConnectedField(Simple.PercentInput);
export const TelephoneField = ConnectedField(Simple.TelephoneInput);
export const HiddenField = ConnectedField(Simple.HiddenInput);

export default {
    TextField,
    TextareaField,
    EmailField,
    PasswordField,
    NumberField,
    FileField,
    CheckboxField,
    PriceField,
    PercentField,
    HiddenField,
    TelephoneField,
};
