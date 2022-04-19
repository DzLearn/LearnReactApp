import {useRef,useState,useEffect} from 'react'
import { Card } from 'react-bootstrap'
import { motion } from 'framer-motion';

import '../assets/styles/motion.css'

import images from '../assets/Images'

export default function Motion() {
  return (
    <div className='container'>
      <MotionCard />
    </div>
  )
}

function MotionCard()
{
  const [width, setWidth] = useState( 0 );
  const motion1 = useRef();
  useEffect( () =>
  {
    setWidth( motion1.current.scrollWidth - motion1.current.offsetWidth )
   }, [] );
  return (
    <Card>
      <Card.Body>
        <motion.div ref={motion1} className='motion1' whileTap={{cursor:'grabbing'}}>
          <motion.div drag="x" dragConstraints={{right:0,left:-width}} className='inner-motion1'>
            {images.map( image =>
            {
              return (
                <motion.div className='item' key={image}>
                  <img src={image} alt=""/>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </Card.Body>
    </Card>
  )
}
