import React, { useCallback, useEffect } from 'react';
import { ModalProps } from '@/types/modals';

const BaseModal = function (props: ModalProps) {
    const { showModal, setShowModal, title, children } = props;

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

    return showModal ? (
        <div className="modal-overlay" onClick={onCloseHandler}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h1 className="modal-title">{title}</h1>
                    <span className="" onClick={onCloseHandler}>X</span>
                </div>
                <hr className="my-3" />
                <div className="modal-content">{children}</div>
            </div>
        </div>
    ) : null;
}

export default BaseModal;
