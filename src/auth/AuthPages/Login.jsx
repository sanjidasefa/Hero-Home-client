import React, { use } from "react";
import AuthContext from "../context/AuthContext";
import { Link, useLocation, useNavigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const { login , google} = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e)=>{
    e.preventDefault()
    const pass = e.target.pass.value;
    const email = e.target.name.value;
    // console.log(name,pass)
    login(email,pass)
    .then((res)=>{
       toast.success('Loged-In Successfully ✅' , {
  style: {
    border: '1px solid #68d391',
    padding: '10px',
    color: '#ffffff',
  },
})
      navigate(location.state || '/home')
     console.log(res.user)
     e.target.reset()
    })
    .catch(err=>{
      console.log(err.message)
      toast.error("failed to logIn.")
    })
  }

  const handleGoogle = () => {
    google()
    .then(()=> navigate(location.state || '/home'))
    .catch(err=> console.log(err.massege))
  }

  return (
    <>
    <Toaster
  position="top-center"
  reverseOrder={true}
/>
      <div className="">
        <h1 className="text-center my-10 text-blue-900  font-bold text-3xl">
          Welcome Back! Please login to your account
        </h1>

        <form onSubmit={handleLogin} className="flex mb-20 justify-center items-center">
          <div className=" text-2xl border-base-300 rounded-box  w-[350px] border px-4">
                       <label className="label  text-blue-900 text-sm my-2">
              Provider E-mail :{" "}
            </label>
            <input
              type="text"
              className="input textarea-info bg-white text-blue-900"
              name="email"
              placeholder=" example@gmail.com"
            />
             <label className="label text-blue-900 text-sm my-2">
             Password :{" "}
            </label>
            <input
              type="password"
              name="pass"
              className="input bg-white textarea-info text-blue-900"
              placeholder="Enter at-least 6 digit password"
            />
            <p className="text-green-400 text-sm underline ">Forgot password</p>
            <div className="flex flex-col justify-center items-center">
              <button className="btn w-full text-xl bg-green-400 text-white font-medium rounded-2xl m-3">
                Log-In
              </button>
              <button onClick={handleGoogle} className="btn  w-full text-xl bg-green-400 text-white font-medium rounded-2xl m-3">
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>

            </div>
             <p className="text-blue-900 text-sm  mb-4">if you don't have account ..Click Here <Link to='/resister' className="text-green-400 text-sm underline ml-2">Register</Link></p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
