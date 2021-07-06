import React from 'react';


export default class Settings extends React.Component {
  render () {
    const users = this.props.users;
    const currentUser = this.props.currentUser;
    const onClickEditProfile = this.props.onClickEditProfile;
    const onClickThemes = this.props.onClickThemes;

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
            <div onClick={onClickThemes}>Themes</div>
          </li>
          <li>
            <div onClick={onClickEditProfile}>Edit profile</div>
          </li>
          <li>
            <div>Confidentiality</div>
          </li>
        </ul>
      </div>
    )
  }
}
