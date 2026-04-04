import React from 'react';

export interface ModalProps {
    showModal: boolean;
    setShowModal: (arg0: boolean) => void;
    title: string;
    children?: React.ReactNode;
}

export type ModalPropsToPassIn = 'showModal' | 'setShowModal';

export type BaseModalProps = Pick<ModalProps, ModalPropsToPassIn>;
