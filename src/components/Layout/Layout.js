// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import Messages from '../Messages';
import { Header, Sidebar, OffSidebar, Footer } from '../Navigation';

const Layout = ({ children, showSidebar, showOffSidebar }) => (
    <div className={classNames({
        'wrapper': true,
        'aside-collapsed': showSidebar,
        'offsidebar-open': showOffSidebar,
    })} >
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

const mapStateToProps = (state) => ({
    showSidebar: state.ui.showSidebar,
    showOffSidebar: state.ui.showOffSidebar,
});

export default connect(mapStateToProps)(Layout);
