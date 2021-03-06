import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ArticleInfo from './ArticleInfo';
import UserInfo from './UserInfo';
import CommentList from './CommentList';
import AddCommentForm from './AddCommentForm';
import * as commentActions from '../../actions/commentActions';


class ArticlePage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            newComment: '',
            commentId: 1000
        };
        this.addComment = this.addComment.bind(this);
        this.updateNewCommentText = this.updateNewCommentText.bind(this);
    }

    componentWillMount() {
        if (this.props.match.params.id > 0 &&
        this.props.comments.length === 0) {
            this.props.actions.loadCommentsRequst(this.props.match.params.id);
        }
    }

    updateNewCommentText(event) {
        const comment = event.target.value;
        return this.setState({newComment: comment});
    }

    addComment(event) {
        event.preventDefault();
        if(this.state.newComment.length > 0) {
            this.props.actions.createCommentRequest({
                postId: Number.parseInt(this.props.match.params.id),
                id: this.state.commentId,
                body: this.state.newComment,
                name: "Ivan Pupkin",
                email: "pupkin.ivan@gmail.com"
            });
            this.setState({commentId: this.state.commentId + 1, newComment: ''})
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
                <AddCommentForm onSave={this.addComment}
                                onChange={this.updateNewCommentText}
                                commentText={this.state.newComment} />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    const articleId = Number.parseInt(ownProps.match.params.id);
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
    let comments = [];
    if(state.comments.length > 0) {
        comments = state.comments.filter(com => com.postId === articleId);
    }
    if (state.articles.length > 0) {
        article = state.articles.find(art =>
            art.id === articleId);
        if (state.users.length > 0) {
            user = state.users.find(usr => usr.id === article.userId);
        }
    }
    return {
        article: article,
        user: user,
        comments: comments
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(commentActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);