// @flow
import * as React from 'react';
import classNames from 'classnames';
import ReactDateTime from 'react-datetime';
import moment from 'moment';

import { AbstractInput } from './Abstract';

const DateTimeInput = AbstractInput(props => {
    const placeholder = props.placeholder || props.label || null;
    const invalid = !!props.meta.touched && !!props.meta.error;

    let format = props.dateFormat;
    if (format === 'year') {
        format = 'YYYY';
    }

    return (
        <ReactDateTime
            className={classNames('datetime', {
                'is-invalid': invalid,
            })}
            value={moment(props.input.value, format)}
            inputProps={{
                className: classNames('form-control', {
                    'is-invalid': invalid,
                }),
                placeholder: props.intl.formatMessage({id: placeholder}),
            }}
            timeFormat={props.timeFormat || false}
            dateFormat={format}
            locale={props.intl.locale}
            onChange={value => {
                if (!value || !moment.isMoment(value)) {
                    return null;
                }
                
                return props.input.onChange(value.format(format));
            }}
            closeOnSelect
        />
    );
});

export default {
    DateTimeInput,
};
