//@flow
import * as React from 'react';

import {
    SelectField,
    DegreeField,
} from '../../Fields/Fields';
import { FormCard } from '../../Common';

const CategoryCard = () => (
    <FormCard title="wines.groups.category">
        <SelectField
            name="category"
            required
            label="wines.fields.category"
            placeholder="wines.fields.category"
            optionPrefix="reference.category."
            choices={['wine', 'champagne', 'sweet']}
        />
        <SelectField
            name="color"
            required
            label="wines.fields.color"
            placeholder="wines.fields.color"
            optionPrefix="reference.color."
            choices={['red', 'rose', 'white']}
        />
        <DegreeField
            name="alcoholDegree"
            label="wines.fields.alcohol_degree"
        />
    </FormCard>
);

export default CategoryCard;
