import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import PortfolioContainer from './components/PortfolioContainer';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <Header />
            <Navigation />
            <PortfolioContainer />
            <Footer />
        </div>
    );
}

export default App;