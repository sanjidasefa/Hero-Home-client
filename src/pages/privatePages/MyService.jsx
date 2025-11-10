// import React, { useEffect, useState, use } from 'react';

// const MyService = () => {
  // const {user} = use{AuthContext}
//   const [loader , setLoader] = useState(true)
//   const [service,setService]= useState([])
//   useEffect(()=>{
//     fetch(`http://localhost:3000/my-Services?email=${}`,{
//       headers:{
//         autorization : `bearar ${user.accessToken}`
//       }
//     })
//     .then(res=> res.json())
//     .then(data=> {
//       setService(data)
//       setLoader(false)
//     })
//   },[user])
//   if(loader){
//     return <div><span className="loading loading-bars loading-xl"></span></div>
//   }
//   return (
//     <>
//       <div className='grid grid-cols-3  gap-20 my-20 '>
//       {
//         service.map(service=> <Card service={service}></Card>)
//       }
//     </div>
      
//     </>
//   );
// };

// export default MyService;