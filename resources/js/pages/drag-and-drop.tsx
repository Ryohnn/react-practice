import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { BreadcrumbItem } from '@/types';
import { dragandrop } from '@/routes';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Drag and Drop',
        href: dragandrop().url,
    },
];

export default function DragAndDrop() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Drag and Drop" />
            <div className="p-4">
            </div>
        </AppLayout>
    );
}
