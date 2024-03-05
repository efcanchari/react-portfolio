import React, { Component } from 'react';
import profile from './frank-profile.png';

class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>Elvis Frank Canchari Lapa</h1>
                <img src={profile} alt="Frank Lapa" />
                <p>Atlassian Community Leader</p>
                <p>This is my portfolio site.</p>
            </div>
        );
    }
}

export default HomePage;
