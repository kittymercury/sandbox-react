import React from 'react';
import { getImg } from './helpers';

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
                <li key={user.id}>
                  <img className="avatar"
                    src={getImg(user.avatar)}
                    onClick={onClickAvatar}
                  />
                  <span className="user-name" onClick={onClickUserName}>
                    {user.name}
                    <span className={user.status}> {user.status}</span>
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
    )
  }
}
