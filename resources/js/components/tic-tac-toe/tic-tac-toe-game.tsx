import { useState } from 'react';
import TicTacToeBoard from '@/components/tic-tac-toe/tic-tac-toe-board';

export default function TicTacToeGame()
{
    return (
        <>
            <div className="tic-tac-toe flex h-full flex-1 flex-col gap-4 overflow-x-auto m-4 p-4 rounded-sm bg-neutral-800">
                <TicTacToeBoard/>
            </div>
            <div className="game-info">
                <ol></ol>
            </div>
        </>
    );
}
