import React from 'react';

type PostProps = {
    title: string
}

export const Post: React.FC<PostProps> = ({title}) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
            </div>
        </div>
    )
};
