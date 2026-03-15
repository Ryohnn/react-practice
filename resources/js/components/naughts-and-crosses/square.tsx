import { memo } from 'react';

interface SquareData {
    value: string;
    classes: Array<string>;
}

const Square = memo(
    function Square(
        {square, onSquareClick}:
        { square: SquareData, onSquareClick: () => void }
    ) {
        return (
            <button
                className={square.classes.join(' ')}
                onClick={onSquareClick}
            >
                {square.value}
            </button>
        );
    }
);

export type { SquareData };

export default Square;
