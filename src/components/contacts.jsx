import React from 'react';

export default class Contacts extends React.Component {
  render () {
    const users = this.props.users;

    return (
        <div className="content contacts">
          <ul>
            {users.map((user) => {
              const onClickUserName = () => this.props.onClickUserName(user);
              const onClickAvatar = () => this.props.onClickAvatar(user);
              return (
                <li>
                  <img className="avatar" src={user.avatar} onClick={onClickAvatar} />
                  <span className="user-name" onClick={onClickUserName}> {user.name} <span className={user.status}> {user.status}</span></span>
                </li>
              )
            })}
          </ul>
        </div>
    )
  }
}
