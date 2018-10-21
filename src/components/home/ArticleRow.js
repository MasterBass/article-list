import React from 'react';
import { Link } from 'react-router-dom';

const ArticleRow = ({article}) => {
    return (
        <li><Link to={`/article/${article.id}`}>{article.title}</Link></li>
    );
};

export default ArticleRow;