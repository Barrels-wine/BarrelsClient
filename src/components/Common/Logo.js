// @flow
import * as React from 'react';
import { injectIntl } from 'react-intl';
import classNames from 'classnames';

import { logoWhite, logoWhiteWithText, logoPrimary } from '../../config/images';

const Logo = (props) => {
    const className = classNames(props.className, {
        'logo': true,
        'img-fluid': true,
        'img-thumbnail': props.thumbnail,
        'rounded-circle': props.round,
        'bg-transparent': !props.bgColor || props.bgColor === 'default',
        'bg-white': props.bgColor === 'white',
        'bg-primary': props.bgColor === 'primary',
        'border-0': props.borderColor === 'none',
        'border-white': props.borderColor === 'white',
        'border-primary': props.borderColor === 'primary',
    });

    const style = {};
    if (props.height) {
        style.height = props.height;
    }

    let logo = logoWhite;
    if (props.withText) {
        logo = logoWhiteWithText;
    }
    if (props.color === 'primary') {
        logo = logoPrimary;
    }

    return (
        <img
            style={style}
            className={className}
            src={logo}
            alt={props.intl.formatMessage({ id: 'common.logo' })}
        />
    );
};

export default injectIntl(Logo);
