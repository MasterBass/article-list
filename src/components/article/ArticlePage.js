import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ArticleInfo from './ArticleInfo';
import UserInfo from './UserInfo';
import CommentList from './CommentList';
import * as commentActions from '../../actions/commentActions';


class ArticlePage extends React.Component {

    componentWillMount() {
        if (this.props.match.params.id > 0) {
            this.props.actions.loadCommentsRequst(this.props.match.params.id);
        }
    }

    render() {
        return (
            <div>
                <h1>Article Page</h1>
                <Link to="../home">Go back</Link>
                <ArticleInfo article={this.props.article}/>
                <UserInfo user={this.props.user}/>
                <CommentList comments={this.props.comments}/>
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
        user: user,
        comments: state.comments
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(commentActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);