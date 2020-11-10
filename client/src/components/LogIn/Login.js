
import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation, Redirect, Link } from 'react-router-dom';
import { handleGoogleSignIn, initializeFireBaseApp } from './LogInManager.js';
import logo from '../../images/logo/googoleLogo.svg';
import LoginBg from '../../images/LoginBG.png';
const LogIn = () => {

  
initializeFireBaseApp();

const { signedInUser, setSignedInUser } = useContext(UserContext);
const history = useHistory();
const location = useLocation(); 
const { from } = location.state || { from: { pathname: "/" } };
  

const googleSignIn = () => {
  handleGoogleSignIn()
    .then(res => {
        setSignedInUser({ ...res })
        history.replace(from)
    })
}

if(signedInUser){
    return <Redirect to ={from.pathname}></Redirect>
  }
    return (
      <div className='container mt-5' >
        <div className="row align-items-center" style={{ height: "100vh" }}>
        <div className="col-md-6 shadow p-5">
          <div className="form-group">
            <label htmlFor="">User Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input type="password" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="" className="text-danger">Forgot your password?</label>
          </div>
          <div className="from-group mt-5">
          <button className='p-2' style={{border: '1px solid grey',borderRadius:'30px',backgroundColor:'white'}} onClick={googleSignIn}>
             <span><img className="pr-5" src={logo} alt="logo"/>Continue with Google </span> </button>
           </div>
        </div>
        <div className="col-md-6 d-none d-md-block align-self-end">
          <img className="img-fluid" src={LoginBg} alt="" />
        </div>
      </div>
      </div>
    );
};

export default LogIn;