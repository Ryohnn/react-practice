import { useEffect } from 'react';

interface ModalProps {
    showModal: boolean;
    title: string;
    onCloseHandler: () => void;
}

const Modal = function (props : ModalProps ) {
    const {
        showModal,
        title,
        onCloseHandler,
    } = props



    return (
        showModal ? ( <div className="modal-overlay" onClick={() => onCloseHandler()}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <span onClick={onCloseHandler}>X</span>
                <div className="modal-content">
                    <h1>{title}</h1>
                </div>
            </div>
        </div>) : null
    )
}

export default Modal
