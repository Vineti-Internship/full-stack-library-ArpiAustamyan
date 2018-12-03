import React from 'react';
import Auth from '../Auth/Auth';
import Api from '../helpers/Api';

export const AuthorContext = React.createContext();

export class AuthorProvider extends React.Component {
  constructor() {
    super();
  }

  state = {
    isAuth: false,
    allAuthors: [],
    currentAuthor: null,
    author: null
  }

  isAuth() {
    this.setState({ isAuth: Auth.isAuthorAuthenticated() });
  }

  signIn = async (data) => {
    try {
      const res = await Api.post('/authors', data, 'author')
      const resJson = await res.json();
      if (res.ok) {
        Auth.authenticateToken(resJson.token);
        this.setState({ isAuth: Auth.isAuthenticated() });
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(`ERROR: ${error.message}`);
    }
  }

  logIn = async (data) => {
    try {
      const res = await Api.post('/login', data);
      const resJson = await res.json();
      if (res.ok) {
        Auth.authenticateToken(resJson.token);
        this.setState({ isAuth: Auth.isAuthenticated() });
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(`ERROR: ${error.message}`);
    }
  }

  logOut = async () => {
    try {
      await Api.delete('/logout');
      Auth.deauthenticateToken();
      this.setState({ isAuth: Auth.isAuthenticated() });
    } catch (error) {
      console.log(`ERROR: ${error.message}`);
    }
  }

  getAuthor = async (authorId) => {
    try {
      const res = await fetch(`/authors/${authorId}`);
      const author = await res.json();
      this.setState({ author });
    } catch (error) {
      console.log(`ERROR: ${error.message}`);
    }
  }

  getAllAuthors = async () => {
    try {
      const res = await Api.get('/authors');
      const authors = await res.json();
      this.setState({ allAuthors: authors });
    } catch (error) {
      console.log(`ERROR: ${error.message}`);
    }
  }

  checkPassword = (password, password_confirmation) => {
    if (password.length < 8) {
      return "Password need to have more than 7 characters"
    } else if (password != password_confirmation) {
      return "Password and password confirmation need to be the same"
    }

    return null;
  }

  render() {
    return (
      <AuthorContext.Provider value={
        {
          ...this.state,
          isAuth: this.isAuth,
          signIn: this.signIn,
          logIn: this.logIn,
          logOut: this.logOut,
          getAuthor: this.getAuthor,
          getAllAuthors: this.getAllAuthors,
          checkPassword: this.checkPassword
        }
      }>
        {this.props.children}
      </AuthorContext.Provider>
    )
  }
}