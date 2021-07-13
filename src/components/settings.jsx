import React from 'react';
import { getImg } from './helpers';

export default class Settings extends React.Component {
  render () {
    const user = this.props.user;
    const isStatusVisible = this.props.isStatusVisible;
    const onClickEditProfile = this.props.onClickEditProfile;
    const onClickThemes = this.props.onClickThemes;
    const onClickPrivacyAndSecurity = this.props.onClickPrivacyAndSecurity;

    return (
      <div className="content settings">
        <span>{user.name}</span>
        <span className="you"> (you)</span>
        <div className="my-avatar">
          <img className="my-avatar-image" src={getImg(user.avatar)} />
        </div>
        {isStatusVisible && <div className="my-status">{user.status}</div>}
        <ul className="features">
          <li>
            <div onClick={onClickThemes}>Themes</div>
          </li>
          <li>
            <div onClick={onClickEditProfile}>Edit profile</div>
          </li>
          <li>
            <div onClick={onClickPrivacyAndSecurity}>Privacy and security</div>
          </li>
        </ul>
      </div>
    )
  }
}
