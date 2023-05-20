import React from 'react';
import './Home.css';
import Me from '../../assets/avatar-1.png';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
    return (
        <section className="home container" id='home'>
            <div className="intro">
                <img src={Me} alt="" className='home__img' width='120' />
                <h1 className="home__name">Javon Jack</h1>
                <span className="home__education">I'm a Senior Deep Learning Engineer</span>
                <div />

                <a href="#contact" className="btn"> Contact Me</a>

                <ScrollDown />
            </div>
            <Shapes />
        </section>
    )
}

export default Home