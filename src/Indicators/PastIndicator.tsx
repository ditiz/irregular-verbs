import React from "react";

const PastIndicator = () => {
    const style = {
        backgroundImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    };

    return (
        <span className="indicator-wrapper">
            <span className="indicator" style={style} />
        </span>
    );
};

export default PastIndicator;
