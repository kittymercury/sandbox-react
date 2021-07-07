import React from 'react';

export default class ContactInfo extends React.Component {
  render () {
    const users = this.props.users;
    const userProfile = this.props.userProfile;
    const chats = this.props.chats;
    console.log({chats, userProfile})
    const theChat = chats.find((chat) => chat.participants.includes(userProfile.id));
    const onClickOpenChat = () => this.props.onClickOpenChat(theChat);

    return (
      <div className="content contact-info">
        {users.filter((user) => user.id === userProfile.id).map((user) => {
          return (
              <div className="user-info">
                <img className="user-avatar-image" src={user.avatar} />
                <div className="user-name">{user.name}
                  <span className={`user-status ${user.status}`}> ({user.status})</span>
                  <div className="contact-number">{user.contactNumber}</div>
                </div>
                <p>
                  <div className="chat-with-user" onClick={onClickOpenChat}>Open chat</div>
                </p>
              </div>
          )
        })}
      </div>
    )
  }
}
