function Move({index, clickHandler}: {index: number; clickHandler: (toMove: number) => void})
{
    const msg = index === 0 ? 'Reset Moves' : `Go to move ${index}`;

    return (
        <li>
            <button className="btn"
                    onClick={() => clickHandler(index)}
            >
                {msg}
            </button>
        </li>
    );
}

export default Move;
