// @flow
import * as React from 'react';
import { connect } from 'react-redux';

import { SelectInput } from './Select';
import { AbstractInput } from './Abstract';

const Designation = (props) => (
    <SelectInput
        {...props}
        translated={false}
        choices={props.designations}
    />
);

const filterDesignations = (designations, country, region) => {
    if (!country || !designations || !designations[country]) {
        return [];
    }

    if (country !== 'FR') {
        return designations[country];
    }

    if (!region) {
        return [];
    }

    return designations[country][region] || [];
}

const mapStateToProps = (state, { country, region }) => ({
    designations: filterDesignations(
        state.references.designations,
        country,
        region
    ),
});

const DesignationInput = connect(mapStateToProps)(Designation);

export default AbstractInput(props => <DesignationInput {...props} />);
