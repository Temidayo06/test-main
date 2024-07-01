import React from 'react'
import '../styles/Projects.css'
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/Image.png'
import { GoArrowUpRight } from "react-icons/go";
const Projects = () => {
    return (
        <div id='project' className='Project'>
            <main>
                <div>
                    <h5 className='projecth5'>
                        Recent Projects
                    </h5>
                    <div className='linkflex'>
                        <h2 className='projecth2'>
                            My Portfolio
                        </h2>
                        <Link to='https://github.com/Temidayo06' target='blank'>
                            <button className='projectbtn'>
                                <FaGithub className='projecticon' />Visit My Github
                            </button>
                        </Link>
                    </div>
                </div>
                <section className='projectflex'>
                    <div className='project1'>
                        <img className='project1img' src={project1} alt="" />
                        <div className='meal'>
                            <h3 className='project1h3'>
                                Meal Website
                            </h3>
                            <p className='project1p'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                            </p>
                            <Link to='https://git-meal.vercel.app/' target='blank'>
                                <h4 className='project1h4'>
                                    View Website<GoArrowUpRight className='arrow' />
                                </h4>
                            </Link>
                        </div>
                    </div>
                    <div className='project1'>
                        <img className='project1img' src={project2} alt="" />
                        <div className='meal'>
                            <h3 className='project1h3'>
                                Random Advice Website
                            </h3>
                            <p className='project1p'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                            </p>
                            <Link to='https://advice-generator-app-main-ivory-ten.vercel.app' target='blank'>
                                <h4 className='project1h4'>
                                    View Website<GoArrowUpRight className='arrow' />
                                </h4>
                            </Link>
                        </div>
                    </div>
                    <div className='project1'>
                        <img className='project1img' src={project3} alt="" />
                        <div className='meal'>
                            <h3 className='project1h3'>
                                App DashBoard
                            </h3>
                            <p className='project1p'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                            </p>
                            <Link to='#'>
                                <h4 className='project1h4'>
                                    View Website<GoArrowUpRight className='arrow' />
                                </h4>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Projects