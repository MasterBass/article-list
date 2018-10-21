import React from 'react';

const ArticleInfo = ({article}) => {
    return (
        <div className="text">
            <h2>{article.title}</h2>
            <p>{article.body}</p>
        </div>
    );
};

export default ArticleInfo;