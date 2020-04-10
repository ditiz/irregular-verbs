import React from "react";

const FrIndicator = () => {
    const style = {
        backgroundImage: "linear-gradient(to right, #ff0844 0%, #ffb199 100%)",
    };

    return (
        <div className="indicator-wrapper">
            <span className="indicator" style={style}></span>
        </div>
    );
};

export default FrIndicator;
