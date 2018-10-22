import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import ArticleRow from './ArticleRow';


class HomePage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onSearchConditionChanged = this.onSearchConditionChanged.bind(this);
        this.state = {
            searchCondition: ''
        }
    }

    onSearchConditionChanged(event) {
        this.setState({searchCondition: event.target.value})
    }

    getFilteredArticles() {
        if (this.state.searchCondition) {
            return this.props.articles
                .filter(acl =>
                    acl.title.toLowerCase()
                        .indexOf(this.state.searchCondition.toLowerCase()) >= 0 ||
                    acl.body.toLowerCase()
                        .indexOf(this.state.searchCondition.toLowerCase()) >= 0
                );
        }
        return this.props.articles;
    }

    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <Link to="/about">Go to about page</Link>
                <br/>
                <br/>
                <form>
                    <label htmlFor="search">SEARCH</label>
                    <input name="search-article" id="search"
                           onChange={this.onSearchConditionChanged}/>
                </form>

                <div className="text">
                    <ul>
                        {this.getFilteredArticles().map(article =>
                            <ArticleRow key={article.id} article={article}/>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        articles: state.articles.filter(acl => acl.title)
    }
}

export default connect(mapStateToProps)(HomePage);