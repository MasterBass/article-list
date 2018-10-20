import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as articleActions from '../../actions/articleActions';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <Link to="about">Go to about page</Link>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        articles: state.articles
    }
}

function mapDispatchToProps(dispatch) {
    actions: bindActionCreators(articleActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);