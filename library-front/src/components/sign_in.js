import React from 'react';
import './signin.css';
export default class SingIn extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      surname: '',
      birthyear: '',
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
    const {signInAuthor} = this.props;
    const {name , surname , birthyear , email , password, password_confirmation} = this.state;

    return(
      <form onSubmit={(e) => signInAuthor(e, this.state)} className="signform">
      <div className="sing-in">
        <div className="sing-in-label">
          <div>
            <label>Name</label><br/>
            <input type="text" name="name" value={name} onChange={this.changeState}/>
          </div>
        <div>
          <label>Surname</label><br/>
          <input type ="text" name="surname" value={surname} onChange={this.changeState}/>
        </div>
        <div>
          <label>Born</label><br/>
          <input type ="text" name="birthyear" value={birthyear} onChange={this.changeState} /><br/>
        </div>
        <div>
          <label>Email</label><br/>
          <input type ="text" name="email" value={email} onChange={this.changeState}/>
        </div>
        <div>
          <label>Password</label><br/>
          <input type ="password" name="password" value={password} onChange={this.changeState}/>
        </div>
        <div>
          <label>Password Confirmation</label><br/>
          <input type ="password" name="password_confirmation" value={password_confirmation} onChange={this.changeState}/>
        </div>
        </div>
        <input type="submit" value="Sign In"  className="subbut"/>
      </div>
    </form>
    );
}}
  