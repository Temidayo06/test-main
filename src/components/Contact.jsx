import React from 'react'
import '../styles/Contact.css'

const Contact = () => {
    return (
        <div id='above' className='contact'>
            <section className='concflex'>
                <div className='conctext'>
                    <h5 className='contacth5'>
                        Get in Touch
                    </h5>
                    <h3 className='contacth3'>
                        Contact Me
                    </h3>
                    <p className='contactp'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
                <form className='inputbox' action="https://formspree.io/f/xqazkawr"
                    method="POST">
                    <label className="form-label d-block"> First name</label>
                    <input
                        type="text"
                        className="forminput"
                        required
                    />
                    <label className="form-label d-block">Last name</label>
                    <input
                        type="text"
                        className="forminput"
                        required
                    /><label className="form-label d-block ">Email</label>
                    <input
                        type="email"
                        className="forminput"
                        required
                    /><label className="form-label d-block">Phone number</label>
                    <input
                        type="number"
                        className="forminput"
                        required
                    />
                    <label htmlFor="message " className="form-label d-block">
                        Message
                    </label>
                    <textarea
                        placeholder='Type your message...'
                        cols="35"
                        rows="6"
                        className="formtxtarea"
                        required
                        name="message"
                    >
                    </textarea>
                    <button className='contactbtn' type="submit">Submit</button>
                </form>
            </section>
        </div>
    )
}

export default Contact