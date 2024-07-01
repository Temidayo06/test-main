import React from 'react'
import phone from '../assets/phone.png'
import tag from '../assets/tag.png'
import ui from '../assets/ui.png'
import web from '../assets/web.png'
import '../styles/Skill.css'

const Skill = () => {
    return (
        <div className='skill'>
            <p>
                My Skills
            </p>
            <h4>
                My Expertise
            </h4>
            <section className='skills'>
                <div className='skillbox'>
                    <img className='skillimg' src={phone} alt="" />
                    <h3 className='skillh3'>
                        Responsive Design
                    </h3>
                    <p className='skillp'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                    </p>
                </div>
                <div className='skillbox'>
                    <img className='skillimg' src={tag} alt="" />
                    <h3 className='skillh3'>
                        Front-End Frameworks
                    </h3>
                    <p className='skillp'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                    </p>
                </div>
                <div className='skillbox'>
                    <img className='skillimg' src={ui} alt="" />
                    <h3 className='skillh3'>
                        Testing and Debugging
                    </h3>
                    <p className='skillp'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                    </p>
                </div>
                <div className='skillbox'>
                    <img className='skillimg' src={web} alt="" />
                    <h3 className='skillh3'>
                        Cloud Services
                    </h3>
                    <p className='skillp'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Skill