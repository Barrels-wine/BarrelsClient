//@flow
import * as React from 'react';
import { connect } from 'react-redux';
import { submit } from 'redux-form';
import { Button } from 'reactstrap';
import { FormattedMessage } from 'react-intl';

const Submit = ({ submit, label, color, size }) => (
    <Button
        color={color}
        size={size}
        onClick={submit}
    >
        <FormattedMessage id={label} />
    </Button>
);

Submit.defaultProps = {
    color: 'primary',
    size: 'sm',
};

const mapDispatchToProps = (dispatch, { form }) => {
    return {
        submit: () => dispatch(submit(form)),
    };
}

export default connect(null, mapDispatchToProps)(Submit);
