import React from 'react';
import Navigation from './Navigation';


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
      marginRight: "20px"
    },
}

// use JSX curly braces to evaluate style object
function Header() {
    return (
        <header style={styles.headerStyle} className="Footer"> 
          Nicholas Wong
        </header>
    );
}

export default Header;