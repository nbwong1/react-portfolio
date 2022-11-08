import React from 'react';
import Header from './src/components/Header';
import PortfolioContainer from './src/components/PortfolioContainer';
import Footer from './src/components/Footer';

const styles = {
    appStyles: {
        background: "#262626",
    },
}
function App() {
    return (
        <div style={styles.appStyles}>
            <Header />
            <div style={styles.appStyles}>
                <PortfolioContainer />
            </div>
            <Footer />          
        </div>
    );
}

export default App;