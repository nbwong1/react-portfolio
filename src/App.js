import './App.css';
import React from 'react';
import Header from './components/Header';
import PortfolioContainer from './components/PortfolioContainer';
import Footer from './components/Footer';

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