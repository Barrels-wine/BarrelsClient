//@flow
import * as React from 'react';
import { reduxForm } from 'redux-form';
import {
    Form as BsForm,
    Container,
    Row,
    Col,
} from 'reactstrap';

import { validateWine } from '../../../validation';
import IdentificationCard from './IdentificationCard';
import DetailsCard from './DetailsCard';
import CategoryCard from './CategoryCard';
import ConsumptionCard from './ConsumptionCard';

const Form = (props) => (
    <BsForm onSubmit={props.handleSubmit} noValidate>
        <Container fluid>
            <Row>
                <Col lg={12}>
                    <IdentificationCard {...props} />
                </Col>
                <Col lg={6}>
                    <CategoryCard {...props} />
                    <DetailsCard {...props} />
                </Col>
                <Col lg={6}>
                    <ConsumptionCard {...props} />
                </Col>
            </Row>
        </Container>
    </BsForm>
);

export default reduxForm({
    validate: validateWine,
})(Form);
