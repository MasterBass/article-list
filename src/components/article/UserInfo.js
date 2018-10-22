import React from 'react';

const UserInfo = ({user}) => {
    return (
        <div className="text">
            <h3>{user.name} - {user.username}</h3>
            <h4>Email: {user.email}</h4>
            <h4>Phone#: {user.phone}</h4>
            <h4>www: {user.website}</h4>
        </div>
    );
};

export default UserInfo;