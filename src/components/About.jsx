import React from 'react'
import '../styles/About.css'
import image from '../assets/About Me.png'

const About = () => {
    return (
        <div id='about' className='About'>
            <section className='aboutflex'>
                <div className='aboutext'>
                    <h5 className='abouth5'>
                        About
                    </h5>
                    <h3 className='abouth3'>
                        About Me
                    </h3>
                    <p className='aboutp'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque. <br /><br />
                        Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus r.
                    </p>
                </div>
                <div>
                    <img className='aboutimg' src={image} alt="" />
                </div>
            </section>
        </div>
    )
}

export default About