import React from 'react';

import { AuthorContext } from '../../context/author_context';
import LogIn from './log_in';

export default (props) => (
  <AuthorContext.Consumer>
    {
      ({ isAuth, logIn }) =>
        <LogIn
          {...props}
          isAuth={isAuth}
          logIn={logIn}
        />}
  </AuthorContext.Consumer>
);