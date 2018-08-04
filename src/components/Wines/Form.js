//@flow
import * as React from 'react';
import { reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
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
    RegionField,
    VarietalsField,
} from '../Fields/Fields';
import { FormCard } from '../Common';
import { validateWine } from '../../validation';

const Form = ({ handleSubmit, country }) => (
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
                </Col>
                <Col lg={6}>
                    <FormCard title="wines.groups.consumption">
                        <NumberField
                            name="drinkFrom"
                            label="wines.fields.drink_from"
                        />
                        <NumberField
                            name="drinkTo"
                            label="wines.fields.drink_to"
                        />
                        <NumberField
                            name="climaxFrom"
                            label="wines.fields.climax_from"
                        />
                        <NumberField
                            name="climaxTo"
                            label="wines.fields.climax_to"
                        />
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

const mapStateToProps = (state, { form }) => {
    const selector = formValueSelector(form);

    return {
        country: selector(state, 'country'),
    };
}

export default reduxForm({
    validate: validateWine,
})(connect(mapStateToProps)(Form));
