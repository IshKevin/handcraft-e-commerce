import "./login.css";
import { useRef,useState,useEffect,useContext }  from "react";
import { useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";
// import AuthContext from "../../components/context/AuthProvider";
// import axios from "axios";
// const LOGIN_URL = "https://blogzilha-piyj.onrender.com/auth/login";




export default function Login() {
  const navigate = useNavigate()
  // const {setAuth} = useContext(AuthContext);
const userRef = useRef();
const errRef = useRef();
const [email,setEmail] = useState ('');
const [password,setPassword]= useState('');

const [errMsg,setErrMsg] = useState ('');
const [success,setSuccess] = useState(false);


//  const handleSubmit = async (e) =>{
//   e.preventDefault(); 
// try{
//   const response = await axios.post(LOGIN_URL,
//     JSON.stringify({email, password}),{
//     headers: {'content-Type' :'application/json'},
   
//     }
//   ); 
//   console.log(JSON.stringify(response?.data));
//   // console.log(JSON.stringify(response));
//   const accessToken = response?.data?.token;
//   localStorage.setItem('token',accessToken);
//   setAuth ({email,password,accessToken});
// setEmail ('');
//   setPassword('');
//   setSuccess(true);
//   navigate (
//     "/dashbord"
//   )






  
//     }
// catch (err){
// if(!err?.response){
//   setErrMsg('no server response');

// }
// else if(err.response?.status ===400){
//   setErrMsg('missing username or password');
//   console.log(email,password)
// }
// else if(err.response?.status === 401){
//   setErrMsg('unauthorized');
// } else{
//   setErrMsg ('Login Failed');
// }
// errRef.current.focus();
   

// }
  


//  }


  return (
    <>
   {/* {success?(
  <section>
    <p>
    <Link className="link" to="/Dashbord">
   you are logged in 
    go to dashbord
     
    </Link>
    </p>
  </section>
   ) : ( */}





    <div className="loginn">
    {/* <p ref={errRef} className={errMsg ? "errmsg":"offscreen"} aria-alive="assertive"> {errMsg}</p> */}
      <div className="bor">
        <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" >
        <label>Email</label>
        <input className="loginInput" 
        type="text" 
        id="password"
        ref={userRef}
        autoComplete="off"
        // onChange={(e)=> setEmail(e.target.value)}
        value={email}
        placeholder="Enter your email..."
        
        
        />
        <label>Password</label>
        <input className="loginInput" 
        type="password" 
        id="username"
        ref={userRef}
        autoComplete="off"
        // onChange={(e)=> setPassword(e.target.value)}
        value={password}
        placeholder="Enter your password..."
        
        
        />
        <button className="loginButton">
        <Link className="link" to="/vendorDashboard">
          Login
          </Link>
          </button>
       <p>
     <Link className="link" to="/AdminDashboard">
 Don't have Account Register Here !
          </Link>
          </p>
        
        
        </form>
        </div>
        </div>
    </div>
    {/* // )} */}
    </>
  );
}
