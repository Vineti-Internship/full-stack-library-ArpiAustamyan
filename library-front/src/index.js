import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BookProvider } from './contaxt/book_contaxt';
import { AuthorProvider, AuthorContext } from './contaxt/author_contaxt'

ReactDOM.render(
  <BookProvider>
    <AuthorProvider>
      <AuthorContext.Consumer>
        {
          ({ logout }) =>
            <App {... { logout }} />
        }
      </AuthorContext.Consumer>
    </AuthorProvider>
  </BookProvider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
