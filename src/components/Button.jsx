import React from 'react';

const Button = ({onClick=null, color,border='none', backgroundColor='transparent',
                    disabled=false, children}) => {
    return (
        <button style={{backgroundColor: backgroundColor, color: color,border:border}}

                disabled={disabled}
                onClick={() => onClick}
        >
            {children}
        </button>
    );
};

export default Button;
