//@flow
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import {
    Card,
    CardHeader,
    CardBody,
} from 'reactstrap';

const FormCard = ({ children, title }) => (
    <Card className="card-default">
        <CardHeader>
            <span className="h4">
                <FormattedMessage id={title} />
            </span>
        </CardHeader>
        <CardBody>
            {children}
        </CardBody>
    </Card>
);

export default FormCard;
