import React, { Component } from 'react';

export default class SingIn extends React.Component{
  constructor() {
    super();

    this.state = {
      name: '',
      surname: '',
      birthyear: '',
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
    const {name , surname , birthyear } = this.state;

    return(
      <form onSubmit={() => signInAuthor(this.state)}>
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
        </div>
        <input type="submit" value="Create" />
      </div>
    </form>
    );
}}
  