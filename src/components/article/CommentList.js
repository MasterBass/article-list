import React from 'react';
import CommentRow from './CommentRow';

const CommentList = ({comments}) => {
    return (
        <div className="text">
            <h2>Comments</h2>
            {comments.map(comment =>
                <CommentRow key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default CommentList;