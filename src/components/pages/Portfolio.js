import React from 'react';
import Project from '../Project';
const styles = {
    aboutTitle: {
        color: 'white',
        weight: 'bold',
    },
    aboutText: {
        color: 'white',
    },
    image: {
        width: "200px",
        margin: "left 20px",

    }
}
export default function Portfolio() {
    return (
        <div>
            <h3 style={styles.aboutTitle} >Portfolio</h3>
            <Project />
        </div>
    );
}