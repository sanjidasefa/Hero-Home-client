import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';

const Card = ({service}) => {
   console.log(service)
   const {title,rating,image,price, createdBy,_id} = service
  return (
     <StyledWrapper>
      <div className="card">
        <div className="card2 p-3">
          <img src={image} alt="" className='h-[180px] rounded-xl mb-2'/>
          <div className='flex justify-between text-blue-900'>
            <h1 className='text-xl font-semibold'>{title}</h1>
            <h1 className='text-white bg-green-300 rounded-xl px-2'>{rating}</h1>
          </div>
          <h1 className='text-green-600 font-semibold'>${price}</h1>
          <p className='my-3 text-blue-700'>{service.description}</p>
         
          <p className='text-blue-900 text-sm'>{createdBy}</p>
           
          <Link to={`/Service-Details/${_id}`} className="btn w-full text-xl bg-green-400 text-white font-medium rounded-2xl mt-3">Service-Details</Link>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
   width: 300px;
   height: 400px;
   background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
   border-radius: 20px;
   transition: all .3s;
  }

  .card2 {
   width: 300px;
   height: 400px;
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
