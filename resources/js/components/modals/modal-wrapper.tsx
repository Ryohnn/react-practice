import React, { useEffect, useState } from 'react';
import Modal from '@/components/modals/modal';

interface ModalWrapperProps {
    title: string,
}

const ModalWrapper: React.FC<ModalWrapperProps> = function (props : ModalWrapperProps ) {
    const {
        title,
    } = props

    const [showModal, setShowModal] = useState(true);

    function escButton(e: KeyboardEvent) {
        if (e.key === 'Escape') {
            setShowModal(false);
        }
    }

    useEffect(() => {
        if (showModal) {
            document.addEventListener('keydown', escButton);
        }

        return () => {
            document.removeEventListener('keydown', escButton);
        }
    }, [showModal])

    function onCloseClick()
    {
        setShowModal(false);
    }

    return (
        <Modal
            showModal={showModal}
            title={title}
            onCloseClick={onCloseClick}
        />
    );
}

export default ModalWrapper;
