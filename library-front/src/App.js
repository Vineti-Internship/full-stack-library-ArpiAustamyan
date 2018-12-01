import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Link } from 'react-router-dom';
import './App.css';

import BookList from './components/book/book_list';
import Book from './components/book/book';
import SignInForm from './components/sign_in';
import LogInForm from './components/log_in';

class App extends Component {
  async addEditBook(data) {
    const rawResponse = await fetch('https://localhost:3000', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({data})
    });

    const content = await rawResponse.json();
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className='header'>
            <Link  to='/books' className="link">Books</Link>
            <Link  to='/signin'> SignIn</Link>
            <Link to='/login'>LogIn</Link>
          </div>

          <Route exact path='/books' render={() => <BookList />} />
          <Route exact path='/signin' render={() => <SignInForm />} />
          <Route exact path='/login' render={() => <LogInForm />} />
          <Route exact path='/book/:bookId' component={Book} />
          <Route exact path='/book' render={() => <Book />}/>
          <Route exact path='/' render={() => <Redirect to='/book' />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
