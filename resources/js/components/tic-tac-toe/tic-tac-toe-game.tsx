import { useState } from 'react';
import TicTacToeBoard from '@/components/tic-tac-toe/tic-tac-toe-board';
import type { SquareData } from '@/types';

export default function TicTacToeGame()
{
    const [history, setHistory] = useState<SquareData[][]>([createSquares()]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove];
    const xIsNext = currentMove % 2 === 0;

    function createSquares(): SquareData[] {
        return Array.from({ length: 9 }, () => ({
            value: '',
            classes: ['square'],
        }));
    }

    function handlePlay(nextSquares: SquareData[])
    {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function toHistory(index: number)
    {
        setCurrentMove(index);
    }

    const moveHistory = history.map((squares, index) => {
        return (
            <li key={index}>
                <button
                    className="btn"
                    onClick={() => toHistory(index)}
                >
                    Go to move: {index}
                </button>
            </li>
        );
    });

    return (
        <>
            <div className="tic-tac-toe m-4 flex h-full flex-1 gap-4 overflow-x-auto rounded-sm bg-neutral-800 p-4">
                <TicTacToeBoard
                    xIsNext={xIsNext}
                    squares={currentSquares}
                    onPlay={handlePlay}
                />
                <div className="game-info">
                    <ol>
                        {moveHistory}
                    </ol>
                </div>
            </div>
        </>
    );
}
