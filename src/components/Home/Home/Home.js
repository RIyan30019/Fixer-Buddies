import React from 'react';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import News from '../News/News';
import OurTeam from '../OurTeam/OurTeam';
import RepairBrands from '../RepairBrands/RepairBrands';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import WorkProcess from '../WorkProcess/WorkProcess';

const Home = () => {
    return (
        <div>
            <Header />
            <RepairBrands />
            <Services />
            <WorkProcess />
            <OurTeam />
            <Testimonials />
            <News />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;