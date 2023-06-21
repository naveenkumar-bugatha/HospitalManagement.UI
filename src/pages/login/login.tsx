import "./login.scss";
import { useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch } from "../../store/store";
import { addLoginUser } from "../../store/features/loginSlice";

type LoginProps = {
    navigate: any;
}


export function Login(props: LoginProps)
{ 
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isLogin, setIsLogin] = useState<boolean>(true);
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const regExpEmail = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    const regPassword = new RegExp(/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%@&? "]).*$/);
    const dispatch = useAppDispatch();

    const onLogin = () =>{
          if(regExpEmail.test(email) && regPassword.test(password)){
              toast.success("Login Successful !", {
                position: toast.POSITION.TOP_RIGHT
              });
              dispatch(addLoginUser({name: "Naveen Kumar", isLoggedIn: true, email: email, id:1}))
              props.navigate("/dashboard");
          }
          else if(!regExpEmail.test(email)){
            toast.error("Please enter valid email !", {
              position: toast.POSITION.TOP_RIGHT
            });
            return;
          }
          else if(!regPassword.test(password)){
            toast.error("Please enter valid password !", {
              position: toast.POSITION.TOP_RIGHT
            });
            return;
          }
    };
    const onRegister = () =>{
          if(regExpEmail.test(email) && regPassword.test(password) && password === confirmPassword){
            toast.success("Registered Successful !", {
              position: toast.POSITION.TOP_RIGHT
            });
            setIsLogin(true);
          }
          else if(!regExpEmail.test(email)){
            toast.error("Please enter valid email !", {
              position: toast.POSITION.TOP_RIGHT
            });
            return;
          }
          else if(!regPassword.test(password)){
            toast.error("Please enter valid password !", {
              position: toast.POSITION.TOP_RIGHT
            });
            return;
          }
          else if(password !== confirmPassword){
            toast.error("Please re enter same password !", {
              position: toast.POSITION.TOP_RIGHT
            });
            return;
          }
    };

    return (
      <>
      {
        isLogin ? 
        <div className="container login">
                <div className="container-header">Login</div>
                <table style={{margin: "0 auto"}}>
                    <th></th>
                    <tr className="form-row">
                        <td className="form-label">
                            <label> Email:</label>    
                        </td>
                        <td>
                            <input type="text" name="email" className="form-input"
                            value={email} onChange={(e)=> setEmail(e.target.value)} />
                        </td>
                    </tr>
                    <tr className="form-row">
                        <td className="form-label">
                            <label> Password:</label>    
                        </td>
                        <td>
                            <input type="password" name="password" className="form-input"
                            value={password} onChange={(e)=> setPassword(e.target.value)} />
                        </td>
                    </tr>
                </table>
                <button name="login" onClick={onLogin} className="login-Register">Login</button>
                <div className="form-register" onClick={()=>{setIsLogin(false)}}>Register User</div>
        </div> :
        <div className="container Register">
                <div className="container-header">Register</div>
                <table style={{margin: "0 auto"}}>
                    <th></th>
                    <tr className="form-row">
                        <td className="form-label">
                            <label> Email:</label>    
                        </td>
                        <td>
                            <input type="text" name="email" className="form-input"
                            value={email} onChange={(e)=> setEmail(e.target.value)} />
                        </td>
                    </tr>
                    <tr className="form-row">
                        <td className="form-label">
                            <label> Password:</label>    
                        </td>
                        <td>
                            <input type="password" name="password" className="form-input"
                            value={password} onChange={(e)=> setPassword(e.target.value)} />
                        </td>
                    </tr>
                    <tr className="form-row">
                        <td className="form-label">
                            <label>Confirm Password:</label>    
                        </td>
                        <td>
                            <input type="password" name="confirmPassword" className="form-input"
                            value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)} />
                        </td>
                    </tr>
                </table>
                <button name="Register" onClick={onRegister} className="login-Register">Register</button>
                <div className="form-register" onClick={()=>{setIsLogin(true)}}>Back to login</div>
        </div>
      }
      <ToastContainer />
      </>
    );
}