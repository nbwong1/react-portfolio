import React from 'react';
// add file for styles or import bootstrap?
const GitHubLogo = require("./images/GitHub-Mark-Light-32px.png");
const LinkedInLogo = require("./images/LI-In-Bug.png");
const TwitterLogo = require("./images/2021 Twitter logo - blue.png");
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

// if using styles, incorporate styles variable and objects
const styles = {
    footerStyle: {
      background: 'linear-gradient(to right, black, purple)',
      position: 'fixed',
      width: '100%',
      bottom: 0,
      textAlign: 'center',
      flex: 'inline',
    },
    iconStyles: {
        height: '32px',
        padding: '5px',
    }
  };
// use JSX curly braces to evaluate style object
function Footer() {
    return (
        <footer style={styles.footerStyle} className="Footer">
            {/* github repo */}
            <a href="https://github.com/nbwong1" >
                <img style={styles.iconStyles} src={GitHubLogo} alt="this is the github logo octocat" />
            </a>
            {/* linkedin */}
            <a href="https://www.linkedin.com/in/nicholasbwong/" >
                <img src={LinkedInLogo} style={styles.iconStyles} alt="this is the linkedin logo" />
            </a>
            {/* twitter */}
            <a href="https://twitter.com/nickwongcodes" >
                <img src={TwitterLogo} style={styles.iconStyles} alt="this is the twitter logo" />
            </a>
        </footer>
        // <footer style={styles.footerStyle} className="header">
        //     // insert text for the footer and decide what else is needed in the footer
        //     <p style={styles.Style}></p>
        // </footer>
    );
}

export default Footer;