import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { forgotPassword } from '../../Store/User/user-action';

const ForgotPassword = () => {

  const dispatch = useDispatch();
  const [email,setEmail]=useState("");
  const [emailSent,setEmailSent]=useState(false);
  //const {error,success}=useSelector((state)=>state.user);

  const submitHandler=(e)=>{
  e.preventDefault();
  dispatch(forgotPassword(email));
  setEmailSent(true);
  }
  return <>
  {!emailSent ?(
      <div className='row wrapper'>
        <div className='col-10 col-lg-5 updateprofile'>
          <form onSubmit={submitHandler}>
            <h1 className='password_title'>Forgot Password</h1>
            <div className='form-group'>
              <label htmlFor='email_field'>Email</label>
              <input type='email'
                id='email_field'
                className='form-control'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <button type='submit' className='btn btn-primary'>Send Email</button>
          </form>
        </div>
      </div>
  ):(
    <div className='text-center '>Email Sent. Please check your inbox</div>
  )
  }
  </>
}

export default ForgotPassword;