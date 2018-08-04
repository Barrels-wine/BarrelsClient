//@flow
import * as React from 'react';
import { formValueSelector } from 'redux-form';
import { connect } from 'react-redux';

import {
    TextField,
    CountryField,
    RegionField,
    VarietalsField,
    DesignationField,
} from '../../Fields/Fields';
import { FormCard } from '../../Common';

const DetailsCard = ({ country, region }) => (
    <FormCard title="wines.groups.details">
        <CountryField
            name="country"
            label="wines.fields.country"
        />
        <RegionField
            name="region"
            label="wines.fields.region"
            country={country}
        />
        <DesignationField
            name="designation"
            label="wines.fields.designation"
            country={country}
            region={region}
        />
        <TextField
            name="classificationLevel"
            label="wines.fields.classification_level"
        />
        <VarietalsField
            name="varietals"
            label="wines.fields.varietals"
        />
        <TextField
            name="winemaker"
            label="wines.fields.winemaker"
        />
    </FormCard>
);

const mapStateToProps = (state, { form }) => {
    const selector = formValueSelector(form);

    return {
        country: selector(state, 'country'),
        region: selector(state, 'region'),
    };
}

export default connect(mapStateToProps)(DetailsCard);
