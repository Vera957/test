import { useEffect } from "react";
import propTypes from 'prop-types';

export const Modal = (props) => {

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.code === 'Escape' && e.target.nodeName === 'BODY') {
                return props.toggleModal(false);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, [props])

    const handleBackdrop = (e) => {
        if (e.target.nodeName !== "IMG") {
            props.toggleModal(false);
        }
    }

    return (<>
        <div className="Overlay" onClick={handleBackdrop}>
            <div className="Modal">
                {props.children}
            </div>
        </div>
    </>)

}

Modal.propTypes = {
    children: propTypes.any,
    toggleModal: propTypes.func,
}