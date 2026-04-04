import { useCallback, useEffect } from 'react';

export interface ModalProps {
    showModal: boolean;
    setShowModal: (arg0: boolean) => void;
    title: string;
}

export type ModalPropsToPassIn = 'showModal' | 'setShowModal';

export type BaseModalProps = Pick<ModalProps, ModalPropsToPassIn>;

const BaseModal = function (props: ModalProps) {
    const { showModal, setShowModal, title } = props;

    const onCloseHandler = useCallback(
        () => setShowModal(false),
        [setShowModal],
    );

    useEffect(() => {
        function escButton(e: KeyboardEvent) {
            if (e.key === 'Escape') {
                onCloseHandler();
            }
        }

        if (showModal) {
            document.addEventListener('keydown', escButton);
        }

        return () => {
            document.removeEventListener('keydown', escButton);
        };
    }, [onCloseHandler, showModal]);

    return (
        showModal ? (
            <div className="modal-overlay" onClick={onCloseHandler}>
                <div className="modal" onClick={(e) => e.stopPropagation()}>
                    <span onClick={onCloseHandler}>X</span>
                    <div className="modal-content">
                        <h1>{title}</h1>
                    </div>
                </div>
            </div>
        ) : null
    );
}

export default BaseModal;
