import React from 'react';
import Chart from '../component/childComponent/Chart';
const Customer = () => {
  return (
    <div>
              <div className=' flex gap-5 flex-col lg:flex-row mb-10'>
            <div>
               <h1 className='text-green-400 text-xl font-semibold my-5'>Service Performace Overview :</h1>
      <div className='flex justify-center items-center'>
        
      <Chart/>
      </div>
            </div>
      
      <div>
           <h1 className='text-green-400  text-xl font-semibold my-5'>What Our Client Say :</h1>
            <div>
        <div className="avatar-group -space-x-6">
  <div className="avatar">
    <div className="w-12">
      <img src="https://img.daisyui.com/images/profile/demo/1@94.webp" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="https://img.daisyui.com/images/profile/demo/4@94.webp" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="https://img.daisyui.com/images/profile/demo/3@94.webp"/>
    </div>
  </div>
  <div className="avatar avatar-placeholder">
    <div className="bg-neutral text-neutral-content w-12">
      <span>+50</span>
    </div>
  </div>
</div>
<div>
  <ul className="list bg-green-100 rounded-box mt-5 p-2 shadow-xl">
  
  <h1 className='text-blue-900 text-sm font-semibold my-5'>Letest Customer's Feedback : </h1>
  
  <li className="list-row shadow-xl bg-green-50">
    <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp"/></div>
    <div>
      <div className='text-blue-900 font-bold'>Ms.Hena</div>
      <div className='text-blue-900 text-[12px] mb-1'>-StartupOwner</div>
      <div className="text-xs uppercase font-semibold text-green-400">Hena@gmail.com</div>
    </div>
    <p className="list-col-wrap text-blue-900 text-xs">
      “After using their service, my project launch time was cut in half. The team is incredibly professional and responsible.”
    </p>
    <button className="btn btn-square btn-ghost">
      <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
    </button>
  </li>
  
  <li className="list-row bg-green-50 shadow-xl my-2">
    <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/4@94.webp"/></div>
    <div>
      <div className='text-blue-900 font-bold'>Ellie Beilish</div>
       <div className='text-blue-900 text-[12px] mb-1'>-Digital Mereter</div>
      <div className="text-xs uppercase font-semibold text-green-400">ellie@gmail.com</div>
    </div>
    <p className="list-col-wrap text-blue-900 text-xs">
     “The reports, charts, and analytics were absolutely spot-on. My campaign ROI has doubled compared to before.”
    </p>
    <button className="btn btn-square btn-ghost">
      <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
    </button>
  </li>
  
  <li className="list-row bg-green-50 shadow-xl">
    <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/3@94.webp"/></div>
    <div>
      <div className='text-blue-900 font-bold'>Sabrino Gardener</div>
       <div className='text-blue-900 text-[12px] mb-1'>-E-commers Seller</div>
      <div className="text-xs uppercase font-semibold text-green-400">sabrino@gmail.com</div>
    </div>
    <p className="list-col-wrap text-blue-900 text-xs">
     “The support team is amazing! They responded instantly to every question and solved my issues right away. Highly recommended!”
    </p>
    <button className="btn btn-square btn-ghost">
      <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
    </button>
  </li>
  
</ul>
</div>
      </div>
      </div>
     </div>
    </div>
  );
};

export default Customer;