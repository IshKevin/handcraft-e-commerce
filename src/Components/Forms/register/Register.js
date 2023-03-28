import "./register.css";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const REGISTER_URL = "https://madeinapi.onrender.com/api/zeus/users/signUp";

const schema = yup.object().shape({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).max(12).required(),
});

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [modal, setModal] = useState(false);
  const [mymodal, setmyModal] = useState(false);
   const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    console.log(data);
  const userData= new FormData();
  userData.append('firstname',data.firstname);
  userData.append("lastname", data .lastname);
  userData.append("email", data.email);
  userData.append("profile", data.profile[0]);
  userData.append("password", data.password);

  console.log(userData.get("password"));
    try {
      const response = await axios.post(REGISTER_URL, userData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
       console.log(response);
        console.log(response.accessToken);
        console.log(JSON.stringify(response));
        setSuccess(true);
        navigate("/login");
    } catch (err) {
      console.log(err.response)
    }
  };

  return (
    <>
      <div className="customer-register">
        <div className="register">
          <div className="choose">
            <p
              onClick={() => {
                setModal(true);
              }}
              className="as-customer"
            >
              register as customer
            </p>

            <p
              className="as-vendor"
              onClick={() => {
                setmyModal(true);
              }}
            >
              register as vendor
            </p>
          </div>
          {/* ...........................modal ............................................ */}

          <div className="red" style={{ display: !modal ? "none" : "flex" }}>
            <div className="registerr">
              <span className="registerTitle">Register</span>
              <form className="registerForm" onSubmit={handleSubmit(onSubmit)}>
                <label>First Name</label>
                <input
                  className="registerInput"
                  type="text"
                  {...register("firstname")}
                  autoComplete="off"
                  placeholder="Enter your username..."
                />
                <span>{errors?.firstname?.message}</span>

                <label>Last Name</label>
                <input
                  className="registerInput"
                  type="text"
                  {...register("lastname")}
                  placeholder="Enter your username..."
                />
                <span>{errors?.lastname?.message}</span>
                <label>Email</label>
                <input
                  className="registerInput"
                  type="text"
                  id="email"
                  {...register("email")}
                  placeholder="Enter your email..."
                />
                <span>{errors?.email?.message}</span>

                <label>Add Profile </label>
                <input
                  className="registerInput"
                  type="file"
                  {...register("profile")}
                />

                <label>Password</label>
                <input
                  className="registerInput"
                  type="password"
                  {...register("password")}
                  id="password"
                  placeholder="Enter your password..."
                />
                <span>{errors?.password?.message}</span>

                {/* <label>confirm password</label>
         <input className="registerInput"
         type="password"
         {...register('password')}
         id="confirm_pwd"
       
       
        placeholder="confirm password.."
        /> */}

                <button className="registerButton">Register </button>

                <p>
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    style={{ color: "inherit", textDecoration: "inherit" }}
                  >
                    <span>Login</span>
                  </Link>
                </p>
              </form>
            </div>
          </div>
          {/* <---------------------- MODAL FOR  REGISTER AS VENDOR ---------------------------------------------------------------------------> */}

          {/*    
      <div className="red-vendor" style={{display: !mymodal? "none": "flex" }}>
            <div className="registerr">
      <span className="registerTitle">Register</span>
      <form className="registerForm" >

      <p ref={errRef} className={errMsg ? "errmsg" :
      "offscreen"} aria-live="assertive">{errMsg}</p>

<label>First Name</label>
        <input className="registerInput"
         type="text" 
         name="name"
         id="username"
         ref={userRef}
         autoComplete="off"
         onChange={(e) => setName(e.target.value)}
         aria-invalid={validName? "false": "true"}
         ria-describedby="uidnote"
         onFocus={ () => setNameFocus(true)}
         onBlur={() => setNameFocus(false)}
         placeholder="Enter your username..." 
      
          />
              <p id="uidnote" className={nameFocus && name &&
               !validName ? "instructions" : "offscreen"}>
                 username not valid
                </p>

                <label>Last Name</label>
        <input className="registerInput"
         type="text" 
         name="name"
         id="username"
         ref={userRef}
         autoComplete="off"
         onChange={(e) => setName(e.target.value)}
         aria-invalid={validName? "false": "true"}
         ria-describedby="uidnote"
         onFocus={ () => setNameFocus(true)}
         onBlur={() => setNameFocus(false)}
         placeholder="Enter your username..." 
      
          />
              <p id="uidnote" className={nameFocus && name &&
               !validName ? "instructions" : "offscreen"}>
                 username not valid
                </p>

        

      
         <label>Email</label>
        <input className="registerInput" 
        type="text"
        id="email"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        aria-invalid={validEmail ? "false": "true"}
        aria-describedby="emailnote"
        onFocus={() => setEmailFocus(true)}
        onBlur={() => setEmailFocus(false)}
        placeholder="Enter your email..." 
        />
         <p id="emailnote" className={emailFocus && !validEmail ? "instructions": "offscreen"}>
          email not valid
        </p>

        
        <label>Add Profile </label>
        <input className="registerInput"
         type="file"
         name="image"
         />
         <label>Shop Name</label>
        <input className="registerInput"
         type="text"
         name="image"
         placeholder="Enter your Shop name"
         />



      
        <label>Password</label>
        <input className="registerInput"
         type="password" 
         name="password"
         id="password"
        onChange={(e) => setPassword(e.target.value)}
        aria-invalid={validPassword ? "false" : "true"}
        aria-describedby="pwdnote"
        onFocus={() => setPasswordFocus(true)}
        onBlur={() => setPasswordFocus(false)}
        placeholder="Enter your password..." 
         />
          <p id="pwdnote" className={PasswordFocus && !validPassword? "instructions":
      "offscreen"}>Must include uppercase and lowecase letters</p>
         
         <label>confirm password</label>
         <input className="registerInput"
         type="password"
         name="password"
         id="confirm_pwd"
        onChange={(e) => setMatchPwd(e.target.value)}
        aria-invalid={validMatchPwd ? "false" : "true"}
        aria-describedby="Matchpwdnote"
        onFocus={() => setMatchPwdFocus(true)}
        onBlur={() => setMatchPwdFocus(false)}
        placeholder="confirm password.."
        />
         <p id="Matchpwdnote" className={matchPwdFocus && !validMatchPwd? "instructions":
      "offscreen"}>Password does not match</p>

       <button className="registerButton" 
       type="submit"
       disabled={!validName || !validPassword || !validMatchPwd? true: false}
       >Register </button>

<p>Already have an account? <Link to='/login' style={{color: 'inherit', textDecoration: 'inherit'}}><span>Login</span></Link></p>

      </form>
      </div>
      </div> */}
        </div>
      </div>
    </>
  );
}
