import { memo } from 'react';
import { type SquareData } from '@/types';

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

export default Square;
