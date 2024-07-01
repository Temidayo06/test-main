import React from 'react'
import Navbars from './components/Navbars'
import HeroSection from './components/HeroSection'
import Skill from './components/Skill'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

const Home = () => {
    return (
        <div>
            <Navbars />
            <HeroSection />
            <Skill />
            <About />
            <Projects />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home
