# React Portfolio Project

This project showcases a personal portfolio built with React. It includes several components designed to display a professional profile, projects, and contact information. Below is a summary of the main components developed and their functionalities.

## Components

### `App.js`

- The root component that wraps the entire application.
- Implements routing using `react-router-dom` to navigate between different pages like Home, Projects, and Contact.

### `Header.js`

- A navigational component displayed across all pages.
- Includes links to the Home page, Projects page, and Contact page.
- Styles defined in `Header.css` to present a horizontal navigation bar with a flat design, responsive to screen size changes.

### `HomePage.js`

- The landing page of the portfolio.
- Displays the developer's name, a headshot or avatar, a brand statement, and a brief introduction.
- Uses `HomePage.css` for styling to center content, format the avatar into a circle, and ensure text is responsive.

### `ProjectsPage.js`

- A page that lists all projects.
- Dynamically renders `Project` components based on data sourced from `projects.json`.
- Uses `ProjectsPage.css` to align project entries centrally with a maximum width, enhancing readability.

### `Project.js`

- Represents an individual project.
- Displays the project title, description, links to the deployed version and GitHub repository, and a screenshot.
- Arranges the screenshot on the left and text content on the right, with styling defined in `Project.css`.

### `ContactPage.js`

- Provides contact details and a form for visitors to send messages.
- Lists contact methods with icons for email, LinkedIn, GitHub, and a CV download link.
- Includes a contact form for name, email, reason for contact, and a message.
- Uses `ContactPage.css` to style the contact links and form, aligning items centrally and adjusting the layout responsively.

## Additional Information

The project emphasizes a clean, professional look with a focus on usability and responsiveness. Each component has been styled with CSS to ensure consistency across the application, supporting a seamless user experience regardless of device size.

## Setup and Installation

- Clone the repository.
- Run `npm install` to install dependencies.
- Use `npm start` to launch the development server.

For more detailed instructions, please refer to the project setup section.
