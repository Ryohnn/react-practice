import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { BreadcrumbItem } from '@/types';
import { tictactoe } from '@/routes';
import TicTacToeGame from '@/components/tic-tac-toe/tic-tac-toe-game';
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
            <TicTacToeGame/>
        </AppLayout>
    );
}
