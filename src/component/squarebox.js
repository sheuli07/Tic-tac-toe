import React from "react";

function Squarebox(props) {
    const { playerInput, values, rowindex, columnindex } = props;
    return (
        <div className="square" onClick={() => playerInput()}>
            <p className="textcenter">{values}</p>
            {/* <p>
                {rowindex}-{columnindex}
            </p> */}
        </div>
    );
}

export default Squarebox;
