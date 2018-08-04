// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { Header, Sidebar, Footer } from '../Navigation';

const Layout = ({ children, showSidebar, collapseSidebar }) => (
    <div className={classNames({
        'layout': true,
        'aside-collapsed-text': collapseSidebar,
        'aside-toggled': showSidebar,
    })} >
        <div className="wrapper">
            <Header />
            <Sidebar />
            <section className="section-container">
                {children}
            </section>
            <Footer className="footer-container" />
        </div>
    </div>
);

const mapStateToProps = (state) => ({
    showSidebar: state.ui.showSidebar,
    collapseSidebar: state.ui.collapseSidebar,
});

export default connect(mapStateToProps)(Layout);
