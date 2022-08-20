import { Component } from "react";
import propTypes from 'prop-types';

export class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown = (e) => {
                if (e.code === 'Escape' && e.target.nodeName === 'BODY') {
            return this.props.toggleModal();
        }
    };

    handleBackdrop = (e) => {
        if (e.target === e.currentTarget) {
            this.props.toggleModal();
        }
    }

    render() {
        return (<>
            <div className="Overlay" onClick={this.handleBackdrop}>
                <div className="Modal">
                    {this.props.children}
                </div>
            </div>
        </>)
    }
}

Modal.propTypes = {
    children: propTypes.any,
    toggleModal: propTypes.func,
}