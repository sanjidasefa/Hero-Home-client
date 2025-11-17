import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';
import { GrMoney } from "react-icons/gr";
import { FcRating } from "react-icons/fc";
import { MdMailOutline } from "react-icons/md";
import * as motion from "motion/react-client"

const Card = ({service}) => {
   //console.log(service)
   const {title,rating,image,price,_id} = service
  return (
     <StyledWrapper>
      <motion.div   initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ duration: 0.8 }} className="card">
        <div className="card2 p-3">
          <img src={image} alt="" className='h-[180px] w-full rounded-xl mb-2'/>
          <div className='flex justify-between text-blue-900'>
            <h1 className='text-xl font-semibold'>{title}</h1>
            <h1 className='text-white bg-green-300 rounded-xl flex items-center justify-center gap-2 px-2'><FcRating></FcRating>{rating}</h1>
          </div>
          <h1 className='text-green-400 font-semibold flex'><GrMoney className='mr-2'/>${price}</h1>
          <p className='my-3 text-blue-700 '>{service.description}</p>
         
          <p className='text-green-400 text-sm items-center flex gap-2'><MdMailOutline />{service.email}</p>
           
          <Link to={`/Service-Details/${_id}`} className="btn  text-lg bg-green-400 text-white  rounded-2xl mt-3">Service-Details</Link>
        </div>
      </motion.div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
   width: 350px;
   height: 420px;
   background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
   border-radius: 20px;
   transition: all .3s;
  }

  .card2 {
   width: 350px;
   height: 420px;
   background-color: #ffffff;
   border-radius: 10px;
   transition: all .2s;
  }

  .card2:hover {
   transform: scale(0.98);
   border-radius: 20px;
  }

  .card:hover {
   box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);
  }`;

export default Card;
