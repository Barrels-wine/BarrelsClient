// @flow
import * as React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { FormattedMessage, injectIntl } from 'react-intl';

import { toggleSearch } from "../../../../actions/ui";

const FORM = 'NAVBAR_SEARCH';

class Search extends React.Component {
    componentWillReceiveProps(nextProps) {
        if (this.props.showSearch && !nextProps.showSearch) {
            document.removeEventListener('keydown', this.onEscape);
        }

        if (!this.props.showSearch && nextProps.showSearch) {
            document.addEventListener('keydown', this.onEscape);
            this.input.focus();
        }
    }

    onEscape = (event) => {
        if(event.keyCode === 27){
            this.close();
        }
    };

    close = () => {
        this.input.blur();
    };

    render() {
        return (
            <form
                role="search"
                onSubmit={this.props.handleSubmit}
                className={classNames({
                    'navbar-form': true,
                    'open': this.props.showSearch,
                })}
            >
                <div className="form-group">
                    <input
                        ref={input => this.input = input}
                        onBlur={this.props.toggleSearch}
                        type="text"
                        placeholder={this.props.intl.formatMessage({id: 'search.placeholder'})}
                        className="form-control"
                    />
                    <div
                        onClick={this.close}
                        className="fa fa-times navbar-form-close"
                    />
                </div>
                <button
                    type="submit"
                    className="d-none"
                >
                    <FormattedMessage id="search.submit"/>
                </button>
            </form>
        );
    }

}

const mapStateToProps = (state) => ({
    showSearch: state.ui.showSearch,
});

const mapDispatchToProps = (dispatch) => ({
   toggleSearch: () => dispatch(toggleSearch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(
    reduxForm({form: FORM})(
        injectIntl(Search)
    )
);
