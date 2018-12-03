import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Link } from 'react-router-dom';
import './App.css';
import Auth from './helper/auth'

import BookList from './components/book/book_list';
import AuthorList from './components/author/author_list'
import Book from './components/book/book';
import SignInForm from './components/sign_in';
import LogInForm from './components/log_in';

import Helper from './helper/author_helper'

class App extends Component {
  constructor() {
    super();
  }

  render() {
    const { isAuth, logOut } = this.props;

    return (
      <BrowserRouter>
        <div className="App">
          <div className='header'>
            <Link to='/books' className="link">Books</Link>
            <Link to='/authors' className="link">Authors</Link>
            <div className="nav">
              {!isAuth && <Link to='/signin'>Sign In</Link>}
              {!isAuth && <Link to='/login'>Log In</Link>}
              {isAuth && <button onClick={() => logOut}>Log Out</button>}
            </div>
          </div>

          <Route exact path='/books' render={() => <BookList />} />
          <Route exact path='/authors' render={() => <AuthorList />} />
          <Route exact path='/signin' render={() => isAuth ? <Redirect to='/books' /> : <SignInForm />} />
          <Route exact path='/login' render={() => isAuth ? <Redirect to='/books' /> : <LogInForm />} />
          <Route exact path='/book/:bookId' component={Book} />
          <Route exact path='/book' render={() => <Book />} />
          <Route exact path='/' render={() => <Redirect to='/books' />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
