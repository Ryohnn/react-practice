import { useState } from 'react';
import MoveHistory from 'tic-tac-toe/move-history';
import TicTacToeBoard from 'tic-tac-toe/tic-tac-toe-board';
import { type SquareData } from 'tic-tac-toe/square';

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

    function toHistory(toMove: number)
    {
        setCurrentMove(toMove);
    }

    return (
        <>
            <div className="tic-tac-toe m-4 flex h-full flex-1 gap-4 overflow-x-auto rounded-sm bg-neutral-800 p-4">
                <TicTacToeBoard
                    xIsNext={xIsNext}
                    squares={currentSquares}
                    onPlay={handlePlay}
                />
                <div className="game-info">
                    <MoveHistory
                        currentMove={currentMove}
                        clickHandler={toHistory}
                    />
                </div>
            </div>
        </>
    );
}
