import React, { useState } from "react";
import "./login.css";
import Axios from "axios";
import baseUrl from "../components/baseUrl";
import { InfinitySpin } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { db, auth, storage } from "../Firebase";

const Signin = () => {
  // const [username, setUsername] = useState("")
  // const [password, setPassword] = useState("")
  const [errorMsg, setErrorMsg] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signup = (e) => {
    e.preventDefault();
    auth
      .fetchSignInMethodsForEmail(email)
      .then((result) => {
        if (result.length > 0) {
          alert("User already registered!");
        } else {
          auth
            .createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
              // send verification mail.
              console.log("Happening");
              userCredential.user.sendEmailVerification();
              // auth.signOut();
              alert("Verifiction email sent. Check your mail");
            });
        }
      })

      .catch(alert);
  };

  return (
    <div className="loginPage">
      {submitting === false ? (
        <div className="h-screen flex ">
          <div className="w-full max-w-md m-auto  py-10 px-16 login">
            <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
              REGISTER
            </h1>

            <form onSubmit={(e) => signup(e)} id="signupForm">
              <div>
                <input
                  type="text"
                  className={`w-full p-2 text-primary rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                  id="email"
                  placeholder="Your Email"
                  required="true"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="password"
                  className={`w-full p-2 text-primary rounded-md outline-none text-sm mt-7 mb-5 transition duration-150 ease-in-out`}
                  id="password"
                  placeholder="Your Password"
                  required="true"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="errorMsg text-red small">{errorMsg}</div>

              <div className="text-white">
                Already have an account yet? <Link to="/">Login</Link>
              </div>
              <div className="flex justify-center items-center mt-6">
                <button
                  type="submit"
                  className="py-2 px-4 text-sm text-white rounded border border-green  focus:border-red"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <InfinitySpin width="200" color="#212121" />
      )}
      {/* <p className="mt-9 text-white">{login}</p> */}
    </div>
  );
};

export default Signin;
