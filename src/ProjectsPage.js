import React, { Component } from 'react';
import Project from './Project'; // Ensure this import matches your file structure
import projects from './projects.json'; // Adjust path as necessary

class ProjectsPage extends Component {
    render() {
        return (
            <div>
                {projects.map(project => (
                    <Project key={project.id} details={project} />
                ))}
            </div>
        );
    }
}

export default ProjectsPage;
