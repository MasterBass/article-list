import React from 'react';
import { Link } from 'react-router-dom';

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
export default HomePage;