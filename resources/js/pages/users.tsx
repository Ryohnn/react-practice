import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { BreadcrumbItem } from '@/types';
import { users } from '@/routes';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: "Users",
        href: users().url
    },
]

export default function Users()
{
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Users" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
            </div>
        </AppLayout>
    );
}
