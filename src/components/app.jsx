import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 'Chats',
      currentUser: 4,
      currentChat: null,
      chatInput: '',

      users: [
        { id: 1, name: 'Bob', status: 'online' },
        { id: 2, name: 'Tom', status: 'offline' },
        { id: 3, name: 'Jef', status: 'offline' },
        { id: 4, name: 'Kok', status: 'online' },
        { id: 5, name: 'Kek', status: 'online' },
      ],

      chats: [
        { id: 1, participants: [4, 5] },
        { id: 2, participants: [4, 2] },
        { id: 3, participants: [4, 1] },
      ],

      messages: [
        { id: 1, chatId: 1, userId: 4, time: '15:51', content: 'Hey!' },
        { id: 2, chatId: 1, userId: 5, time: '16:14', content: 'Hello!' },
        { id: 3, chatId: 2, userId: 4, time: '14:11', content: 'What?' },
        { id: 4, chatId: 2, userId: 2, time: '17:15', content: 'Say my name!' },
        { id: 5, chatId: 3, userId: 4, time: '11:00', content: '.i.' },
        { id: 6, chatId: 3, userId: 1, time: '13:01', content: '???' },
      ],
    };
  }

  handleFooterButtonClick = (page) => {
    this.setState({ currentPage: page });
  }

  handleChatClick = (chat) => {
    this.setState({ currentPage: 'Messages', currentChat: chat });
  }

  handleChangeChatInput = (e) => {
    this.setState({ chatInput: e.target.value });
  }

  handleClickSendMessage = (e) => {
    const currentUser = this.state.currentUser;
    const currentChat = this.state.currentChat;
    const chatInput = this.state.chatInput;

    const newMessage = {
      id: +new Date(),
      chatId: currentChat.id,
      userId: currentUser,
      time: new Date().toTimeString().replace(/.*(\d{2}:\d{2}).*/, "$1"),
      content: chatInput,
    };
    const newMessages = this.state.messages.concat(newMessage)

    this.setState({ chatInput: '', messages: newMessages });
  }

  render() {
    const currentPage = this.state.currentPage;
    const currentUser = this.state.currentUser;
    const currentChat = this.state.currentChat;
    const chatInput = this.state.chatInput;

    const users = this.state.users;
    const chats = this.state.chats;
    const messages = this.state.messages;

    return (
      <div className="chat">
        <div className="header">
          <div className="pointer" style={{ width: '100px' }}>{(currentPage === 'Chats') ? 'Edit' : ''}</div>
          <div>{currentPage}</div>
          <div className="pointer" style={{ width: '100px' }}>{(currentPage === 'Chats') ? 'Create chat' : ''}</div>
        </div>

        {(currentPage === 'Contacts') && (
          <div className="content contacts">
            <ul>{users.map((user) => {
              return (
                <li>
                  <span>{user.name}</span>
                  <span className={user.status}>{user.status}</span>
                </li>
              );
            })}</ul>
          </div>
        )}

        {(currentPage === 'Chats') && (
          <div className="content chats">
            <ul>{chats.map((chat) => {
              const participant = users.find((user) => user.id === chat.participants[1]);
              return <li onClick={() => this.handleChatClick(chat)}>{participant.name}</li>
            })}</ul>
          </div>
        )}

        {(currentPage === 'Settings') && (
          <div className="content settings">
            {users.find((user) => user.id === currentUser).name}
          </div>
        )}

        {(currentPage === 'Messages') && (
          <div className="content messages">
            <ul>
              {messages.filter((message) => message.chatId === currentChat.id).map((message) => {
                const user = users.find((user) => user.id === message.userId);
                const isCurrentUsersMessage = message.userId === currentUser;
                const style = { textAlign: isCurrentUsersMessage ? 'right' : 'left' };

                return (
                  <li>
                    <div style={style}>{user.name} {message.time}</div>
                    <div style={style}>{message.content}</div>
                  </li>
                );
              })}
            </ul>

            <div style={{ display: 'flex' }}>
              <input style={{ flex: 1 }} type="text" value={chatInput} onChange={this.handleChangeChatInput} />
              <button onClick={this.handleClickSendMessage}>Send</button>
            </div>
          </div>
        )}

        <div className="footer">
          <button onClick={() => this.handleFooterButtonClick('Contacts')}>Contacts</button>
          <button onClick={() => this.handleFooterButtonClick('Chats')}>Chats</button>
          <button onClick={() => this.handleFooterButtonClick('Settings')}>Settings</button>
        </div>
      </div>
    );
  }
};
