import React, { useEffect } from "react";
import Squarebox from "../component/squarebox";
import { winnerDetection } from "../utils";

function Gameboard() {
    const [values, setValues] = React.useState([
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ]);
    const [isNext, setisNext] = React.useState(true);
    const [rowindex, setRowindex] = React.useState(0);
    const [columnindex, setColumnindex] = React.useState(0);
    const [gameWinner, setGameWinner] = React.useState(false);

    const playerInput = (rowindex, columnindex) => {
        if (values[rowindex][columnindex] == null && !gameWinner) {
            setisNext(!isNext);
            let copyvalues = JSON.parse(JSON.stringify(values));
            copyvalues[rowindex][columnindex] = isNext ? "X" : "O";
            setRowindex(rowindex);
            setColumnindex(columnindex);
            setValues(copyvalues);
        } else if (gameWinner) {
            alert(`${!isNext ? "X" : "O"} - Already won`);
        } else {
            alert("The box is already selected");
        }
    };

    useEffect(() => {
        let winner = winnerDetection(rowindex, columnindex, values, isNext);
        console.log(winner);
        if (winner) {
            setGameWinner(true);
        }
    }, [values]);

    const restartGame = () => {
        setValues([
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ]);
        setisNext(true);
        setRowindex(0);
        setColumnindex(0);
        setGameWinner(false);
    };

    return (
        <>
            {!gameWinner ? (
                <p className="textcenter">Next Player:{isNext ? "X" : "O"}</p>
            ) : (
                <div className="textcenter">
                    <button
                        className="buttoncenter"
                        onClick={() => restartGame()}
                    >
                        Play Again
                    </button>
                </div>
            )}
            <div>
                {values.map((item1, rowindex) => {
                    return (
                        <div className="container">
                            {item1.map((val, columnindex) => {
                                return (
                                    <Squarebox
                                        playerInput={() =>
                                            playerInput(rowindex, columnindex)
                                        }
                                        values={val}
                                        rowindex={rowindex}
                                        columnindex={columnindex}
                                    />
                                );
                            })}
                        </div>
                    );
                })}
            </div>
            {gameWinner && (
                <p className="textcenter">
                    The Winner is : {!isNext ? "X" : "O"}
                </p>
            )}
        </>
    );
}

export default Gameboard;
