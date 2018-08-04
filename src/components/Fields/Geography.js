// @flow
import * as React from 'react';
import countries from 'i18n-iso-countries';
import { connect } from 'react-redux';

import Simple from './Simple';
import { AbstractInput } from './Abstract';
import { SelectInput } from './Select';

class Country extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            namesByIso: countries.getNames(props.intl.locale),
        };
    }

    render() {
        const { namesByIso } = this.state;

        return (
            <SelectInput
                {...this.props}
                choices={Object.keys(namesByIso)}
                translated={false}
                formatLabel={value => namesByIso[value]}
            />
        );
    }
};

const CountryInput = AbstractInput(props => <Country {...props} />);

const FrenchRegion = props => (
    <SelectInput
        {...props}
        choices={props.frenchRegions}
        translated={false}
    />
);

const mapStateToProps = (state) => ({
    frenchRegions: state.references.frenchRegions,
});

const FrenchRegionInput = connect(mapStateToProps)(
    AbstractInput(props => <FrenchRegion {...props} />)
);

const RegionInput = (props) => {
    if (props.country === 'FR') {
        return <FrenchRegionInput {...props} />;
    }

    return <Simple.TextInput {...props} />;
};

export default {
    CountryInput,
    RegionInput,
};
