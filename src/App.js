import React from 'react';
import Header from './components/Header';
import PortfolioContainer from './components/PortfolioContainer';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <header>
                <Header />
            </header>
            <PortfolioContainer />
            <footer>
                <Footer />
            </footer>            
        </div>
    );
}

export default App;