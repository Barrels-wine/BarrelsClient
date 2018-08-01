//@flow
import * as React from 'react';
import { Field } from 'redux-form';
import { injectIntl } from 'react-intl';

import Simple from './Simple';
import Select from './Select';
import Rating from './Rating';
import Geography from './Geography';

const ConnectedField = (component) => injectIntl((props) => (
    <Field
        {...props}
        props={{...props}}
        component={component}
    />
));

const ConnectedPriceField = (component) => injectIntl((props) => (
    <Field
        {...props}
        parse={value => isNaN(Number(value)) ? '' : Math.round(value * 100)}
        format={value => isNaN(Number(value)) ? '' : parseFloat(value / 100)}
        props={{...props}}
        component={component}
    />
));

const ConnectedRatingField = (component) => injectIntl((props) => (
    <Field
        {...props}
        parse={value => isNaN(Number(value)) ? 0 : value}
        format={value => value === 0 ? null : value}
        props={{...props}}
        component={component}
    />
));

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
export const TemperatureField = ConnectedField(Simple.TemperatureInput);
export const SelectField = ConnectedField(Select);
export const RatingField = ConnectedRatingField(Rating);
export const CountryField = ConnectedField(Geography.CountryInput);
