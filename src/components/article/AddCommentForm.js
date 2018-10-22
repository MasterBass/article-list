import React from 'react';
import './AddCommentForm.css';

const AddCommentForm = ({onSave, onChange, commentText}) => {
    return (
        <div className="text comment">
            <form>
                <label htmlFor="comment">Add New Comment</label>
                <br/>
                <textarea id="comment" onChange={onChange} value={commentText}/>
                <br/>
                <input type="submit" value="Save" onClick={onSave}/>
            </form>
        </div>
    );
};

export default AddCommentForm;