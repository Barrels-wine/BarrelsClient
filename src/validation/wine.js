// @flow
import {
    notBlank,
    positiveNumber,
    range,
    country,
    lessThan,
} from './constraints';

export default [
    {
        check: values => notBlank(values.name),
        path: 'name',
        message: 'wine.name.required',
    },
    {
        check: values => notBlank(values.designation),
        path: 'designation',
        message: 'wine.designation.required',
    },
    {
        check: values => ['red', 'rose', 'white'].includes(values.color),
        path: 'color',
        message: 'wine.color.not_valid',
    },
    {
        check: values => notBlank(values.color),
        path: 'color',
        message: 'wine.color.required',
    },
    {
        check: values => ['wine', 'champagne', 'sweet'].includes(values.category),
        path: 'category',
        message: 'wine.category.not_valid',
    },
    {
        check: values => notBlank(values.category),
        path: 'category',
        message: 'wine.category.required',
    },
    {
        check: values => notBlank(values.country),
        path: 'country',
        message: 'wine.country.required',
    },
    {
        check: values => country(values.country),
        path: 'country',
        message: 'wine.country.not_valid',
    },
    {
        check: values => {
            if (values.country === 'FR') {
                return notBlank(values.region)
            }

            return true;
        },
        path: 'region',
        message: 'wine.region.required',
    },
    {
        check: values => positiveNumber(values.alcoholDegree),
        path: 'alcoholDegree',
        message: 'wine.alcohol_degree.no_negative',
    },
    {
        check: values => positiveNumber(values.temperature),
        path: 'temperature',
        message: 'wine.temperature.no_negative',
    },
    {
        check: values => range(values.rating, 1, 5),
        path: 'rating',
        message: 'wine.rating.between_1_and_5',
    },
    {
        check: values => notBlank(values.vintage),
        path: 'vintage',
        message: 'wine.vintage.required',
    },
    {
        check: values => positiveNumber(values.vintage),
        path: 'vintage',
        message: 'wine.vintage.not_valid',
    },
    {
        check: values => positiveNumber(values.drinkFrom),
        path: 'drinkFrom',
        message: 'wine.drink_from.not_valid',
    },
    {
        check: values => positiveNumber(values.drinkTo),
        path: 'drinkTo',
        message: 'wine.drink_to.not_valid',
    },
    {
        check: values => positiveNumber(values.climaxFrom),
        path: 'climaxFrom',
        message: 'wine.climax_from.not_valid',
    },
    {
        check: values => positiveNumber(values.climaxTo),
        path: 'climaxTo',
        message: 'wine.climax_to.not_valid',
    },
    {
        check: values => lessThan(values.drinkFrom, values.drinkTo),
        setErrors: (errors) => ({
            ...errors,
            drinkFrom: 'wine.drink_from.less_than_drink_to',
            drinkTo: true,
        }),
    },
    {
        check: values => lessThan(values.climaxFrom, values.climaxTo),
        setErrors: (errors) => ({
            ...errors,
            climaxFrom: 'wine.climax_from.less_than_climax_to',
            climaxTo: true,
        }),
    },
];
