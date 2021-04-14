import React from 'react'
import './Portfolio.css'
import {motion } from 'framer-motion'

const Portfolio = (props) => {

  const fadeLeft = {
    hidden: {opacity: 0, x:-100},
    visable: {opacity: 1, x: 0}
}
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
        <div className='portfolio'>
          {/* {console.log(props.info)}
          {props.info.map((item, index) => {
            return (
              <>
              <h1>{item.title}</h1>
              <p>{item.text}</p>
              <img src={item.image}/>
              </>
            )
          })} */}

          <div className='container'>
            <h2 className='special-heading'>Portfolio</h2>
            <p>If you do it right, it will last forever </p>
            <div className='portfolio-content'>
                {props.info.map((item) => {
                  return(
                    <motion.div
                      variants={fadeUp}
                      initial='hidden'
                      animate='visable'
                      transition={{duration:1}}
                      className='card' key={item.id}>

                       <motion.img src={item.image}
                        variants={fadeLeft}
                        initial='hidden'
                        animate='visable'
                        transition={{duration:2}} />
                       <motion.div className='text-info'
                        variants={fadeRight}
                        initial='hidden'
                        animate='visable'
                        transition={{duration: 2}}
                       >
                         <h3>{item.title}</h3>
                         <p>{item.text}</p>
                       </motion.div>
                   </motion.div>
                  )
                })}
            </div>
          </div>
        </div>
    )
}

export default Portfolio
