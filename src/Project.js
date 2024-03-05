import React, { Component } from 'react';

class Project extends Component {
    render() {
        const { title, link, repo, image } = this.props.details;
        return (
            <div>
                <h2>{title}</h2>
                <a href={link} target="_blank" >Deployed Version</a>
                <a href={repo} target="_blank" >GitHub Repo</a>
                <img src={image} alt={`Screenshot of ${title}`} />
            </div>
        );
    }
}

export default Project;
