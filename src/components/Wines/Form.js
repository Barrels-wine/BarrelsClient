//@flow
import * as React from 'react';
import { reduxForm } from 'redux-form';
import {
    Form as BsForm,
    Container,
    Row,
    Col,
} from 'reactstrap';

import {
    TextField,
    NumberField,
    TextareaField,
    TemperatureField,
    SelectField,
    RatingField,
    CountryField,
} from '../Fields/Fields';
import { FormCard } from '../Common';
import { validateWine } from '../../validation';

const Form = ({ handleSubmit }) => (
    <BsForm onSubmit={handleSubmit} noValidate>
        <Container fluid>
            <Row>
                <Col lg={12}>
                    <FormCard title="wines.groups.identification">
                        <TextField
                            name="name"
                            label="wines.fields.name"
                        />
                        <TextField
                            name="batch"
                            label="wines.fields.batch"
                        />
                        <NumberField
                            name="vintage"
                            label="wines.fields.vintage"
                        />
                    </FormCard>
                </Col>
                <Col lg={6}>
                    <FormCard title="wines.groups.detailed">
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
                        <TextField
                            name="region"
                            label="wines.fields.region"
                        />
                        <TextField
                            name="varietals"
                            label="wines.fields.varietals"
                        />
                        <TextField
                            name="winemaker"
                            label="wines.fields.winemaker"
                        />
                    </FormCard>
                </Col>
                <Col lg={6}>
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
                        <TemperatureField
                            name="alcoholDegree"
                            label="wines.fields.alcohol_degree"
                        />
                    </FormCard>
                    <FormCard title="wines.groups.consumption">
                        <TemperatureField
                            name="temperature"
                            label="wines.fields.temperature"
                        />
                        <TextareaField
                            name="foodPairing"
                            label="wines.fields.food_pairing"
                        />
                        <RatingField
                            name="rating"
                            label="wines.fields.rating"
                        />
                        <TextareaField
                            name="comment"
                            label="wines.fields.comment"
                        />
                    </FormCard>
                </Col>
            </Row>
        </Container>
    </BsForm>
);

export default reduxForm({
    validate: validateWine,
})(Form);
