import React from 'react';
import Navigation from './Navigation';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

// if using styles, incorporate styles variable and objects
const styles = {
    headerStyle: {
      background: 'linear-gradient(to right, black, purple)',
    //   position: 'fixed',
      width: '100%',
      top: 0,
      textAlign: 'right',
      flex: 'inline',
      color: 'white',
      padding: "right 5px",
      
    },
}

// use JSX curly braces to evaluate style object
function Header() {
    return (
        <header style={styles.headerStyle} className="Footer"> 
            Nicholas Wong
        </header>
        // <header style={styles.headerStyle} className="header">
        //     <h1 style={styles.headingStyle}> Nicholas Wong </h1>
        // </header>
    );
}

export default Header;