import { Component } from "react";

export class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown = (e) => {
        console.log(e.target.nodeName)
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
        console.log(this.props.children)
        return (<>
            <div className="Overlay" onClick={this.handleBackdrop}>
                <div className="Modal">
                    {this.props.children}
                </div>
            </div>
        </>)
    }
}