import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem, InertiaSharedProps } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { modals } from '@/routes';
import { useState } from 'react';
import 'css/modals.scss';
import EditUserModal from '@/components/modals/edit-user-modal';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Modals',
        href: modals().url,
    },
];

export default function Modals() {
    const [showUserModal, setShowUserModal] = useState(false);

    const { auth } = usePage<InertiaSharedProps>().props;

    const openUserModal = () => {
        setShowUserModal(true);
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Modals" />
            <div className="p-4">
                <div>
                    <button
                        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
                        onClick={openUserModal}
                    >
                        Open User Modal
                    </button>

                    <EditUserModal
                        data={auth.user}
                        showModal={showUserModal}
                        setShowModal={setShowUserModal}
                    />
                </div>
            </div>
        </AppLayout>
    );
}
