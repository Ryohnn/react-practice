import Square from '@/components/tic-tac-toe/square';
import { useState } from 'react';
import { type SquareData } from '@/types';

export default function TicTacToeBoard()
{
    const [isPlayerX, setIsPlayerX] = useState(true);
    const [squares, setSquares] = useState<SquareData[]>(createSquares);
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (isPlayerX ? 'X' : 'O');
    }

    function createSquares(): SquareData[] {
        return Array.from({ length: 9 }, () => ({
            value: '',
            classes: ['square'],
        }));
    }

    function handleClick(i: number)
    {
        if (squares[i].value || calculateWinner(squares)) {
            return;
        }

        const nextSquares = squares.map((square, index) =>
            index === i ? { ...square, value: isPlayerX ? 'X' : 'O' } : square
        );

        setIsPlayerX(!isPlayerX);
        setSquares(nextSquares);
    }

    return (
        <div className="tic-tac-toe board">
            <div className="status">{status}</div>
            <div className="board-rows">
                <div className="board-row">
                    <Square square={squares[0]} onSquareClick={() => handleClick(0)} />
                    <Square square={squares[1]} onSquareClick={() => handleClick(1)} />
                    <Square square={squares[2]} onSquareClick={() => handleClick(2)} />
                </div>
                <div className="board-row">
                    <Square square={squares[3]} onSquareClick={() => handleClick(3)} />
                    <Square square={squares[4]} onSquareClick={() => handleClick(4)} />
                    <Square square={squares[5]} onSquareClick={() => handleClick(5)} />
                </div>
                <div className="board-row">
                    <Square square={squares[6]} onSquareClick={() => handleClick(6)} />
                    <Square square={squares[7]} onSquareClick={() => handleClick(7)} />
                    <Square square={squares[8]} onSquareClick={() => handleClick(8)} />
                </div>
            </div>
        </div>
    );
}

function calculateWinner(squares: SquareData[]) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (
            squares[a].value &&
            squares[a].value === squares[b].value &&
            squares[a].value === squares[c].value
        ) {
            return squares[a].value;
        }
    }

    return null;
}
