//@flow
import * as React from 'react';
import { formValueSelector } from 'redux-form';
import { connect } from 'react-redux';

import {
    TextField,
    CountryField,
    RegionField,
    VarietalsField,
} from '../../Fields/Fields';
import { FormCard } from '../../Common';

const DetailsCard = ({ country }) => (
    <FormCard title="wines.groups.details">
        <TextField
            name="designation"
            label="wines.fields.designation"
        />
        <TextField
            name="classificationLevel"
            label="wines.fields.classification_level"
        />
        <CountryField
            name="country"
            label="wines.fields.country"
        />
        <RegionField
            name="region"
            label="wines.fields.region"
            country={country}
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
    };
}

export default connect(mapStateToProps)(DetailsCard);
