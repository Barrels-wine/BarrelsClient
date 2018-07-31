//@flow
import * as React from 'react';
import { Modal as BsModal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { FormattedMessage } from 'react-intl';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        };
    }

    toggle = () => {
        this.setState({
            show: !this.state.show,
        });
    };

    render() {
        const { size, children, title, button } = this.props;

        const toggler = React.cloneElement(
            this.props.toggler,
            { onClick: this.toggle, key: 'toggler' }
        );

        const modal = (
            <BsModal
                key="modal"
                isOpen={this.state.show}
                toggle={this.toggle}
                size={size}
            >
                {title && <ModalHeader
                    toggle={this.toggle}
                >
                    <span className="h3">
                        <FormattedMessage id={title} />
                    </span>
                </ModalHeader>}
                <ModalBody>
                    {children}
                </ModalBody>
                <ModalFooter>
                    {button}
                    <Button
                        color="secondary"
                        onClick={this.toggle}
                    >
                        <FormattedMessage id="common.cancel" />
                    </Button>
                </ModalFooter>
            </BsModal>
        );

        return [toggler, modal];
    }
};

export default Modal;
