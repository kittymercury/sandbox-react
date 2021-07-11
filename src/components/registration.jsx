import React from 'react';

export default class Registration extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: '',
      password: '',
      name: '',
      avatar: '',
    }
  }

  handleChangeLogin = (e) => {
    this.setState({ login: e.target.value })
  }

  handleChangePassword = (e) => {
    this.setState({ password: e.target.value })
  }

  handleChangeName = (e) => {
    this.setState({ name: e.target.value })
  }

  handleChangeAvatar = (e) => {
    this.setState({ avatar: e.target.value })
  }

  handleClickSignUp = (e) => {
    this.props.onClickSignUp(this.state);
  }


  render () {
    return (
      <div className="content registration">
        <form>
        <div className="registration-headline">Sign up</div>
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
          <p>
            <input
              type="text"
              placeholder="Your name"
              value={this.state.name}
              onChange={this.handleChangeName}
            />
          </p>
          <p>
            <input
              className="sign-up-avatar"
              type="file"
              name="avatar"
              accept="image/png, image/jpeg, image/jpg"
              value={this.state.avatar}
              onChange={this.handleChangeAvatar}
            />
          </p>
          <button type="submit" onClick={this.handleClickSignUp}>Sign up</button>
        </form>
      </div>
    )
  }
}
