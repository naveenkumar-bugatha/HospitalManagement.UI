import * as React from "react";
import "./login.scss";

export interface ILoginProps {
    navigate: any;
}
export interface ILoginState {
    userName: string;
    password: string;
    isRememberLogin: boolean;
}

export class Login extends React.Component<ILoginProps, ILoginState> {
  constructor(props: ILoginProps) {
    super(props);
    this.state = {
        userName : '',
        password : '',
        isRememberLogin : true
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleUserName = this.handleUserName.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  private handleLogin(){

  }

  private handleUserName(e: any){
    this.setState({
        userName : e.target.value
    });
  }

  private handlePassword(e: any){
    this.setState({
        password : e.target.value
    });
  }

  // render
  public render() {
    return (
      <>
        <div className="login-container">
            <div className="login-header">Login</div>
                <table style={{margin: "0 auto"}}>
                    <th></th>
                    <tr className="form-row">
                        <td className="form-label">
                            <label> User Name:</label>    
                        </td>
                        <td>
                            <input type="text" name="userName" className="form-input"
                            value={this.state.userName} onChange={(e)=>this.handleUserName(e)} />
                        </td>
                    </tr>
                    <tr className="form-row">
                        <td className="form-label">
                            <label> Password:</label>    
                        </td>
                        <td>
                            <input type="password" name="password" className="form-input"
                            value={this.state.password} onChange={(e)=>this.handlePassword(e)} />
                        </td>
                    </tr>
                </table>
                <button name="login" onClick={()=>this.handleLogin()} className="form-login">Login</button>
        </div>
      </>
    );
  }
}