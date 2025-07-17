import React from 'react';

const Client = ({username}) => {
    return (
        <div className="client">
            <div className="avatarPlaceholder">{username.charAt(0)}</div>
            <span className="userName">{username}</span>
        </div>
    );
};

export default Client;