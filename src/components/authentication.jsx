import React from 'react';

export default class Authentication extends React.Component {
  render () {
    const loginInputValueAuthentication = this.props.loginInputValueAuthentication;
    const onChangeLoginAuthentication = this.props.onChangeLoginAuthentication;
    const passwordInputValueAuthentication = this.props.passwordInputValueAuthentication;
    const onChangePasswordAuthentication = this.props.onChangePasswordAuthentication;
    const onClickLogIn = this.props.onClickLogIn;
    const onClickOpenRegistration = this.props.onClickOpenRegistration;

    return (
      <div className="content authentication">
        <div className="authentication-headline">Sign in</div>
        <form>
          <p><input type="text" placeholder="Login"  value={loginInputValueAuthentication} onChange={onChangeLoginAuthentication} /></p>
          <p><input type="password" placeholder="Password" value={passwordInputValueAuthentication} onChange={onChangePasswordAuthentication} /></p>
          <button type="submit" onClick={onClickLogIn}>Log in</button>
          <div>Don't have an account? Sign up!</div>
          <button onClick={onClickOpenRegistration}>Sign up</button>
        </form>
      </div>
    )
  }
}
