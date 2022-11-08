import React from 'react';
import NickImage from '../images/Nick-Square.jpeg';

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

    }
}

export default function About() {
    return (
        <div>
            <h3 style={styles.aboutTitle} className="aboutHeader">About Me</h3>
            <img style={styles.image} src={NickImage} alt="an asian-american genderqueer individual wearing sunglasses and a hat, riding on a tram from the Disneyland Parking lot to the resort."/>
            <p style={styles.aboutText} className="aboutText">My name is Nicholas Wong and I am a Product Analyst who is looking to move towards front-end web development.</p>
        </div>
    );
}