import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: 7,
      currentPage: 'Chats',
      currentChat: '',
      chatInput: '',

      users: [
        { id: 1, name: 'Cut Corners', status: 'online' },
        { id: 2, name: 'Jesse Pinkman', status: 'online' },
        { id: 3, name: 'Walter White', status: 'offline' },
        { id: 4, name: 'Herr Honka', status: 'online' },
        { id: 5, name: 'Sasuke Uchiha', status: 'offline' },
        { id: 6, name: 'Olga Tkachuk', status: 'offline' },
        { id: 7, name: 'Freddie Mercury', status: 'online' },
      ],

      chats: [
        { id: 1, name: 'Cut Corners', participants: [ 7, 1 ] },
        { id: 2, name: 'Olga Tkachuk', participants: [ 7, 6 ] },
        { id: 3, name: 'Walter White', participants: [ 7, 3 ] },
      ],

      messages: [
        { id: 1, userId: 1, chatId: 1, time: '00:00', content: 'I love you <3' },
        { id: 2, userId: 7, chatId: 1, time: '00:01', content: 'I love you too <3' },
        { id: 3, userId: 6, chatId: 2, time: '07:40', content: 'Віта, в тебе є черешні?' },
        { id: 4, userId: 7, chatId: 2, time: '12:10', content: 'нажаль уже немає' },
        { id: 5, userId: 3, chatId: 3, time: '11:00', content: 'I know that you are the one who knocks and always make' },
        { id: 6, userId: 7, chatId: 3, time: '13:04', content: 'You are goddamn right' },
      ]
    };
  }

  handleClickFooterButton = (page) => {
    this.setState({ currentPage: page })
  }

  handleClickChat = (chat) => {
    this.setState({ currentChat: chat, currentPage: 'Messages' })
  }

  handleChangeChatInput = (e) => {
    this.setState({ chatInput: e.target.value })
  }

  handleClickSendButton = (e) => {
    const currentChat = this.state.currentChat;
    const currentUser = this.state.currentUser;
    const chatInput = this.state.chatInput;
    const messages = this.state.messages;

    const newMessage = {
      id: +new Date(),
      userId: currentUser,
      chatId: currentChat.id,
      time: new Date().toLocaleTimeString(),
      content: chatInput
    };

    const newMessages = messages.concat(newMessage);

    this.setState({ messages: newMessages, chatInput: '' })
  }

  handleClickCreateNewChat = () => {
    this.setState({ currentPage: 'Contacts' })
  }

  handleClickContact = (user) => {
    const currentUser = this.state.currentUser;
    const currentPage = this.state.currentPage;
    const currentChat = this.state.currentChat;
    const chats = this.state.chats;

    const isChatExist = chats.find((chat) => chat.name === user.name);
    if (isChatExist) return;


    const newChat = {
      id: +new Date,
      name: user.name,
      participants: [ currentUser, user.id ]
    }

    const newChats = chats.concat(newChat);

    this.setState({ chats: newChats, currentPage: 'Messages', currentChat: newChat })

  }

  handleClickDeleteChat = (chatItem) => {
    const chats = this.state.chats;

    const filteredChats = chats.filter((chat) => chat !== chatItem);

    this.setState({ chats: filteredChats, currentChat: null })
  }

  handleClickDeleteMessage = (messageItem) => {
    const messages = this.state.messages;

    const filteredMessages = messages.filter((message) => message !== messageItem);

    this.setState({ messages: filteredMessages })
  }

  render() {
    const currentUser = this.state.currentUser;
    const currentPage = this.state.currentPage;
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
          <div className="pointer" style={{ width: '100px' }} onClick={this.handleClickCreateNewChat}>{(currentPage === 'Chats') ? 'Create new chat' : ''}</div>
        </div>

        {(currentPage === 'Contacts') && (
          <div className="content contacts">
            <ul>
              {users.map((user) => {
                return (
                  <li onClick={() => this.handleClickContact(user)}>
                    <span>{user.name}</span>
                    <span className={user.status}>{user.status}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        )}

        {(currentPage === 'Chats') && (
          <div className="content chats">
            <ul>
              {chats.map((chat) => {
                const participant = users.find((user) => user.id === chat.participants[1]);
                return (
                  <li>
                    <div className="name" onClick={() => this.handleClickChat(chat)}>{participant.name}</div>
                    <div className="delete" onClick={() => this.handleClickDeleteChat(chat)}>X</div>
                  </li>
                )
              })}
            </ul>
          </div>
        )}

        {(currentPage === 'Settings') && (
          <div className="content settings">
            <span>{users.find((user) => user.id === currentUser).name}</span>
            <span className="you"> (you)</span>
          </div>
        )}

        {(currentPage === 'Messages') && (
          <div className="content messages">
            <ul>
              {messages.filter((message) => message.chatId === currentChat.id).map((message) => {
                const user = users.find((user) => user.id === message.userId);
                const isCurrentUsersMessage = message.userId === currentUser;
                const style = { textAlign: isCurrentUsersMessage ? 'right' : 'left' };
                const liStyle = { flexDirection: isCurrentUsersMessage ? 'row-reverse' : 'row' };

                return (
                  <li style={liStyle}>
                    <div>
                      <div style={style}>{user.name} {message.time}</div>
                      <div style={style}>{message.content}</div>
                    </div>
                    <div className="delete" onClick={() => this.handleClickDeleteMessage(message)}>X</div>
                  </li>
                )
              })}
            </ul>

            <div style={{ display: 'flex' }}>
              <input style={{ flex: 1 }} type="text" placeholder="Type your message here" value={chatInput} onChange={this.handleChangeChatInput} />
              <button onClick={this.handleClickSendButton}>Send</button>
            </div>
          </div>
        )}

        <div className="footer">
          <button onClick={() => this.handleClickFooterButton('Contacts')}>Contacts</button>
          <button onClick={() => this.handleClickFooterButton('Chats')}>Chats</button>
          <button onClick={() => this.handleClickFooterButton('Settings')}>Settings</button>
        </div>
      </div>
    );
  }
};
