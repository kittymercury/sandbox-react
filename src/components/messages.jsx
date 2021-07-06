import React from 'react';

export default class Messages extends React.Component {
  render () {
    const messages = this.props.messages;
    const users = this.props.users;
    const currentUser = this.props.currentUser;

    return (
      <div className="content messages">
        <ul>
          {messages.filter((message) => message.chatId === currentChat.id).map((message) => {
            const user = users.find((user) => user.id === message.userId);
            const isCurrentUsersMessage = message.userId === currentUser;
            const style = { textAlign: isCurrentUsersMessage ? 'right' : 'left' };
            const liStyle = { flexDirection: isCurrentUsersMessage ? 'row-reverse' : 'row' };
            const onDelete = () => this.props.onDelete(message);

            return (
              <li style={liStyle}>
                <div>
                  <div style={style}>
                    <span>{user.name}</span>
                    <span className="message-time"> {message.time}</span>
                  </div>
                  <div style={style}>{message.content}</div>
                </div>
                <div className="delete" onClick={onDelete}>X</div>
              </li>
            )
          })}
        </ul>
        <div style={{ display: 'flex' }}>
          <input style={{ flex: 1 }} placeholder="Type your message here" value={chatInput} onChange={this.handleChangeChatInput} />
          <button onClick={this.handleClickSendButton}>Send</button>
        </div>

      </div>
    )
  }
}
