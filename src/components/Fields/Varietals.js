// @flow
import * as React from 'react';
import { connect } from 'react-redux';

import { AbstractInput } from './Abstract';
import { SelectInput } from './Select';

const VarietalsInput = props => (
    <SelectInput
        {...props}
        choices={props.varietals}
        translated={false}
        closeMenuOnSelect={false}
        isMulti
    />
);

const mapStateToProps = (state) => ({
    varietals: state.references.varietals,
});

const Varietals = connect(mapStateToProps)(
    AbstractInput(props => <VarietalsInput {...props} />)
);

export default Varietals;
