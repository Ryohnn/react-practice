import Square from '@/components/tic-tac-toe/square';
import { useState } from 'react';
import { type SquareData } from '@/types';

export default function TicTacToeBoard()
{
    const [isPlayerX, setIsPlayerX] = useState(true);
    const [squares, setSquares] = useState<SquareData[]>(createSquares);
    const winner = calculateWinner(squares);

    let currentPlayer, statusMessage, statusClass;
    if (winner) {
        statusMessage = 'Winner: ';
        statusClass = !isPlayerX ? 'playerX' : 'playerO';
        currentPlayer = !isPlayerX ? 'X' : 'O';
    } else {
        statusMessage = 'Next player: ';
        statusClass = isPlayerX ? 'playerX' : 'playerO';
        currentPlayer = isPlayerX ? 'X' : 'O';
    }

    function createSquares(): SquareData[] {
        return Array.from({ length: 9 }, () => ({
            value: '',
            classes: ['square'],
        }));
    }

    /**
     * To re-render when using memo, make sure you don't reference original values
     *
     * @param i
     */
    function handleClick(i: number)
    {
        if (squares[i].value || calculateWinner(squares)) {
            return;
        }

        const nextSquares = squares.map(function(square, index) {
            let newSquare = square;

            if (index === i) {
                newSquare = {
                    ...square,
                    value: isPlayerX ? 'X' : 'O',
                    classes: [...square.classes, isPlayerX ? 'playerX' : 'playerO'],
                };
            }

            return newSquare;
        });

        setIsPlayerX(!isPlayerX);
        setSquares(nextSquares);
    }

    return (
        <div className="tic-tac-toe board">
            <div className={`status`}>
                <p>{statusMessage}<span className={statusClass}>{currentPlayer}</span></p>
            </div>
            <div className="board-rows">
                <div className="board-row">
                    <Square
                        square={squares[0]}
                        onSquareClick={() => handleClick(0)}
                    />
                    <Square
                        square={squares[1]}
                        onSquareClick={() => handleClick(1)}
                    />
                    <Square
                        square={squares[2]}
                        onSquareClick={() => handleClick(2)}
                    />
                </div>
                <div className="board-row">
                    <Square
                        square={squares[3]}
                        onSquareClick={() => handleClick(3)}
                    />
                    <Square
                        square={squares[4]}
                        onSquareClick={() => handleClick(4)}
                    />
                    <Square
                        square={squares[5]}
                        onSquareClick={() => handleClick(5)}
                    />
                </div>
                <div className="board-row">
                    <Square
                        square={squares[6]}
                        onSquareClick={() => handleClick(6)}
                    />
                    <Square
                        square={squares[7]}
                        onSquareClick={() => handleClick(7)}
                    />
                    <Square
                        square={squares[8]}
                        onSquareClick={() => handleClick(8)}
                    />
                </div>
            </div>
        </div>
    );
}

function calculateWinner(squares: SquareData[]): boolean {
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
            return true;
        }
    }

    return false;
}
