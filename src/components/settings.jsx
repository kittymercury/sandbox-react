import React from 'react';
import SettingsThemes from './settings-themes';

export default class Settings extends React.Component {
  render () {
    const users = this.props.users;
    const currentUser = this.props.currentUser;
    const onClickDarkTheme = this.props.onClickDarkTheme;
    const onClickLightTheme = this.props.onClickLightTheme;
    const onClickEditProfile = this.props.onClickEditProfile;


    return (
      <div className="content settings">
        <span>{users.find((user) => user.id === currentUser).name}</span>
        <span className="you"> (you)</span>
        <div className="my-avatar">
          <img className="my-avatar-image" src={users.find((user) => user.id === currentUser).avatar} />
        </div>
        <div className="my-status">{users.find((user) => user.id === currentUser).status}</div>
        <ul className="features">
          <li>
            <SettingsThemes onClickDarkTheme={onClickDarkTheme} onClickLightTheme={onClickLightTheme}/>
          </li>
          <li>
            <div onClick={this.handleClickEditProfile}>Edit profile</div>
          </li>
          <li>
            <div>Language</div>
          </li>
          <li>
            <div>Confidentiality</div>
          </li>
        </ul>
      </div>
    )}
    )
  }
}
