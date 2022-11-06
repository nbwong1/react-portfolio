import React from 'react';
// add file for styles or import bootstrap?
// import '../styles/Header.css';
// if using styles, incorporate styles variable and objects

// use JSX curly braces to evaluate style object
function Header() {
    const headerText = "TBD";
    return (
        <header style={styles.headerStyle} className="header">
            <h1 style={styles.headingStyle}>{ headerText }</h1>
        </header>
    );
}

export default Header;