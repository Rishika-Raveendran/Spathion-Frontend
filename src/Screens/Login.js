import React, { useState } from "react"
import "./login.css"
import Axios from "axios"
import baseUrl from "../components/baseUrl"
import { InfinitySpin } from "react-loader-spinner"

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errorMsg, setErrorMsg] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [login, setLogin] = useState("")

  const handleFormSubmit = async e => {
    setSubmitting(true)
    setLogin("Logging in....")
    e.preventDefault()
    var user = await Axios.post(`${baseUrl}/login`, {
      username: username,
      password: password,
    }).catch(err =>
      alert("Error logging in. Retry entering correct credentials")
    )

    if (user.status === 200) {
      if (typeof window !== "undefined") {
        window.localStorage.setItem("username", user.data.username)
        window.sessionStorage.setItem("username", user.data.username)

        setIsLoggedIn(true)
        setSubmitting(false)
      }
    } else {
      user.msg ? setErrorMsg(user.msg) : setErrorMsg("Try again later")
      setLogin("Error logging in. Retry entering correct credentials")
      alert("Error logging in. Retry entering correct credentials")
    }
  }

  return (
    <div className="loginPage">
      {submitting === false ? (
        <div className="h-screen flex ">
          <div className="w-full max-w-md m-auto  py-10 px-16 login">
            <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
              LOG IN
            </h1>

            <form onSubmit={e => handleFormSubmit(e)}>
              <div>
                <input
                  type="text"
                  className={`w-full p-2 text-primary rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                  id="username"
                  placeholder="Your Username"
                  required="true"
                  onChange={e => setUsername(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="password"
                  className={`w-full p-2 text-primary rounded-md outline-none text-sm mt-7 mb-5 transition duration-150 ease-in-out`}
                  id="password"
                  placeholder="Your Password"
                  required="true"
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              <div className="errorMsg text-red small">{errorMsg}</div>

              <div className="flex justify-center items-center mt-6">
                <button
                  type="submit"
                  className="py-2 px-4 text-sm text-white rounded border border-green  focus:border-red"
                >
                  Login
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
  )
}

export default Login