import Square from 'tic-tac-toe/square';
import { type SquareData } from 'tic-tac-toe/square';
import { JSX } from 'react';

interface TicTacToeBoardProps {
    xIsNext: boolean;
    squares: SquareData[];
    onPlay: (squares: SquareData[]) => void;
}

export default function TicTacToeBoard({ xIsNext, squares, onPlay }: TicTacToeBoardProps) {
    const winner = calculateWinner(squares);

    let currentPlayer, statusMessage, statusClass;
    if (winner) {
        statusMessage = 'Winner: ';
        statusClass = !xIsNext ? 'playerX' : 'playerO';
        currentPlayer = !xIsNext ? 'X' : 'O';
    } else {
        statusMessage = 'Next player: ';
        statusClass = xIsNext ? 'playerX' : 'playerO';
        currentPlayer = xIsNext ? 'X' : 'O';
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
                    value: xIsNext ? 'X' : 'O',
                    classes: [...square.classes, xIsNext ? 'playerX' : 'playerO'],
                };
            }

            return newSquare;
        });

        onPlay(nextSquares);
    }

    function createSquareComponent(index: number)
    {
        return (
            <Square
                key={`square-${index}`}
                square={squares[index]}
                onSquareClick={() => handleClick(index)}
            />
        );
    }

    function createBoardRowComponent(key: number, squareComponents: JSX.Element[])
    {
        return (<div key={`row-${key}`} className="board-row">
            {squareComponents}
        </div>);
    }

    function renderSquares()
    {
        const squareComponents = squares.map((square, index) => createSquareComponent(index));
        const rows = [
            createBoardRowComponent(0, squareComponents.slice(0, 3)),
            createBoardRowComponent(1, squareComponents.slice(3, 6)),
            createBoardRowComponent(2, squareComponents.slice(6, 9)),
        ];

        return (<>{rows}</>);
    }

    return (
        <div className="tic-tac-toe board">
            <div className={`status`}>
                <p>{statusMessage}<span className={statusClass}>{currentPlayer}</span></p>
            </div>
            <div className="board-rows">
                {renderSquares()}
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
