import { Fragment } from 'react';

import * as ReactDOM from 'react-dom';
import Backdrop from './Backdrop';

import './ErrorModal.css';

const ErrorModal = ({ onClose, errorText }) => {
    const modalContent = (
        <Fragment>
            <Backdrop onClose={onClose} />
            <div className="modal">
                <header className="modal__header">
                    <h2>Error Occured!</h2>
                </header>
                <div className="modal__content">{errorText}</div>
                <footer className="modal__footer">
                    <button className="modal__button" onClick={onClose}>
                        CLOSE
                    </button>
                </footer>
            </div>
        </Fragment>
    );

    return ReactDOM.createPortal(
        modalContent,
        document.getElementById('modal-hook')
    );
};

export default ErrorModal;
