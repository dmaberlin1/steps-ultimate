import React from 'react';

const StepMessage = ({step,children}) => {
    return (
            <div className="message">
            <h3>Step: {step}: {children}</h3>
            </div>

    );
};

export default StepMessage;
