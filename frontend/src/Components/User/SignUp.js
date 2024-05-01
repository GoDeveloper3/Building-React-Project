import React,{useEffect,useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import  {getSignUp} from '../../Store/User/user-action';
import {toast} from 'react-toastify';
import userActions  from '../../Store/User/user-slice';


const SignUp = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, errors} = useSelector((state)=>state.user);
  
  const [user,setUser] = useState({
    name:"",
    email:"",
    password:"",
    passwordConfirm:"",
    pnoneNumber:"",
  });
  const {password , passwordConfirm} = user;
  const onChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value});
  }

   const submitHandler = (e) => {
    e.preventDefault();
    if(password !== passwordConfirm){
      toast.error("Password does not match");
      return;
    }
    dispatch(getSignUp(user));
   };

  useEffect(()=>{
    if(errors && errors.length > 0){
      toast.error(errors);
      dispatch(userActions.clearError());
    }
    else if(isAuthenticated){
      navigate("/");
      toast.success("User Registered Successfully");
    }
  },[dispatch,isAuthenticated,errors,navigate]);



  return (
    <>
    <div className='row wrapper'>
     <form 
     onSubmit={submitHandler}
     encType='multipart/form-data'
     className='col-lg-5 col-10'
     >
     <h1 className='mb-3'>Register</h1>
      {["name","email","password","passwordConfirm","phoneNumber"].map(
        (field)=>(
          <div key={field} className='form-group'>
            <label htmlFor={`${field}_field`}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
            <input 
            type={field.includes("password") ? "password" : "text"}
            className='form-control'
            id={`${field}_field`}
            name={field}
            value={user[field]}
            onChange={onChange}
            />
          </div>
        )
      )}
      <button id="register_button"
      type="submit"
      className="loginbutton btn-block py-3">Register</button>
     </form>
    </div>
    </>
  )
}

export default SignUp;