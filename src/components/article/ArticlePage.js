import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import ArticleInfo from './ArticleInfo';
import UserInfo from "./UserInfo";


class ArticlePage extends React.Component {
    render() {
        return (
            <div>
                <h1>Article Page</h1>
                <Link to="../home">Go back</Link>
                <ArticleInfo article={this.props.article}/>
                <UserInfo user={this.props.user}/>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    let article = {
        title: '',
        body: '',
        userId: ''
    };
    let user = {
        name: '',
        username: '',
        email: '',
        phone: '',
        website: ''
    };
    if (state.articles.length > 0) {
        const articleId = Number.parseInt(ownProps.match.params.id);
        article = state.articles.find(art =>
            art.id === articleId);
        if (state.users.length > 0) {
            user = state.users.find(usr => usr.id === article.userId);
        }

    }
    return {
        article: article,
        user: user
    }
}

export default connect(mapStateToProps)(ArticlePage);