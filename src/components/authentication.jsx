import React from 'react';

export default class Authentication extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: '',
      password: '',
    }
  }

  handleChangeLogin = (e) => {
    this.setState({ login: e.target.value })
  }

  handleChangePassword = (e) => {
    this.setState({ password: e.target.value })
  }

  handleClickLogIn = (e) => {
    this.setState({ login: '', password: '' });
    this.props.onClickLogIn(this.state);
  }

  render () {
    return (
      <div className="content authentication">
        <div className="authentication-headline">Sign in</div>
        <form>
          <p>
            <input
              type="text"
              placeholder="Login"
              value={this.state.login}
              onChange={this.handleChangeLogin}
            />
          </p>
          <p>
            <input
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChangePassword}
            />
          </p>
          <button type="submit" onClick={this.handleClickLogIn}>Log in</button>
          <div>Don't have an account? Sign up!</div>
          <button onClick={this.props.onClickOpenRegistration}>Sign up</button>
        </form>
      </div>
    )
  }
}
