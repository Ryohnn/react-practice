import { useState } from 'react';
import TicTacToeBoard from '@/components/tic-tac-toe/tic-tac-toe-board';
import type { SquareData } from '@/types';

export default function TicTacToeGame()
{
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState<SquareData[][]>([createSquares()]);
    const currentSquares = history[history.length - 1];

    function createSquares(): SquareData[] {
        return Array.from({ length: 9 }, () => ({
            value: '',
            classes: ['square'],
        }));
    }

    function handlePlay(nextSquares: SquareData[])
    {
        setHistory([...history, nextSquares]);
        setXIsNext(!xIsNext);
    }

    function toHistory(index: number)
    {
    }

    const moveHistory = history.map((squares, index) => {
        return (
            <li key={index}>
                <button onClick={() => toHistory(index)}>{index}</button>
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
                    <ol>{moveHistory}</ol>
                </div>
            </div>
        </>
    );
}
