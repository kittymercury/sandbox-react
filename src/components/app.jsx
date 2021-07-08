import React from 'react';

import Authentication from './authentication';
import Registration from './registration';
import Header from './header';
import Footer from './footer';
import Contacts from './contacts';
import ContactInfo from './contact-info';
import Chats from './chats';
import Messages from './messages';
import Settings from './settings';
import SettingsThemes from './settings-themes';
import SettingsEdit from './settings-edit';

import cornersImg from './tg-imgs/corners.jpeg';
import jesseImg from './tg-imgs/jesse.jpg';
import walterImg from './tg-imgs/walter.jpeg';
import noAvatar from './tg-imgs/no-avatar.png';
import freddieImg from './tg-imgs/freddie.jpeg';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: 7,
      currentPage: 'Contacts',
      currentChat: '',
      userProfile: '',
      chatInput: '',
      showOk: 'hidden',
      showSend: '',
      theme: 'light',
      changeNameInput: '',
      avatarChangeInput: '',
      loginInputValueAuthentication: '',
      passwordInputValueAuthentication: '',
      loginInputValueRegistration: '',
      passwordInputValueRegistration: '',
      nameInputValueRegistration: '',
      avatarInputValueRegistration: '',
      messageToReply: null,
      messageToForward: null,

      users: [
        { id: 1, name: 'Cut Corners', status: 'online', contactNumber: '+380996661488', avatar: cornersImg, login: '1', password: '1' },
        { id: 2, name: 'Jesse Pinkman', contactNumber: '+380996261488', status: 'online', avatar: jesseImg },
        { id: 3, name: 'Walter White', status: 'offline' ,contactNumber: '+380996643488', avatar: walterImg },
        { id: 6, name: 'Olga Tkachuk', status: 'offline', contactNumber: '+380996632488', avatar: noAvatar },
        { id: 7, name: 'Mercury', status: 'online', contactNumber: '+380956543488', avatar: freddieImg, login: '2', password: '2' },
      ],

      chats: [
        { id: 1, participants: [ 7, 1 ] },
      ],

      messages: [
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

  handleClickContact = (userContact) => {
    const currentUser = this.state.currentUser;
    const currentPage = this.state.currentPage;
    const currentChat = this.state.currentChat;
    const chats = this.state.chats;
    const users = this.state.users;

    const userToChat = users.find((user) => user.id === userContact.id).id;

    const isChatExist = chats.find((chat) => chat.participants.includes(userToChat) === true);

    if (isChatExist) return;


    const newChat = {
      id: +new Date(),
      name: userContact.name,
      participants: [ currentUser, userContact.id ]
    }

    const newChats = chats.concat(newChat);

    this.setState({ currentChat: newChat, currentPage: 'Messages', chats: newChats })
  }

  handleClickOpenContactInfo = (userContact) => {
    const users = this.state.users;
    const userClicked = users.find((user) => user.id === userContact.id);
    const currentPage = this.state.currentPage;
    const userProfile = this.state.userProfile;

    this.setState({ userProfile: userClicked, currentPage: 'Contact info' })
  }

  // -----------------------------------------

  // handlers for ContactInfo

  handleClickOpenChat = (chat) => {
    if (chat) {
      this.setState({ currentChat: chat, currentPage: 'Messages' })
    } else {
      const userProfile = this.state.userProfile;
      const currentUser = this.state.currentUser;
      const chats = this.state.chats;
      const newChat = {
        id: +new Date(),
        name: userProfile.name,
        participants: [ currentUser, userProfile.id ]
      }

      const newChats = chats.concat(newChat);

      this.setState({ currentChat: newChat, currentPage: 'Messages', chats: newChats })
    }

  }

  // ---------------------------------------

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


  // handlers for Settings

  handleClickThemes = () => {
    this.setState({ currentPage: 'Themes' })
  }

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

  // ---------------------------------------------------------

  // handlers for Authentication

  handleChangeLoginAuthentication = (e) => {
    this.setState({ loginInputValueAuthentication: e.target.value })
  }

  handleChangePasswordAuthentication = (e) => {
    this.setState({ passwordInputValueAuthentication: e.target.value })
  }

  handleClickLogIn = (e) => {
    const loginInputValueAuthentication = this.state.loginInputValueAuthentication;
    const passwordInputValueAuthentication = this.state.passwordInputValueAuthentication;
    const users = this.state.users;
    const currentUser = users.find((user) => {
      if ((user.login === loginInputValueAuthentication) && (user.password === passwordInputValueAuthentication)) {
        return true;
      } else {
        return false;
      }
    });
    if (currentUser) {
      this.setState({ currentUser: currentUser.id, currentPage: 'Chats', loginInputValueAuthentication: '', passwordInputValueAuthentication: '' })
    } else {
      alert('Wrong credentials');
    }
  }

  handleClickOpenRegistration = () => {
    this.setState({ currentPage: 'Registration' })
  }


  // ---------------------------------------------

  // handlers for Registration

  handleChangeLoginRegistration = (e) => {
    this.setState({ loginInputValueRegistration: e.target.value })
  }

  handleChangePasswordRegistration = (e) => {
    this.setState({ passwordInputValueRegistration: e.target.value })
  }

  handleChangeNameRegistration = (e) => {
    this.setState({ nameInputValueRegistration: e.target.value })
  }

  handleChangeInputFileRegistration = (e) => {
    this.setState({ inputFileValueRegistration: e.target.value })
  }

  handleClickSignUp = (e) => {
    const loginInputValueRegistration = this.state.loginInputValueRegistration;
    const passwordInputValueRegistration = this.state.passwordInputValueRegistration;
    const nameInputValueRegistration = this.state.nameInputValueRegistration;
    const inputFileValueRegistration = this.state.inputFileValueRegistration;
    const users = this.state.users;
    const currentUser = this.state.currentUser;

    const newUser = {
      id: +new Date(),
      name: nameInputValueRegistration,
      status: 'online',
      avatar: inputFileValueRegistration,
      login: loginInputValueRegistration,
      password: passwordInputValueRegistration,
    }

    const newUsers = users.concat(newUser);

    this.setState({ currentUser: newUser.id, users: newUsers, currentPage: 'Chats' })
  }

  // ------------------------------------------------

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
      content: chatInput,
      reply: this.state.messageToReply,
      forward: this.state.massageToForward
    }


    const newMessages = messages.concat(newMessage);

    this.setState({ messages: newMessages, chatInput: '', messageToReply: '' })
  }

  handleClickDeleteMessage = (messageItem) => {
    const messages = this.state.messages;
    const currentChat = this.state.currentChat;

    const filteredMessages = messages.filter((message) => message !== messageItem);

    this.setState({ messages: filteredMessages })
  }

  handleClickReply = (messageItem) => {
    this.setState({ messageToReply: messageItem })
  }

  handleClickShare = (messageItem) => {
    this.setState({ messageToForward: messageItem, currentPage: 'Chats' })
  }

  handleClickEditMessage = (messageItem) => {
    const messages = this.state.messages;
    const inputEditMessage = this.state.inputEditMessage;
    const clickedMessage = messages.find((message) => message === messageItem);

    this.setState({ chatInput: clickedMessage.content, showSend: 'hidden', showOk: ''})
  }

  handleClickEditButtonOk = (e) => {
    // const currentChat = this.state.currentChat;
    // const currentUser = this.state.currentUser;
    // const messages = this.state.messages;
    // const chatInput = this.state.chatInput;
    // const currentMessage = messages.filter((message) => message.userId === currentUser).find((message) => message.content === chatInput);
    //
    // const editedMessage = {
    //   id: currentMessage.id,
    //   userId: currentUser,
    //   chatId: currentChat.id,
    //   time: currentMessage.time,
    //   content: chatInput
    // }
    //
    // const indexOfCurrentMessage = messages.indexOf(currentMessage);
    //
    // const newMessages = messages.splice(indexOfCurrentMessage, 1, editedMessage);
    //
    // this.setState({ messages: newMessages, chatInput: '' })
  }


  // -------------------------------------------------------
  render() {
    const currentUser = this.state.currentUser;
    const currentPage = this.state.currentPage;
    const currentChat = this.state.currentChat;
    const userProfile = this.state.userProfile;
    const chatInput = this.state.chatInput;
    const theme = this.state.theme;
    const changeNameInput = this.state.changeNameInput;
    const loginInputValueAuthentication = this.state.loginInputValueAuthentication;
    const passwordInputValueAuthentication = this.state.passwordInputValueAuthentication;
    const avatarInputValueRegistration = this.state.avatarInputValueRegistration;
    const loginInputValueRegistration = this.state.loginInputValueRegistration;
    const passwordInputValueRegistration = this.state.passwordInputValueRegistration;
    const nameInputValueRegistration = this.state.nameInputValueRegistration;
    const showOk = this.state.showOk;
    const showSend = this.state.showSend;
    const onClickEditButtonOk = this.state.onClickEditButtonOk;
    const messageToReply = this.state.messageToReply;

    const users = this.state.users;
    const chats = this.state.chats;
    const messages = this.state.messages;

    return (
      <div className={`chat ${theme}`}>
        <Header currentPage={currentPage} onClick={this.handleClickCreateNewChat} />

        {(currentPage === 'Authentication') && (
          <Authentication loginInputValueAuthentication={loginInputValueAuthentication} onChangeLoginAuthentication={this.handleChangeLoginAuthentication} passwordInputValueAuthentication={passwordInputValueAuthentication} onChangePasswordAuthentication={this.handleChangePasswordAuthentication} onClickLogIn={this.handleClickLogIn} onClickOpenRegistration={this.handleClickOpenRegistration} />
        )}

        {(currentPage === 'Registration') && (
          <Registration loginInputValueRegistration={loginInputValueRegistration} onChangeLoginRegistration={this.handleChangeLoginRegistration} passwordInputValueRegistration={passwordInputValueRegistration} onChangePasswordRegistration={this.handleChangePasswordRegistration} nameInputValueRegistration={nameInputValueRegistration} onChangeNameRegistration={this.handleChangeNameRegistration} avatarInputValueRegistration={avatarInputValueRegistration} onChangeInputFileRegistration={this.handleChangeInputFileRegistration} onClickSignUp={this.handleClickSignUp} />
        )}

        {(currentPage === 'Contacts') && (
          <Contacts onClickUserName={this.handleClickContact} onClickAvatar={this.handleClickOpenContactInfo} users={users} />
        )}

        {(currentPage === 'Contact info') && (
          <ContactInfo users={users} userProfile={userProfile} onClickOpenChat={this.handleClickOpenChat} chats={chats} />
        )}

        {(currentPage === 'Chats') && (
          <Chats currentUser={currentUser} onClick={this.handleClickChat} onDelete={this.handleClickDeleteChat} users={users} chats={chats} />
        )}

        {(currentPage === 'Settings') && (
          <Settings users={users} currentUser={currentUser} onClickEditProfile={this.handleClickEditProfile} onClickThemes={this.handleClickThemes} />
        )}

        {(currentPage === 'Messages') && (
          <Messages
            messages={messages}
            users={users}
            currentChat={currentChat}
            currentUser={currentUser}
            onDelete={this.handleClickDeleteMessage}
            onChange={this.handleChangeChatInput}
            chatInput={chatInput}
            onSendClick={this.handleClickSendButton}
            onClickReply={this.handleClickReply}
            onClickShare={this.handleClickShare}
            onClickEditMessage={this.handleClickEditMessage}
            showOk={showOk}
            showSend={showSend}
            onClickEditButtonOk={this.handleClickEditButtonOk}
            messageToReply={messageToReply}
          />
        )}

        {(currentPage === 'Themes') && (
          <SettingsThemes onClickDarkTheme={this.handleClickDarkTheme} onClickLightTheme={this.handleClickLightTheme} />
        )}

        {(currentPage === 'Edit profile') && (
          <SettingsEdit changeNameInput={changeNameInput} users={users} currentUser={currentUser} onChangeName={this.handleChangeName} onClickSubmitNewName={this.handleClickChangeName} onClickRemoveAvatar={this.handleClickRemoveAvatar} onChangeInputFile={this.handleChangeAvatarInput} onClickSubmitNewAvatar={this.handleClickChangeAvatarSubmitButton} />
        )}

        {(![ 'Authentication', 'Registration' ].includes(currentPage)) && (
          <Footer onClick={this.handleClickButtonFooter} />
        )}
    </div>
    );
  }
};
