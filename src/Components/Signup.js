import React, { useState } from "react";
import "../CSS/design.css";
import logo from "../Images/logo.jpg";
import {useNavigate} from "react-router-dom"

const Signup = () => {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState("fa-solid fa-eye-slash");
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [mobile, setMobile] = useState("")
  const [password, setPassword] = useState("")
  const[errMsg, setErrMsg] = useState(false)
const navigate = useNavigate()
  const show = () => {
    type === "password" ? setType("text") : setType("password");
    icon === "fa-solid fa-eye"
      ? setIcon("fa-solid fa-eye-slash")
      : setIcon("fa-solid fa-eye");
  };

  const handleContinue = (e) => {
    if (!fullName || !email || !mobile || !password) {
      console.log("djjdsjdj")
      setErrMsg(true)
      setTimeout(() => {
        setErrMsg(false)
      }, 5000);
    } else {
     
      navigate("/home")
    }
  }

  return (
    <>
      <div className="header-logo">
        <img src={logo} alt="" srcset="" />
      </div>
      <div className="login-wrap login-signup-comm-wrap R13_42">
        <p className="M18_42 txt-heading login-heading">
          <span className="login-back-arrow">Register</span>
        </p>
 {errMsg ? <> <p className="" style={{color:'red'}}>Please enter all the field</p> </> : ""}



        <div className="div-wrap">
          <form action="" className="regi-pad">
            <div className="form-input">
              <label htmlFor="" className="M14_42">
                Full Name
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => {setFullName(e.target.value)}}
                className="input-box R14_42"
                placeholder="Enter your Full Name"
              />
            </div>
            <div className="form-input div-mobile-prefix">
              <div className="clearfix">
                <label htmlFor="" className="M14_42">
                  Mobile Number
                </label>
                <div className="d-flex">
                  <div className="mobile-prefix R14_42">+91</div>
                  <input
                    type="text"
                    value={mobile}
                    onChange={(e) => {setMobile(e.target.value)}}
                    className="input-box R14_42"
                    placeholder="Enter your Mobile Number"
                  />
                </div>
                <p className="R12_42">
                  OTP will be sent on this Mobile No. for verification.
                </p>
              </div>
            </div>
            <div className="form-input">
              <label htmlFor="" className="M14_42">
                Email ID
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => {setEmail(e.target.value)}}
                className="input-box R14_42"
                placeholder="Enter your Email ID"
              />
            </div>
            <div className="form-input">
              <label htmlFor="" className="M14_42">
                Password
              </label>
              <div className="d-flex align-items-center">
              <input
                type={type}
                value={password}
                onChange={(e) => {setPassword(e.target.value)}}
                className="input-box R14_42"
                placeholder="Enter your Password"
              />
              <span style={{cursor:'pointer'}} className="chk-box show-password input-password eye-icon show-password-active" onClick={show} class={icon}></span>
            </div>
            <p className="R12_42">Password must be at least 8 characters long with 1 Uppercase, 1 Lowercase & 1 Numeric character.</p>
            <div className="form-btn comm-btn form-btn-continue B14_white" onClick={(e) => {handleContinue(e)}} >Continue</div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
