import React from 'react';
import Hero from '../components/hero/hero';
import NavBar from '../components/navbar/navbar';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from '../data/data';
import Footer from '../components/footer/footer';
import Pricing from '../components/pricing/pricing';

const Home = () => {
    return (
        <div>
            <NavBar />
            <Hero {...homeObjOne} />
            <Hero {...homeObjThree} />
            <Hero {...homeObjTwo} />
            <Pricing />
            <Hero {...homeObjFour} />
            <Footer />
        </div>
    )
}

export default Home
