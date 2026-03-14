import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import 'css/naughts-and-crosses.scss';
import { modals } from '@/routes';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Modals',
        href: modals().url,
    },
];

export default function Modals() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Modals" />
        </AppLayout>
    );
}
