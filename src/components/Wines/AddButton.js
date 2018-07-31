// @flow
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { Button } from 'reactstrap';

import CreateModal from './CreateModal';

const AddButton = () => (
    <div className="mb-3">
        <CreateModal>
            <Button color="primary">
                <FormattedMessage id="wines.create.button" />
            </Button>
        </CreateModal>
    </div>
);

export default AddButton;
