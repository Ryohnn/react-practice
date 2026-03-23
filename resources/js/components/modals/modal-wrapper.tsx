import React, { useEffect } from 'react';
import Modal from '@/components/modals/modal';

interface ModalWrapperProps {
    title: string;
    showModal: boolean;
    setShowModal: (arg0: boolean) => void;
}

const ModalWrapper: React.FC<ModalWrapperProps> = function (props : ModalWrapperProps ) {
    const {
        title,
        showModal,
        setShowModal,
    } = props

    useEffect(() => {
        function escButton(e: KeyboardEvent) {
            if (e.key === 'Escape') {
                setShowModal(false);
            }
        }

        if (showModal) {
            document.addEventListener('keydown', escButton);
        }

        return () => {
            document.removeEventListener('keydown', escButton);
        }
    }, [setShowModal, showModal])

    return (
        <Modal
            showModal={showModal}
            title={title}
            onCloseHandler={() => {setShowModal(false)}}
        />
    );
}

export default ModalWrapper;
