import React from 'react';

import Chats from './chats';
import Contacts from './contacts';
import Footer from './footer';
import Header from './header';
import Messages from './messages';
// import SettingsEdit from './settings-edit';
// import SettingsThemes from './settings-themes';
// import Settings from './settings';

import cornersImg from './tg-imgs/corners.jpeg';
import jesseImg from './tg-imgs/jesse.jpg';
import walterImg from './tg-imgs/walter.jpeg';
import honkaImg from './tg-imgs/honka.jpg';
import noAvatar from './tg-imgs/no-avatar.png';
import freddieImg from './tg-imgs/freddie.jpeg';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: 7,
      currentPage: 'Chats',
      currentChat: '',
      chatInput: '',
      theme: 'light',
      changeNameInput: '',
      avatarChangeInput: '',

      users: [
        { id: 1, name: 'Cut Corners', status: 'online', avatar: cornersImg },
        { id: 2, name: 'Jesse Pinkman', status: 'online', avatar: jesseImg },
        { id: 3, name: 'Walter White', status: 'offline', avatar: walterImg },
        { id: 4, name: 'Herr Honka', status: 'online', avatar: honkaImg },
        { id: 5, name: 'Sasuke Uchiha', status: 'offline', avatar: noAvatar },
        { id: 6, name: 'Olga Tkachuk', status: 'offline', avatar: noAvatar },
        { id: 7, name: 'Freddie Mercury', status: 'online', avatar: freddieImg },
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

  // handlers for Header

  handleClickCreateNewChat = () => {
    this.setState({ currentPage: 'Contacts' });
  }

  // ----------------------------------------

  // handlers for Footer

  handleClickButtonFooter = (page) => {
    this.setState({ currentPage: page })
  }

  // ---------------------------------------

  // handlers for Contacts

  handleClickContact = (user) => {
    const currentUser = this.state.currentUser;
    const currentPage = this.state.currentPage;
    const currentChat = this.state.currentChat;
    const chats = this.state.chats;

    const isChatExist = chats.find((chat) => chat.name === user.name);
    if (isChatExist) return;

    const newChat = {
      id: +new Date(),
      name: user.name,
      participants: [ currentUser, user.id ]
    }

    const newChats = chats.concat(newChat);

    this.setState({ currentChat: newChat, currentPage: 'Messages', chats: newChats })
  }

  // -----------------------------------------

  // handlers for Chats

  handleClickChat = (chat) => {
    this.setState({ currentChat: chat, currentPage: 'Messages' })
  }

  handleClickDeleteChat = (chatItem) => {
    const chats = this.state.chats;
    const filteredChats = chats.filter((chat) => chat !== chatItem);

    this.setState({ chats: filteredChats })
  }

  // ----------------------------------------------------

  // handlers for Messages

  handleChangeChatInput = (e) => {
    this.setState({ chatInput: e.target.value });
  }

  handleClickSendButton = (e) => {
    const currentChat = this.state.currentChat;
    const currentUser = this.state.currentUser;
    const messages = this.state.messages;
    const chatInput = this.state.chatInput;

    const newMessage = {
      id: +new Date(),
      userId: currentUser,
      chatId: currentChat.id,
      time: new Date().toLocaleTimeString(),
      content: chatInput
    }

    const newMessages = messages.concat(newMessage);

    this.setState({ messages: newMessages, chatInput: '' })
  }

  handleClickDeleteMessage = (messageItem) => {
    const messages = this.state.messages;
    const currentChat = this.state.currentChat;

    const filteredMessages = messages.filter((message) => message !== messageItem);

    this.setState({ messages: filteredMessages })
  }

  // -------------------------------------------------------

  // handlers for Settings

  handleClickLightTheme = () => {
    this.setState({ theme: 'light' })
  }

  handleClickDarkTheme = () => {
    this.setState({ theme: 'dark' })
  }

  handleClickEditProfile = () => {
    this.setState({ currentPage: 'Edit profile' })
  }

  handleChangeName = (e) => {
    this.setState({ changeNameInput: e.target.value })
  }

  handleClickChangeName = (e) => {
   const currentUser = this.state.currentUser;
   const users = this.state.users;
   const changeNameInput = this.state.changeNameInput;

   const status = users.find((user) => user.id === currentUser).status;
   const avatar = users.find((user) => user.id === currentUser).avatar;

   const newUserInfo = {
     id: currentUser,
     name: changeNameInput,
     status: status,
     avatar: avatar
   }

   const newUsers = users.slice(0, -1).concat(newUserInfo);

   this.setState({ users: newUsers, changeNameInput: ''})
  }

  handleClickRemoveAvatar = () => {
    const currentUser = this.state.currentUser;
    const users = this.state.users;
    const status = users.find((user) => user.id === currentUser).status;
    const name = users.find((user) => user.id === currentUser).name;

    const newUserInfo = {
      id: currentUser,
      name: name,
      status: status,
      avatar: noAvatar
    }

    const newUsers = users.slice(0, -1).concat(newUserInfo);

    this.setState({ users: newUsers })
  }

  handleChangeAvatarInput = (e) => {
    this.setState({ avatarChangeInput: e.target.value })
  }

  handleClickChangeAvatarSubmitButton = (e) => {
    const currentUser = this.state.currentUser;
    const users = this.state.users;
    const status = users.find((user) => user.id === currentUser).status;
    const name = users.find((user) => user.id === currentUser).name;
    const avatarChangeInput = this.state.avatarChangeInput;

    const newUserInfo = {
      id: currentUser,
      name: name,
      status: status,
      avatar: avatarChangeInput
    }

    const newUsers = users.slice(0, -1).concat(newUserInfo);

    this.setState({ users: newUsers, avatarChangeInput: '' })
  }

  // ----------------------------------------------------------

  render() {
    const currentUser = this.state.currentUser;
    const currentPage = this.state.currentPage;
    const currentChat = this.state.currentChat;
    const chatInput = this.state.chatInput;
    const theme = this.state.theme;
    const changeNameInput = this.state.changeNameInput;

    const users = this.state.users;
    const chats = this.state.chats;
    const messages = this.state.messages;

    return (
      <div className={`chat ${theme}`}>
        <Header currentPage={currentPage} onClick={this.handleClickCreateNewChat} />

        {(currentPage === 'Contacts') && (
          <Contacts onClick={this.handleClickContact} users={users} />
        )}

        {(currentPage === 'Chats') && (
          <Chats onClick={this.handleClickChat} onDelete={this.handleClickDeleteChat} users={users} chats={chats} />
        )}

        {/* {(currentPage === 'Settings') && (
          <div className="content settings">
            <span>{users.find((user) => user.id === currentUser).name}</span>
            <span className="you"> (you)</span>
            <div className="my-avatar">
              <img className="my-avatar-image" src={users.find((user) => user.id === currentUser).avatar} />
            </div>
            <div className="my-status">{users.find((user) => user.id === currentUser).status}</div>
            <ul className="features">
              <li>
                <div>Themes</div>
                <ul className="sub-menu">
                  <li onClick={this.handleClickLightTheme}>Light</li>
                  <li onClick={this.handleClickDarkTheme}>Dark</li>
                </ul>
              </li>
              <li>
                <div onClick={this.handleClickEditProfile}>Edit profile</div>
              </li>
              <li>
                <div>Language</div>
              </li>
              <li>
                <div>Confidentiality</div>
              </li>
            </ul>
          </div>
        )} */}

        {(currentPage === 'Messages') && (
          <Messages messages={messages} users={users} currentUser={currentUser} onDelete={this.handleClickDeleteMessage} />
        )}

        {/* {(currentPage === 'Edit profile') && (
          <div className="edit-profile content">
            <div className="change-name">
              <h4>Change name</h4>
              <input type="text" value={changeNameInput} placeholder={users.find((user) => user.id === currentUser).name} onChange={this.handleChangeName} />
              <button className="submit" onClick={this.handleClickChangeName}>Submit</button>
            </div>

            <div className="change-avatar">
              <h4>Change avatar</h4>
              <div>
                <button onClick={this.handleClickRemoveAvatar}>Remove avatar</button>
              </div>
              <div>
                <input type="file" name="avatar" accept="image/png, image/jpeg, image/jpg" onChange={this.handleChangeAvatarInput}/>
                <p>
                  <button onClick={this.handleClickChangeAvatarSubmitButton}>Submit</button>
                </p>
              </div>
            </div>
          </div>
        )} */}

      <Footer onClick={this.handleClickButtonFooter} />
      </div>
    );
  }
};
