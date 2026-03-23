import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { modals } from '@/routes';
import ModalWrapper from '@/components/modals/modal-wrapper';
import { useState } from 'react';
import 'css/modals.scss';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Modals',
        href: modals().url,
    },
];

export default function Modals() {
    const [showTestModal, setShowTestModal] = useState(false);

    const onOpenTestModalClick = () => {
        setShowTestModal(!showTestModal);
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Modals" />
            <div>
                <button
                    className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
                    onClick={onOpenTestModalClick}
                >
                    Open Test Modal
                </button>
            </div>
            <ModalWrapper
                title="test"
                showModal={showTestModal}
                setShowModal={setShowTestModal}
            />
        </AppLayout>
    );
}
