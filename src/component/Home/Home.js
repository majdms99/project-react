import React from 'react'
import {Dribbble, GitMerge ,Loader} from 'react-feather'
import './Home.css'
import {motion} from 'framer-motion'

 const Home = () => {

    const fadeUp = {
        hidden: {opacity: 0, y:+100},
        visable: {opacity: 1, y: 0}
    }
   const fadeRight ={
    hidden: {opacity: 0, x:+100},
    visable: {opacity: 1, x: 0}
    }
    const fadeDown = {
        hidden: {opacity: 0, y:-100},
        visable: {opacity: 1, y: 0}
    }



    return (
        <div className='features'>
            <div className='container'>
                <motion.div 
                     variants={fadeUp}
                     initial='hidden'
                     animate='visable'
                     transition={{duration:1}}
                   className='feat' >
                    <Dribbble color='#10cab7' size={60}/>
                    <h3>Tell Us Your Idea</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab</p>
                </motion.div>

                <motion.div
                     variants={fadeRight}
                     initial='hidden'
                     animate='visable'
                     transition={{duration:1}}
                     className='feat'>
                    <GitMerge color='#10cab7' size={60}/>
                    <h3>We Will Do All the Work</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab</p>
                </motion.div>

                <motion.div
                 variants={fadeDown}
                 initial='hidden'
                 animate='visable'
                 transition={{duration:1}}
                className='feat'>
                    <Loader color='#10cab7' size={60}/>
                    <h3>Your Product is Worldwide</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab</p>
                </motion.div>
            </div>
        </div>
    )
}
export default Home