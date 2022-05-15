import { auth } from "../firebase";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../redux/action";
import { useNavigate } from "react-router-dom";
import { XIcon } from '@heroicons/react/outline'
import {BsGoogle} from 'react-icons/bs'

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modal, setModal] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully created a new user with email and password
        setModal(false);
        if (auth) {
          navigate("/");
        }
        setUser(auth.user);
      })
      .catch((error) => alert(error.message));
  };

  const setUser = (user) => {
    dispatch(signIn(user));
  };

  return (
    <div className=" flex  justify-center items-center content-center">
      <div className="bg-white shadow-md rounded-xl px-8 pt-6 my-4 mb-4">
      {/* <!-- Modal --> */}
      {modal === true && (
        <>
          <div className=" justify-center items-center content-center" onClick={() => setModal(false)} />
          <div className="modal-content  position-absolute  ">
            <div className="flex justify-end m-1">
              <button
                type="button"
                className="btn-close"
                onClick={(e) => setModal(false)}
              >
              <XIcon className="block h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="modal-body ps-5 pe-5 pt-0 pb-3">
              <h5
                className=" leading-normal text-4xl text-sblue font-mono mb-5"
                id="exampleModalLabel"
              >
                Register
              </h5>
              <button className="btn bg-sblue text-lg  flex justify-center items-center  text-white w-full mb-4">
                    <BsGoogle className="block m-1 h-5 w-5" aria-hidden="true" />
                 <span className="ml-2">
                    Sign up with Google
                 </span> 
              </button>
              <form className="flex flex-col"
              onSubmit={register}>
                <div className="mb-2 ml-1 flex flex-col">
                  <label htmlFor="exampleInputEmail1"
                   className=" text-lg font-normal leading-relaxed mb-2">
                    Username
                  </label>
                  <input
                    type="text"
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leasding-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3 flex flex-col">
                  <label htmlFor="exampleInputEmail1" 
                  
                  className="text-lg font-normal leading-relaxed mb-2"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="formstyle mb-2"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3 flex flex-col text-start">
                  <label htmlFor="exampleInputPassword1" 
                  className="text-lg font-normal leading-relaxed mb-2"
                  >
                    Password
                  </label>
                  <input
                    required
                    type="password"
                    className="formstyle"
                    id="exampleInputPassword1"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-3 flex justify-around items-center">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                    required
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    I agree the terms and conditions
                  </label>
                </div>
                <button type="submit" className="btn transbtn w-100 mt-5 mb-3">
                  Register
                </button>
              </form>
            </div>
          </div>
        </>
      )}
      </div>
    </div>
  );
}

export default Register;
