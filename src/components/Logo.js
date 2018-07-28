// @flow
import * as React from 'react';
import { injectIntl } from 'react-intl';
import classNames from 'classnames';

import { logoWhite, logoPrimary } from '../config/images';

const Logo = (props) => {
    const className = classNames(props.className, {
        'logo': true,
        'img-fluid': true,
        'img-thumbnail': props.thumbnail,
        'rounded-circle': props.round,
        'bg-transparent': !props.bgColor || props.bgColor === 'default',
        'bg-white': props.bgColor === 'white',
        'bg-primary': props.bgColor === 'primary',
        'border-none': !props.borderColor || props.borderColor === 'default',
        'border-white': props.borderColor === 'white',
        'border-primary': props.borderColor === 'primary',
    });

    let logo = logoWhite;
    if (props.color === 'primary') {
        logo = logoPrimary;
    }

    return (
        <img
            className={className}
            src={logo}
            alt={props.intl.formatMessage({ id: 'common.logo' })}
            width="60"
            height="60"
        />
    );
};

export default injectIntl(Logo);
