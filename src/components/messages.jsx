import React from 'react';

export default class Messages extends React.Component {
  render () {
    const messages = this.props.messages;
    const users = this.props.users;
    const currentUser = this.props.currentUser;
    const currentChat = this.props.currentChat;
    const chatInput = this.props.chatInput;
    const showOk = this.props.showOk;
    const showSend = this.props.showSend;
    const onClick = this.props.onSendClick;
    const onChange = this.props.onChange;
    const onClickEditButtonOk = this.props.onClickEditButtonOk;
    const messageToReply = this.props.messageToReply;
    const messageToForward = this.props.messageToForward;
    const isEditMessages = this.props.isEditMessages;

    return (
      <div className="content messages">
        <ul>
          {messages.filter((message) => message.chatId === currentChat.id).map((message) => {
            const user = users.find((user) => user.id === message.userId);
            const isCurrentUsersMessage = message.userId === currentUser;
            const style = { textAlign: isCurrentUsersMessage ? 'right' : 'left' };
            const messageStyle = { flexDirection: isCurrentUsersMessage ? 'row-reverse' : 'row' };
            const onDelete = () => this.props.onDelete(message);
            const onClickReply = () => this.props.onClickReply(message);
            const onClickShare = () => this.props.onClickShare(message);
            const onClickEditMessage = () => this.props.onClickEditMessage(message);

            return (
              <li>
                {(message.reply) && (
                  <div className="message-reply">
                    <div style={messageStyle}>
                      <div>{users.find((user) => user.id === message.reply.userId).name}</div>
                      <div>{message.reply.content}</div>
                    </div>
                  </div>
                )}

                <div className="message" style={messageStyle}>
                    <div style={style}>
                      <span>{user.name}</span>
                      <span className="message-time"> {message.time}</span>
                    </div>
                    <div style={style}>{message.content}</div>
                </div>

                {(message.forward) && (
                  <div className="message-forward">
                    <div style={messageStyle}>
                      <div>Forwarded from: {users.find((user) => user.id === message.forward.userId).name}</div>
                      <div>{message.forward.content}</div>
                    </div>
                  </div>
                )}

                {isEditMessages && (
                  <div className="reply-share">
                    <span onClick={onClickReply}>Reply </span>
                    <span onClick={onClickShare}> Forward</span>
                    <span onClick={onDelete}>Delete</span>
                    {(isCurrentUsersMessage) && <span onClick={onClickEditMessage}>   Edit</span>}
                  </div>
                )}
              </li>
            )
          })}
        </ul>
        <div style={{ display: 'block' }}>
          {(messageToReply) && (
            <div className="reply-to">
              <span class="iconify" data-icon="websymbol-reply" data-inline="false"></span><br/>
              <span>{users.find((user) => user.id === messageToReply.userId).name} </span><br/>
              <span>{messageToReply.content}</span>
            </div>
          )}
          <div style={{ display: 'flex' }}>
            <input style={{ flex: 1 }} placeholder="Type your message here" value={chatInput} onChange={onChange} />
            <button className={showSend} onClick={onClick}>Send</button>
            <button className={showOk} onClick={onClickEditButtonOk}>OK</button>
          </div>
        </div>
      </div>
    )
  }
}
