import React from "react";

const ParticipleIndicator = () => {
    const style = {
        backgroundImage: "linear-gradient(to right, #43e97b 0%, #38f9d7 100%)",
    };
    
    return (
        <div className="indicator-wrapper">
            <span className="indicator" style={style}></span>
        </div>
    );
};

export default ParticipleIndicator;
