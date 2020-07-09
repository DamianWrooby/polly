import React from 'react';

const Tooltip = ({ label, value, maxValue }) => {
    return (
        <div>
            <p>{label}</p>
            <p>{value}</p>
            <p>{maxValue}</p>
        </div>
    );
};

export default Tooltip;