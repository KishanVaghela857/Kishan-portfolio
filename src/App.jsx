import React from 'react';
import Navbar from './Components/Navbar-Data/Navbar';
import HomePage from './Components/HomePage/HomePage';
import HomeRightAni from './Components/HomePage/HomeRightAni';
import AboutMe from './Components/About_Us/About'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
    return (
        <>
        <HomeRightAni/>
        <Router>
            <Routes>
                <Route path='/' element={
                    <>
                        <Navbar />
                        <HomePage />
                        <AboutMe />
                    </>
                } />
            </Routes>
        </Router>
                </>
    );
}

export default App