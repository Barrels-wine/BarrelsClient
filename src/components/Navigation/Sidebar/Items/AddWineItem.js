// @flow
import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import { CreateModal } from '../../../Wines';

const AddWineItem = ({ item }) => (
    <li>
        <CreateModal>
            <a>
                {item.icon && <em className={item.icon}></em>}
                <FormattedMessage id={item.label} />
            </a>
        </CreateModal>
    </li>
);

export default AddWineItem;
