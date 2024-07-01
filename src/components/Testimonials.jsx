import React from 'react'
import '../styles/Testimonials.css'
import star from '../assets/stars.png'
import avatar1 from '../assets/testpic1.png'
import avatar2 from '../assets/avatar2.png'
import avatar3 from '../assets/avatar3.png'

const Testimonials = () => {
    return (
        <div id='test' className='Test'>
            <h5 className='testh5'>
                Clients Feedback
            </h5>
            <h2 className='testh2'>
                Customer Testimonials
            </h2>
            <section className='textflex'>
                <div className='test1'>
                    <img className='teststar' src={star} alt="" />
                    <h3 className='testh3'>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
                    </h3>
                    <div className='testflex'>
                        <img className='testpic' src={avatar1} alt="" />
                        <div>
                            <h4 className='testh4'>
                                Dianne Rusells
                            </h4>
                            <p className='testp'>
                                Starbucks
                            </p>
                        </div>
                    </div>
                </div>
                <div className='test1'>
                    <img className='teststar' src={star} alt="" />
                    <h3 className='testh3'>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
                    </h3>
                    <div className='testflex'>
                        <img className='testpic' src={avatar2} alt="" />
                        <div>
                            <h4 className='testh4'>
                                Kristin Watson
                            </h4>
                            <p className='testp'>
                                Louis Vuitton
                            </p>
                        </div>
                    </div>
                </div>
                <div className='test1'>
                    <img className='teststar' src={star} alt="" />
                    <h3 className='testh3'>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
                    </h3>
                    <div className='testflex'>
                        <img className='testpic' src={avatar3} alt="" />
                        <div>
                            <h4 className='testh4'>
                                Kathryn Murphy
                            </h4>
                            <p className='testp'>
                                McDonald's
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonials