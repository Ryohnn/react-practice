import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { BreadcrumbItem, User } from '@/types';
import { users } from '@/routes';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: "Users",
        href: users().url
    },
]

function renderUsernames(users: User[])
{
    return users.map(user =>
        <p>{user.name}</p>
    );
}

export default function Users({ users }: { users: User[] })
{
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Users" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                {renderUsernames(users)}
            </div>
        </AppLayout>
    );
}
