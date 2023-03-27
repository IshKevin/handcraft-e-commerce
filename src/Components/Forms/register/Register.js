import "./register.css"
import { Link } from "react-router-dom"
import { useRef,useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";


const USER_REGEX = /^[A-Za-z][A-Za-z0-9_]{7,29}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
const EMAIL_REGEX = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;

// const REGISTER_URL = "https://blogzilha-piyj.onrender.com/auth/register";


export default function Register() {
  const [modal, setModal] = useState(false);
 const navigate = useNavigate();
  const userRef = useRef();
  const errRef = useRef();

  const [name, setName] = useState('');
  const [validName, setValidName] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [PasswordFocus, setPasswordFocus] = useState(false);

  const [matchpwd, setMatchPwd] = useState("");
  const [validMatchPwd, setValidMatchPwd] = useState(false);
  const [matchPwdFocus, setMatchPwdFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() =>{
    userRef.current.focus();
  }, [])
  useEffect(() =>{
    const result = USER_REGEX.test(name);
    console.log(result);
    console.log(name);
    setValidName(result);
  }, [name])

  useEffect(() => {
    const result = PWD_REGEX.test(password);
    console.log(result);
    console.log(password);
    setValidPassword(result);
    const match = password === matchpwd;
    setValidMatchPwd(match);
  }, [password, matchpwd])

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    console.log(result);
    console.log(email);
    setValidEmail(result);
  }, [email])

  useEffect(() =>{
    setErrMsg('');
  }, [name, password])

  // const handleSubmit = async (e) =>{
  //   e.preventDefault();
  //   const v1 = USER_REGEX.test(name);
  //   const v2 = PWD_REGEX.test(password);
  //   const v3 = EMAIL_REGEX.test(email);
  //   if(!v1 || !v2 || !v3){
  //     setErrMsg("Invalid Entry");
  //     return;
  //   }
    
  //   try{
  //     const response = await axios.post(REGISTER_URL,
  //       JSON.stringify({name,password,email}),
  //       {
  //         headers:{"Content-Type": "application/json"},
  //       }
  //       );
  //       console.log(response.data);
  //       console.log(response.accessToken);
  //       console.log(JSON.stringify(response));
  //       setSuccess(true);
  //       navigate (
  //         "/login"
  //       )
        
  //   } catch(err){
  //     if(!err?.response){
  //       setErrMsg('No Server Response');
  //     } else if(err.response?.status === 409){
  //       setErrMsg('Username Taken');
  //     } else {
  //       setErrMsg('Registration Failed');
  //     }
  //    errRef.current.focus();
  //   }

  // }


    return (
      <>
    {/* <form>
    <input type='radio' >REGISTER AS CUSTOMER </input>
    </form> */}



      <div className="customer-register" >
      {/* {success ? (
        <div className="success-msg">
          <h1>success!</h1>
        </div>
      ) :( */}

        <div className="register">


          
  <div className="choose">
    <p onClick={() =>{
                    setModal(true);}} className="as-customer">register as customer</p>
    <p className="as-vendor">register as vendor</p>

  </div>


          <div className="red" style={{display: !modal? "none": "flex" }}>
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
        //  onChange={(e) => setName(e.target.value)}
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
        //  onChange={(e) => setName(e.target.value)}
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
        // onChange={(e) => setEmail(e.target.value)}
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


      
        <label>Password</label>
        <input className="registerInput"
         type="password" 
         name="password"
         id="password"
        // onChange={(e) => setPassword(e.target.value)}
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
        // onChange={(e) => setMatchPwd(e.target.value)}
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
      </div>
       </div>
      {/* )} */}
      </div>
    </>
    )
}
