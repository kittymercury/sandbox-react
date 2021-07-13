import React from 'react';
import { getImg } from './helpers';

export default class ContactInfo extends React.Component {
  render () {
    const user = this.props.user;
    const isStatusVisible = this.props.isStatusVisible;
    const onClickOpenChat = this.props.onClickOpenChat;

    return (
      <div className="content contact-info">
        <div className="user-info">
          <span className="edit-user-info">Edit</span>
          <img className="user-avatar-image" src={getImg(user.avatar)} />
          <div className="user-name">{user.name}
            {isStatusVisible && (
              <span className={`user-status ${user.status}`}>
                ({user.status})
              </span>
            )}
            <div className="contact-number">{user.contactNumber}</div>
          </div>
          <p>
            <div className="chat-with-user" onClick={onClickOpenChat}>Open chat</div>
          </p>
        </div>
      </div>
    )
  }
}
