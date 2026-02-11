import Square from '@/components/tic-tac-toe/square';
import { useState } from 'react';

export default function TicTacToeBoard()
{
    const [isPlayerX, setIsPlayerX] = useState(true);
    const [squares, setSquares] = useState<Array<string | null>>(Array(9).fill(null))

    function handleClick(i: number)
    {
        if (squares[i]) {
            return;
        }

        const nextSquares = squares.slice();

        if (isPlayerX) {
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O';
        }

        setIsPlayerX(!isPlayerX);
        setSquares(nextSquares);
    }

    return (
        <div className="tic-tac-toe board">
            <div className="board-row">
                <Square
                    value={squares[0]}
                    onSquareClick={() => handleClick(0)}
                />
                <Square
                    value={squares[1]}
                    onSquareClick={() => handleClick(1)}
                />
                <Square
                    value={squares[2]}
                    onSquareClick={() => handleClick(2)}
                />
            </div>
            <div className="board-row">
                <Square
                    value={squares[3]}
                    onSquareClick={() => handleClick(3)}
                />
                <Square
                    value={squares[4]}
                    onSquareClick={() => handleClick(4)}
                />
                <Square
                    value={squares[5]}
                    onSquareClick={() => handleClick(5)}
                />
            </div>
            <div className="board-row">
                <Square
                    value={squares[6]}
                    onSquareClick={() => handleClick(6)}
                />
                <Square
                    value={squares[7]}
                    onSquareClick={() => handleClick(7)}
                />
                <Square
                    value={squares[8]}
                    onSquareClick={() => handleClick(8)}
                />
            </div>
        </div>
    );
}
