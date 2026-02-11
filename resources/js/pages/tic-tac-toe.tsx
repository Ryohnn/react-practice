import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { BreadcrumbItem } from '@/types';
import { tictactoe } from '@/routes';
import TicTacToeBoard from '@/components/tic-tac-toe/tic-tac-toe-board';
import "css/tic-tac-toe.scss"

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: "Tic Tac Toe",
        href: tictactoe().url
    },
]

export default function TicTacToe()
{
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Tic Tac Toe"/>
            <div className="tic-tac-toe flex h-full flex-1 flex-col gap-4 overflow-x-auto m-4 p-4 rounded-sm bg-neutral-800">
                <TicTacToeBoard/>
            </div>
        </AppLayout>
    );
}
