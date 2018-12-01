import React from 'react'

import './book.css'
class Book extends React.Component{
render(){
  return(
    <div className="book">
      <div className="book-label">
        <div>
          <label> Name: </label><br/>
          <input type="text" name="name" />
        </div>
        <div>
          <label>Year:</label><br/>         
          <input  type ="text" name="year"/>
        </div>
        <div>
          <label>Genre:</label><br/>
          <input type ="text" name="genre"/><br/>
        </div>
    </div>
      <label>Description:</label><br/>
      <textarea className="desc" type ="text" name="description" /><br/>
      <button onClick="">Submit</button>
    </div>
      
  );
}}
export default Book