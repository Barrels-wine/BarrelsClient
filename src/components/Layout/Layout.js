// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import Messages from '../Messages';
import { Header, Sidebar, OffSidebar, Footer } from '../Navigation';

const Layout = ({ children, showSidebar, collapseSidebar, showOffSidebar }) => (
    <div className={classNames({
        'aside-collapsed': collapseSidebar,
        'aside-toggled': showSidebar,
        'offsidebar-open': showOffSidebar,
    })} >
        <div className="wrapper">
            {/*<Messages />*/}
            <Header />
            <Sidebar />
            <OffSidebar />
            <section className="section-container">
                {children}
            </section>
            <Footer />
        </div>
    </div>
);

const mapStateToProps = (state) => ({
    showSidebar: state.ui.showSidebar,
    collapseSidebar: state.ui.collapseSidebar,
    showOffSidebar: state.ui.showOffSidebar,
});

export default connect(mapStateToProps)(Layout);
