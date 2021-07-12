import React from 'react';

export default class Messages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputSearch: '',
      inputMessage: '',
      messageToEdit: null,
      messageToReply: null,
      messages: props.messages || [
        { id: 1, userId: 1, chatId: 1, time: '00:00', content: 'I love you <3' },
        { id: 2, userId: 7, chatId: 1, time: '00:01', content: 'I love you too <3' },
        { id: 7, userId: 7, chatId: 1, time: '00:01', content: 'I want you <3' },
        { id: 3, userId: 6, chatId: 2, time: '07:40', content: 'Віта, в тебе є черешні?' },
        { id: 4, userId: 7, chatId: 2, time: '12:10', content: 'нажаль уже немає' },
        { id: 5, userId: 3, chatId: 3, time: '11:00', content: 'I know that you are the one who knocks and always make' },
        { id: 6, userId: 7, chatId: 3, time: '13:04', content: 'You are goddamn right' },
      ]
    };
  }

  handleClickDeleteMessage = (message) => {
    const newMessages = this.state.messages.filter((m) => m.id !== message.id);
    this.setState({ messages: newMessages })
  }

  handleClickReply = (message) => {
    this.setState({ messageToReply: message })
  }

  handleClickShare = (message) => {
    this.props.changePage('Chats', { messageToForward: message, messages: this.state.messages });
  }

  handleClickEditMessage = (message) => {
    this.setState({ messageToEdit: message, inputMessage: message.content });
  }

  handleChangeInputMessage = (e) => {
    this.setState({ inputMessage: e.target.value });
  }

  handleClickButtonSend = () => {
    const currentChat = this.props.currentChat;
    const currentUser = this.props.currentUser;
    const messages = this.state.messages;
    const inputMessage = this.state.inputMessage;
    const messageToReply = this.state.messageToReply;

    const newMessage = {
      id: +new Date(),
      userId: currentUser,
      chatId: currentChat.id,
      time: new Date().toLocaleTimeString(),
      content: inputMessage,
      reply: messageToReply,
    };

    const newMessages = messages.concat(newMessage);

    this.setState({
      messages: newMessages,
      inputMessage: '',
      messageToReply: null,
    });
  }

  handleClickButtonEditOk = () => {
    const inputMessage = this.state.inputMessage;
    const messageToEdit = this.state.messageToEdit;

    const newMessages = this.state.messages.map((m) => {
      return (m.id === messageToEdit.id)
        ? { ...m, content: inputMessage }
        : m;
    });

    this.setState({
      messages: newMessages,
      inputMessage: '',
      messageToEdit: null,
    });
  }

  handleChangeInputSearch = (e) => {
    this.setState({ inputSearch: e.target.value  })
  }

  render () {
    const users = this.props.users;
    const currentUser = this.props.currentUser;
    const currentChat = this.props.currentChat;
    const isEditMessages = this.props.isEditMessages;
    const isSearch = this.props.isSearch;
    const inputSearch = this.state.inputSearch;

    const inputMessage = this.state.inputMessage;
    const messageToReply = this.state.messageToReply;
    const messages = this.state.messages;

    let foundMessages = [];
    if (isSearch && inputSearch) {
      messages.filter((message) => message.chatId === currentChat.id).forEach((message) => {
        if (message.content.toLowerCase().includes(inputSearch.toLowerCase())) {
          foundMessages.push(message);
        }
      });
    } else {
      foundMessages = this.state.messages.filter((message) => message.chatId === currentChat.id);
    }

    return (
      <div className="content messages">
        {isSearch && (
          <input
            className="search"
            type="text"
            placeholder="Search"
            value={inputSearch}
            onChange={this.handleChangeInputSearch}
          />
        )}

        <ul>
          {foundMessages.map((message) => {
            const user = users.find((user) => user.id === message.userId);
            const isCurrentUsersMessage = message.userId === currentUser;
            const style = { textAlign: isCurrentUsersMessage ? 'right' : 'left' };
            const messageStyle = { flexDirection: isCurrentUsersMessage ? 'row-reverse' : 'row' };
            const onDelete = () => this.handleClickDeleteMessage(message);
            const onClickReply = () => this.handleClickReply(message);
            const onClickShare = () => this.handleClickShare(message);
            const onClickEditMessage = () => this.handleClickEditMessage(message);

            return (
              <li key={message.id}>
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
                    {(isCurrentUsersMessage && !message.forward) && (
                      <span onClick={onClickEditMessage}>Edit</span>
                    )}
                  </div>
                )}
              </li>
            )
          })}
        </ul>
        <div style={{ display: 'block' }}>
          {(messageToReply) && (
            <div className="reply-to">
              <span className="iconify" data-icon="websymbol-reply" data-inline="false"></span><br/>
              <span>{users.find((user) => user.id === messageToReply.userId).name} </span><br/>
              <span>{messageToReply.content}</span>
            </div>
          )}
          <div style={{ display: 'flex' }}>
            <input
              style={{ flex: 1 }}
              placeholder="Type your message here"
              value={inputMessage}
              onChange={this.handleChangeInputMessage}
            />
            {this.state.messageToEdit
              ? <button onClick={this.handleClickButtonEditOk}>OK</button>
              : <button onClick={this.handleClickButtonSend}>Send</button>}
          </div>
        </div>
      </div>
    )
  }
}
