import React from 'react'

import './library.css'

export default class Library extends React.Component{
render(){
  return(
    <div className="library">
      <span>Welcome to library</span>
      <button onClick="" className="sign_in">Sign In</button>
      <button onClick="" className="log_in">Log In</button>
      <div>
        <button onClick="" className="show_books">Show Books</button>
      </div>
    </div>
  );
}}
