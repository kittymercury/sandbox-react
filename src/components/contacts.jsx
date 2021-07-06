import React from 'react';

export default class Contacts extends React.Component {
  render () {
    const users = this.props.users;

    return (
        <div className="content contacts">
          <ul>
            {users.map((user) => {
              const onClick = () => this.props.onClick(user);
              return (
                <li onClick={onClick}>
                  <img className="avatar" src={user.avatar} />
                  <span> {user.name}</span>
                  <span className={user.status}> {user.status}</span>
                </li>
              )
            })}
          </ul>
        </div>
    )
  }
}
