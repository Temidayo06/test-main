import React from 'react'
import '../styles/HeroSection.css'
import pic from '../assets/pic1.png'
const HeroSection = () => {
    return (
        <div className='heros'>
            <section className='heroflex'>
                <div className='herotext'>
                    <h3 className='heroh3'>
                        Hey, i am Dayo
                    </h3>
                    <h1 className='heroh1'>
                        I develop dynamic and User-Centered Web  Applications
                    </h1>
                    <p className='herop'>
                        My expertise spans both front-end and back-end development, enabling me to build comprehensive solutions that meet diverse client needs.
                    </p>
                    <button className='herobtn'>
                        <a className='text-white text-decoration-none' href="#above">
                            Get In Touch
                        </a>
                    </button>
                </div>
                <div>
                    <img className='heropic' src={pic} alt="" />
                </div>
            </section>
        </div>
    )
}

export default HeroSection