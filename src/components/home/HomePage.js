import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import ArticleRow from './ArticleRow';


class HomePage extends React.Component {
    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <Link to="about">Go to about page</Link>
                <ul>
                    {this.props.articles.map(article =>
                        <ArticleRow key={article.id} article={article}/>
                    )}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        articles: state.articles
    }
}

export default connect(mapStateToProps)(HomePage);