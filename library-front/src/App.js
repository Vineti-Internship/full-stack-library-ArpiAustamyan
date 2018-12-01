import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Link } from 'react-router-dom';
import './App.css';

import Library from './components/library';
import BookList from './components/book/book_list';
import Book from './components/book/book';
import SignInForm from './components/sign_in';
import LogInForm from './components/log_in';

class App extends Component {
  async componentDidMount() {
    // const result = await fetch('http://localhost:3001');
    // console.log(result.json());
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className='sign'>
            <Link  to='/books' className="link">Books</Link>
            <Link  to='/signin'> SignIn</Link>
            <Link to='/login'>LogIn</Link>
          </div>

          <Route exact path='/books' render={() => <BookList />} />
          <Route exact path='/signin' render={() => <SignInForm />} />
          <Route exact path='/login' render={() => <LogInForm />} />
          <Route exact path='/books/:bookId' component={Book} />
          <Route exact path='/' render={() => <Redirect to='/' />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
