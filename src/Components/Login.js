import React, { useState } from "react";
import "../CSS/design.css";
import logo from "../Images/logo.jpg";
import facebook from "../Images/facebook.png";
import google from "../Images/gmail.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [userId, setUserId] = useState("");
  const [errMsg, setErrMsg] = useState(false);
  const navigate = useNavigate();
  const handleContinue = (e) => {
    if (!userId) {
      console.log("djjdsjdj");
      setErrMsg(true);
      setTimeout(() => {
        setErrMsg(false);
      }, 5000);
    } else {
      navigate("/home");
    }
  };
  return (
    <>
      <div className="">
        <div className="header-logo">
          <img src={logo} alt="" srcset="" />
        </div>
        <section className="sec-login login-signup-comm-wrap R13_42">
          <p className="M18_42 txt-heading">Login / Register</p>

          {errMsg ? <> <p className="" style={{color:'red'}}>Please enter userId</p> </> : ""}

          <div className="form-input">
            <label htmlFor="" className="M14_42">
              Email ID/Mobile No.
            </label>
            <input
              type="text"
              value={userId}
              onChange={(e) => {
                setUserId(e.target.value);
              }}
              className="input-box R14_42"
              placeholder="Enter your Email ID or Mobile No."
              name="email"
              id="email"
            />
          </div>
          <div
            className="B14_white comm-btn btn-login-continue btn-login-cont-otp"
            role="button"
            onClick={(e) => {
              handleContinue(e);
            }}
          >
            Continue
          </div>
          <div className="div-or-text">
            <div className="div-or-text-divider">
              <p className="divider-text M15_42">OR</p>
            </div>

            <div className="socialicons-login">
              <div className="social-login fb-login">
                <span className="imgspan">
                  <img src={facebook} alt="" srcset="" />
                </span>
                <span className="R13_42 fbText ms-2">FACEBOOK</span>
              </div>
              <div className="social-login g-login flt_left-resend">
                <span className="imgspan">
                  <img src={google} alt="" srcset="" />
                </span>
                <span className="R13_42 fbText ms-2">GOOGLE</span>
              </div>
            </div>

            <p className="divider-text M13_link reghere">
              New to FirstCry?
              <Link to="/signup">Register Here</Link>
            </p>
          </div>
          <p className="agree-text R12_42">
            By continuing, you agree to Firstcry's
            <a href="" className="ms-1">
              Conditions of Use
            </a>
            and
            <a href="" className="ms-1">
              Privacy Notice.
            </a>
          </p>
        </section>
      </div>
    </>
  );
};

export default Login;
