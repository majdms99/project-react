import React from 'react'
import AboutImage from '../../image/about.jpg';
import './About.css'

const About = () => {
    return (
        <div className='about'>
            <div className='container'>
                <h3 className='special-heading'>About</h3>
                <p>Less is more work</p>
                <div className='about-content'>
                    <div className='image'>
                        <img src={AboutImage}/>
                    </div>
                    <div className='text'>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nemo neque voluptate tempora velit cum non, fuga vitae architecto delectus sed maxime rerum impedit aliquam obcaecati, aut excepturi iusto laudantium!
                        </p>
                        <hr/>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nemo neque voluptate tempora velit cum non, fuga vitae architecto delectus sed maxime rerum impedit aliquam obcaecati, aut excepturi iusto laudantium!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
