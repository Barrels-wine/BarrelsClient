// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import Messages from '../Messages';
import { Header, Sidebar, OffSidebar, Footer } from '../Navigation';
import routesNames from '../../config/routesNames';

const Layout = ({ children }) => (
    <div className="wrapper">
        {/*<Messages />*/}
        <Header />
        <Sidebar />
        <OffSidebar />
        <section>
            {children}
        </section>
        <Footer />
    </div>
);

export default Layout;
