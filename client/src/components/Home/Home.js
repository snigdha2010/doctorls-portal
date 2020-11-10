import React from 'react';
import Header from './Header/Header';
import Services from './Services/Services';
import FeaturedService from './FeaturedService/FeaturedService';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Testimonials from './Testimonial/Testimonials';
import Blogs from './Blogs/Blogs';
import Doctors from './Doctor/Doctors';
import Contact from './Contact/Contact';
import Footer from '../Shared/NavBar/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services/>
            <FeaturedService/>
            <MakeAppointment/>
            <Testimonials/>
            <Blogs/>
            <Doctors/>
            <Contact/>
            <Footer/>
            
        </div>
    );
};

export default Home;