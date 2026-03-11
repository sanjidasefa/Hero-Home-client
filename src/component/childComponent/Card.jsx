import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';
import { GrMoney } from "react-icons/gr";
import { FcRating } from "react-icons/fc";
import { MdMailOutline } from "react-icons/md";
import { motion } from "framer-motion";

const Card = ({ service }) => {
  const { title, rating, image, price, _id, description, email } = service;

  return (
    <StyledWrapper>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="card_outer"
      >
        <div className="card_inner p-4 shadow-lg">
          {/* Image Container */}
          <div className="overflow-hidden rounded-xl mb-4 h-[180px]">
            <img 
              src={image} 
              alt={title} 
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>

          {/* Content Area */}
          <div className="flex flex-col justify-between h-[210px]">
            <div>
              <div className="flex justify-between items-start gap-2 mb-2">
                <h2 className="text-xl font-bold text-slate-800 dark:text-white line-clamp-1">
                  {title}
                </h2>
                <span className="flex items-center gap-1 bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 px-2 py-1 rounded-lg text-sm font-bold border border-amber-100 dark:border-amber-800">
                  <FcRating /> {rating}
                </span>
              </div>

              <div className="flex items-center text-green-600 dark:text-green-400 font-bold text-lg mb-2">
                <GrMoney className="mr-2" /> ${price}
              </div>

              <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2 mb-4">
                {description}
              </p>
            </div>

            {/* Bottom Actions */}
            <div className="mt-auto">
              <div className="flex items-center gap-2 text-slate-400 text-xs mb-4 italic">
                <MdMailOutline className="text-primary" /> 
                <span className="truncate">{email}</span>
              </div>

              <Link 
                to={`/Service-Details/${_id}`} 
                className="btn btn-primary w-full rounded-xl normal-case text-white font-semibold"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
  max-width: 380px;
  margin: 0 auto;

  .card_outer {
    padding: 2px; /* বর্ডারের জন্য স্পেস */
    background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
    border-radius: 22px;
    transition: all 0.3s ease-in-out;
  }

  .card_inner {
    background-color: #ffffff;
    border-radius: 20px;
    height: 100%;
    transition: all 0.3s ease;
  }

  /* Dark mode support */
  @media (prefers-color-scheme: dark) {
    .card_inner {
      background-color: #1a1a1a;
    }
  }

  /* Hover Effects - এখন আর Messy হবে না */
  .card_outer:hover {
    transform: translateY(-8px); /* কার্ডটি উপরে উঠবে */
    box-shadow: 0px 10px 30px rgba(0, 255, 117, 0.3); /* গ্লোয়িং শ্যাডো */
  }

  /* হোভারে টেক্সট যাতে গুবলেট না হয়ে যায় তাই ব্যাকগ্রাউন্ড ফিক্সড রাখা হয়েছে */
  .card_outer:hover .card_inner {
    background-color: #ffffff; 
  }

  @media (prefers-color-scheme: dark) {
    .card_outer:hover .card_inner {
      background-color: #1a1a1a;
    }
  }
`;

export default Card;