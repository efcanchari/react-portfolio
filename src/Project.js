import React, { Component } from 'react';
import projectLogo from './project-logo.png';

class Project extends Component {
    render() {
        const { title, link, repo, image } = this.props.details;
        return (
            <div>
                <h2>{title}</h2>
                <a href={link} target="_blank" >Deployed Version</a>
                <a href={repo} target="_blank" >GitHub Repo</a>
                <img src={projectLogo} alt={`Screenshot of ${title}`} />
            </div>
        );
    }
}

export default Project;
