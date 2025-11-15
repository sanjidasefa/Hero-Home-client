import React from 'react';
import { motion } from "motion/react"
import { useEffect, useState } from "react"
import metting from '../assets/metting.jpg'
import oil from '../assets/oil.jpg'
import slide4 from '../assets/slide4.jpg'
import slide5 from '../assets/slide5.jpg'
import org from '../assets/0rg.jpg'
import cmt from '../assets/cmt.jpg'
import opp from '../assets/opp.jpg'

  const initialOrder = [
    metting,org,cmt,opp,
    oil,slide4 , slide5
  ]
   
const Category = () => {
  const [order, setOrder] = useState(initialOrder)
   useEffect(() => {
        const timeout = setTimeout(() => setOrder(shuffle(order)), 1000)
        return () => clearTimeout(timeout)
    }, [order])

  return (
    <>
      <ul style={container}>
        {
          order.map(category => (
            <motion.li key={category}
            layout
            transition={spring}
            style={item}>
              <img src={category} alt="" className='w-full h-full object-cover border-8'/>
            </motion.li>
          ))
        }
      </ul>
      
    </>
  );
   
};

export default Category;

function shuffle([...array]) {
    return array.sort(() => Math.random() - 0.5)
    }
const spring = {
    type: "spring",
    damping: 20,
    stiffness: 300,
}

const container = {
    listStyle: "none",
    padding: 0,
    margin: 0,
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    gap: 20,
    width: '100%',
    // flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center",
}

const item = {
  flex: '1 1 250px',
    // width: 100,
    height: 250,
    borderRadius: "10px",
    overflow : 'hidden'
} 
