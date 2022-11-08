import React from 'react';
const myResume  = require("../assets/wongCV2022.docx");

const styles = {
    resumeTitle: {
        color: 'white',
        weight: 'bold',
    },
    resumeText: {
        color: 'white',
    },
    image: {
        width: "200px",
        margin: "left 20px",

    }
}
export default function Resume() {
    return (
        <div>
            <h3 style={styles.resumeTitle}>My Resume</h3>
            <p style={styles.resumeText}>Download my resume: <a href={myResume} download>here</a></p>
            
        </div>
    );
}