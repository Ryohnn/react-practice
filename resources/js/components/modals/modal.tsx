interface ModalProps {
    showModal: boolean;
    title: string;
    onCloseClick: () => void;
}

const Modal = function (props : ModalProps ) {
    const {
        showModal,
        title,
        onCloseClick,
    } = props

    return (
        (showModal && <div className="modal overlay">
            <div className="modal">
                <span onClick={onCloseClick}>X</span>
                <div className="modal content">
                    <h1>{title}</h1>
                </div>
            </div>
        </div>)
    )
}

export default Modal
