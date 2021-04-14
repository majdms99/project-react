import React from 'react';
import './Services.css'
import {Printer, Figma, Slack, Code} from 'react-feather'
import imageSrv from '../../image/services.jpg'
import {motion} from 'framer-motion'

const Services = () => {

    const fadeLeft = {
        hidden: {opacity: 0, x:-100},
        visable: {opacity: 1, x: 0}
    }
   const fadeRight ={
    hidden: {opacity: 0, x:+100},
    visable: {opacity: 1, x: 0}
    }


    return (
        <div className='services'>
            <div className='container'>
                <h3 className='special-heading'>Services</h3>
                <p>Don't be busy, be productive</p>

                <div className='ser-content'>
                    <div data-aos={"fade-left"} className='col'>
                    
                        <motion.div
                            variants={fadeRight}
                            initial='hidden'
                            animate='visable'
                            transition={{duration:1}}
                            
                         className='serv'>
                        <div className='icon'>
                                 <Printer className='icon' color='#10cab7' size={50}/>
                             </div>
                            <div className='text'>
                                <h3 >
                                    Graphic Design</h3>
                                <p>Graphic design is the process of visual communication and problem-solving using one or more of typography, photography and illustration.</p>
                            </div>
                         </motion.div>

                         <motion.div
                            variants={fadeRight}
                            initial='hidden'
                            animate='visable'
                            transition={{duration:1}}
                         className='serv'>
                             <div className='icon'>
                                 <Figma className='icon' color='#10cab7' size={50}/>
                             </div>
                            <div className='text'>
                                <h3>UI & UX</h3>
                                <p>Process of enhancing user satisfaction with a product by improving the usability, accessibility, and pleasure provided in the interaction.</p>
                            </div>
                         </motion.div>
                     </div>
                    <div className='col'>
                         <motion.div
                             variants={fadeLeft}
                             initial='hidden'
                             animate='visable'
                             transition={{duration:1}}
                         className='serv'>
                         <div className='icon'>
                                 <Code className='icon' color='#10cab7' size={50}/>
                             </div>
                            <div className='text'>
                                <h3>Web Development</h3>
                                <p>Web development is a broad term for the work involved in developing a web site for the Internet or an intranet.</p>
                            </div>
                         </motion.div>

                         <motion.div
                             variants={fadeLeft}
                             initial='hidden'
                             animate='visable'
                             transition={{duration:1}}
                         className='serv'>
                         <div className='icon'>
                                 <Slack className='icon' color='#10cab7' size={50}/>
                             </div>
                            <div className='text'>
                                <h3>Web Design</h3>
                                <p>Web design encompasses many different skills and disciplines in the production and maintenance of websites.</p>
                            </div>
                         </motion.div>
                    </div> 

                    <div className='col'>
                        <div className='image image-show'>
                          <img src={imageSrv}/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Services
