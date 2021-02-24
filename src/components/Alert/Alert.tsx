import React from 'react';

type AlertProps = {
    text: string
}

export const Alert: React.FC<AlertProps> = ({text}) => {
    return (
        <div className="alert alert-warning" role="alert">
            {text}
        </div>
    )
};
