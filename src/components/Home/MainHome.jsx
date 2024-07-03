import React from 'react';
import Home from './Home';
import Skill from './Skill';
import Projects from './Project';
import Education from './Education';
import ContactForm from './ContactForm';

const MainHome = () => {
    return (
        <div>
            <Home></Home>
            <Skill></Skill>
            <Projects></Projects>
            <Education></Education>
            <ContactForm></ContactForm>
        </div>
    );
};

export default MainHome;