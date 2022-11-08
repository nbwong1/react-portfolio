import React from 'react';

// add code for style for the project as cards, need to include the following: img, header(title), link to deployed app, link to github repo
const styles = {
    projectTitle: {
        color: 'white',
        weight: 'bold',
    },
    projectText: {
        color: 'white',
    },
    image: {
        width: "200px",
        margin: "left 20px",

    }
}

function Project() {
    return (
        <div>
            <h5 style={styles.projectTitle}>Title Name</h5>
            <img alt="image coming soon" />
            <a>Deployed App link "WIP" </a>
            <a>Github Repo Link "WIP"</a>
        </div>
    )
}

export default Project;