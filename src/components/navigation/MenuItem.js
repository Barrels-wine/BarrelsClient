// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';

export default class MenuItem extends React.Component {
    static defaultProps = {
        isActive: false,
    };

    onClick = () => {
        this.props.onClick({name: this.props.route, params: this.props.item.params});
    };

    render() {
        const { route, isActive, item } = this.props;
        const labelId = `layout.navigation.link.${route}`;

        return (
            <li
                className={classNames({
                    active: isActive
                })}
            >
                <Link to={{name: route, params: item.params, query: item.query}} onClick={this.onClick}>
                    <FormattedMessage id={labelId} />
                </Link>
            </li>
        );
    }
}
