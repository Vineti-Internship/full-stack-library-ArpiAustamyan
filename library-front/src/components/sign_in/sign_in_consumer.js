import React from 'react';

import { AuthorContext } from '../../context/author_context';
import SignIn from './sign_in';

export default (props) => (
  <AuthorContext.Consumer>
    {
      ({ isAuth, signIn, checkPassword }) =>
        <SignIn
          {...props}
          isAuth={isAuth}
          signIn={signIn}
          checkPassword={checkPassword}
        />}
  </AuthorContext.Consumer>
);