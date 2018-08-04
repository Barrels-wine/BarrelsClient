// @flow
import * as React from 'react';

import { CreateModal } from '../../Wines';

const NavItemAdd = () => (
    <li className="nav-item">
        <CreateModal>
            <a className="nav-link">
                <em className="icon-plus" />
            </a>
        </CreateModal>
    </li>
);

export default NavItemAdd;
