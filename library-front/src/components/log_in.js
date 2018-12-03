import React from 'react';
import './signin.css'
export default class LogIn extends React.Component{
  constructor(){
    super();
    
  this.state = {
    email: '',
    password: ''
  };
}

changeState = e => {
  const {value ,name } = e.target;
  this.setState({
    [name]: value
  });
}

render(){
  const {logInAuthor} = this.props;
  const {email , password } = this.state;

  return(
    <form onSubmit={(e) => {return logInAuthor(e, this.state)}}>
      <div className="log-in">
        <div className="log-in-label">
          <div>
            <label>Email</label><br/>
            <input type ="text" name="email" value={email} onChange={this.changeState}/>
          </div>
          <div>
            <label>Password</label><br/>
            <input type ="password" name="password" value={password} onChange={this.changeState}/>
          </div>
        </div>
        <input type="submit" value="Log In" className="subbut"/>
      </div>
    </form>
  );
}}
  
  