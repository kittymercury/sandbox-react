import React from 'react';

export default class Registration extends React.Component {
  render () {
    const loginInputValueRegistration = this.props.loginInputValueRegistration;
    const onChangeLoginRegistration = this.props.onChangeLoginRegistration;

    const passwordInputValueRegistration = this.props.passwordInputValueRegistration;
    const onChangePasswordRegistration = this.props.onChangePasswordRegistration;

    const inputNameRegistration = this.props.inputNameRegistration;
    const onChangeNameRegistration = this.props.onChangeNameRegistration;

    const inputFileValueRegistration = this.props.inputFileValueRegistration;
    const onChangeInputFileRegistration = this.props.onChangeInputFileRegistration;

    const onClickSignUp = this.props.onClickSignUp;

    return (
      <div className="content registration">
        <form>
        <div className="registration-headline">Sign up</div>
          <p><input type="text" placeholder="Login" value={loginInputValueRegistration} onChange={onChangeLoginRegistration} /></p>
          <p><input type="password" placeholder="Password" value={passwordInputValueRegistration} onChange={onChangePasswordRegistration} /></p>
          <p><input type="text" placeholder="Your name" value={inputNameRegistration} onChange={onChangeNameRegistration} /></p>
          <p><input className="sign-up-avatar" type="file" name="avatar" accept="image/png, image/jpeg, image/jpg" value={inputFileValueRegistration} onChange={onChangeInputFileRegistration} /></p>
          <button type="submit" onClick={onClickSignUp}>Sign up</button>
        </form>
      </div>
    )
  }
}
