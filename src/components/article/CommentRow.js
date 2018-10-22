import React from 'react';

const CommentRow = ({comment}) => {
    return (
        <div>
            <strong>Name: {comment.name}</strong> <br/>
            <span>Email: {comment.email}</span>
            <p>{comment.body}</p>
        </div>
    );
};

export default CommentRow;