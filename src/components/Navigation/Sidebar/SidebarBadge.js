// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { Badge } from 'reactstrap';

const SidebarBadge = ({ value, color }) => (
    <Badge
        tag="div"
        className="pull-right"
        color={color}
    >
        {value}
    </Badge>
);

const mapStateFromProps = (state, { value, path }) => {
    let newValue = value;

    if (path) {
        newValue = state;
        const explodedPath = path.split('.');
        explodedPath.forEach(part => {
            newValue = newValue[part];
        });
    }

    return {
        value: newValue,
    };
};

export default connect(mapStateFromProps)(SidebarBadge);
