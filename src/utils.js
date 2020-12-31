export const winnerDetection = (rowindex, columnindex, values, isNext) => {
    let win = true;
    isNext = !isNext ? "X" : "O";

    //column case
    for (let i = 0; i < values.length; i++) {
        if (values[rowindex][i] !== isNext) {
            win = false;
            break;
        }
    }

    if (win) return win;

    win = true;

    // row case
    for (let i = 0; i < values.length; i++) {
        if (values[i][columnindex] !== isNext) {
            win = false;
            break;
        }
    }

    if (win) return win;
    win = true;

    // diagonal case
    if (
        rowindex == columnindex ||
        (rowindex == 0 && columnindex == values.length - 1) ||
        (rowindex == values.length - 1 && columnindex == 0)
    ) {
        for (let i = 0; i < values.length; i++) {
            if (values[i][i] !== isNext) {
                win = false;
                break;
            }
        }

        if (win) return win;
        win = true;

        for (let i = 0; i < values.length; i++) {
            if (values[i][values.length - 1 - i] !== isNext) {
                win = false;
                break;
            }
        }
        if (win) return win;
    }
};
