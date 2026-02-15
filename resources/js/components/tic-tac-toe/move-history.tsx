import Move from '@/components/tic-tac-toe/move';

function MoveHistory({currentMove, clickHandler}: {currentMove: number; clickHandler: (toMove: number) => void})
{
    const moves = [];

    for (let count = 0; count <= currentMove; count++) {
        moves.push(<Move key={count} index={count} clickHandler={clickHandler}/>);
    }

    return (<>{moves}</>);
}

export default MoveHistory
