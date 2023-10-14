import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Work from '../components/Work/Work';
import Project from '../components/Project/Project';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';


const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <Hero></Hero>
            <div id='about'>
            <About></About>
            </div>
            <div id='service'>
            <Work></Work>
            </div>
            <Project></Project>
            <div id='contact'>
            <Contact></Contact>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;