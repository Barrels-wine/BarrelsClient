//@flow
import * as React from 'react';

import {
    TextField,
    DateTimeField,
} from '../../Fields/Fields';
import { FormCard } from '../../Common';

const IdentificationCard = () => (
    <FormCard title="wines.groups.identification">
        <TextField
            name="name"
            label="wines.fields.name"
        />
        <TextField
            name="batch"
            label="wines.fields.batch"
        />
        <DateTimeField
            name="vintage"
            label="wines.fields.vintage"
            dateFormat="year"
        />
    </FormCard>
);

export default IdentificationCard;
