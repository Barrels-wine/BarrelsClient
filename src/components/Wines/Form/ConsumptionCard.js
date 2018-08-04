//@flow
import * as React from 'react';
import { Row, Col } from 'reactstrap';

import {
    TextareaField,
    TemperatureField,
    RatingField,
    DateTimeField,
} from '../../Fields/Fields';
import { FormCard } from '../../Common';

const ConsumptionCard = () => (
    <FormCard title="wines.groups.consumption">
        <Row>
            <Col lg={6}>
                <DateTimeField
                    name="drinkFrom"
                    label="wines.fields.drink_from"
                    dateFormat="year"
                />
            </Col>
            <Col lg={6}>
                <DateTimeField
                    name="drinkTo"
                    label="wines.fields.drink_to"
                    dateFormat="year"
                />
            </Col>
        </Row>
        <Row>
            <Col lg={6}>
                <DateTimeField
                    name="climaxFrom"
                    label="wines.fields.climax_from"
                    dateFormat="year"
                />
            </Col>
            <Col lg={6}>
                <DateTimeField
                    name="climaxTo"
                    label="wines.fields.climax_to"
                    dateFormat="year"
                />
            </Col>
        </Row>
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
);

export default ConsumptionCard;
