import { Head } from '@inertiajs/react';

import HeadingSmall from '@/components/heading-small';
import { type BreadcrumbItem } from '@/types';

import AppLayout from '@/layouts/app-layout';
import SettingsLayout from '@/layouts/settings/layout';
import { edit as userPreferences } from '@/routes/user-preferences';
import CountrySelector from '@/components/user-preferences/language-selector';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'User preference settings',
        href: userPreferences.url(),
    },
];

export default function UserPreferences() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Appearance settings" />

            <SettingsLayout>
                <div className="space-y-6">
                    <HeadingSmall
                        title="Appearance settings"
                        description="Update your account's appearance settings"
                    />
                    <CountrySelector/>
                </div>
            </SettingsLayout>
        </AppLayout>
    );
}
