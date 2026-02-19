import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { BreadcrumbItem } from '@/types';
import { naughtsandcrosses } from '@/routes';
import NaughtsAndCrossesGame from 'naughts-and-crosses/naughts-and-crosses-game';
import "css/naughts-and-crosses.scss"

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: "Naughts and Crosses",
        href: naughtsandcrosses().url
    },
]

export default function NaughtsAndCrosses()
{
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Naughts and Crosses" />
            <NaughtsAndCrossesGame />
        </AppLayout>
    );
}
