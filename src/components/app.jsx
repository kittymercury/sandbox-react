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
      currentPageState: {},
      currentChat: '',
      userProfile: '',
      isEditMessages: false,
      theme: 'light',
      changeNameInput: '',
      avatarChangeInput: '',
      loginInputValueAuthentication: '',
      passwordInputValueAuthentication: '',
      loginInputValueRegistration: '',
      passwordInputValueRegistration: '',
      nameInputValueRegistration: '',
      avatarInputValueRegistration: '',

      users: [
        { id: 1, name: 'Cut Corners', status: 'online', contactNumber: '+380996661488', avatar: cornersImg, login: '1', password: '1' },
        { id: 2, name: 'Jesse Pinkman', contactNumber: '+380996261488', status: 'online', avatar: jesseImg },
        { id: 3, name: 'Walter White', status: 'offline' ,contactNumber: '+380996643488', avatar: walterImg },
        { id: 6, name: 'Olga Tkachuk', status: 'offline', contactNumber: '+380996632488', avatar: noAvatar },
        { id: 7, name: 'Mercury', status: 'online', contactNumber: '+380956543488', avatar: freddieImg, login: '2', password: '2' },
      ],

      chats: [
        { id: 1, participants: [ 7, 1 ] },
        { id: 2, participants: [ 7, 6 ] },
        { id: 3, participants: [ 7, 3 ] },
      ],
    };
  }

  changePage = (page, currentPageState = {}) => {
    this.setState({ currentPage: page, currentPageState })
  }

  // handlers for Header

  handleClickEditMessages = (condition) => {
    this.setState({ isEditMessages: condition })
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

    this.changePage('Messages');
    this.setState({ currentChat: newChat, chats: newChats })
  }

  handleClickOpenContactInfo = (userContact) => {
    const users = this.state.users;
    const userClicked = users.find((user) => user.id === userContact.id);
    const currentPage = this.state.currentPage;
    const userProfile = this.state.userProfile;

    this.changePage('Contact info');
    this.setState({ userProfile: userClicked })
  }

  // -----------------------------------------

  // handlers for ContactInfo

  handleClickOpenChat = (chat) => {
    this.changePage('Messages');

    if (chat) {
      this.setState({ currentChat: chat })
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

      this.setState({ currentChat: newChat, chats: newChats })
    }

  }

  // ---------------------------------------

  // handlers for Chats

  handleClickChat = (chat) => {
    const currentPageState = this.state.currentPageState;

    this.setState({ currentChat: chat });

    if (currentPageState.messageToForward) {
      const message = {
        id: +new Date(),
        userId: this.state.currentUser,
        chatId: chat.id,
        time: new Date().toLocaleTimeString(),
        forward: currentPageState.messageToForward
      };
      const newMessages = currentPageState.messages.concat(message);

      this.changePage('Messages', { messages: newMessages });
    } else {
      this.changePage('Messages');
    }
  }

  handleClickDeleteChat = (chatItem) => {
    const chats = this.state.chats;
    const filteredChats = chats.filter((chat) => chat !== chatItem);

    this.setState({ chats: filteredChats })
  }

  // ----------------------------------------------------


  // handlers for Settings

  handleClickTheme = (theme) => {
    this.setState({ theme })
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
      this.changePage('Chats');
      this.setState({
        currentUser: currentUser.id,
        loginInputValueAuthentication: '',
        passwordInputValueAuthentication: ''
      });
    } else {
      alert('Wrong credentials');
    }
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

    this.changePage('Chats');
    this.setState({ currentUser: newUser.id, users: newUsers })
  }

  // -------------------------------------------------------

  render() {
    const currentUser = this.state.currentUser;
    const currentPage = this.state.currentPage;
    const currentChat = this.state.currentChat;
    const userProfile = this.state.userProfile;
    const theme = this.state.theme;
    const changeNameInput = this.state.changeNameInput;
    const loginInputValueAuthentication = this.state.loginInputValueAuthentication;
    const passwordInputValueAuthentication = this.state.passwordInputValueAuthentication;
    const avatarInputValueRegistration = this.state.avatarInputValueRegistration;
    const loginInputValueRegistration = this.state.loginInputValueRegistration;
    const passwordInputValueRegistration = this.state.passwordInputValueRegistration;
    const nameInputValueRegistration = this.state.nameInputValueRegistration;
    const isEditMessages = this.state.isEditMessages;

    const users = this.state.users;
    const chats = this.state.chats;

    return (
      <div className={`chat ${theme}`}>
        <Header
          currentPage={currentPage}
          onClickCreateChat={() => this.changePage('Contacts')}
          onClickEditMessages={this.handleClickEditMessages}
          isEditMessages={isEditMessages}
        />

        {(currentPage === 'Authentication') && (
          <Authentication
            loginInputValueAuthentication={loginInputValueAuthentication}
            onChangeLoginAuthentication={this.handleChangeLoginAuthentication}
            passwordInputValueAuthentication={passwordInputValueAuthentication}
            onChangePasswordAuthentication={this.handleChangePasswordAuthentication}
            onClickLogIn={this.handleClickLogIn}
            onClickOpenRegistration={() => this.changePage('Registration')}
          />
        )}

        {(currentPage === 'Registration') && (
          <Registration
            loginInputValueRegistration={loginInputValueRegistration}
            onChangeLoginRegistration={this.handleChangeLoginRegistration}
            passwordInputValueRegistration={passwordInputValueRegistration}
            onChangePasswordRegistration={this.handleChangePasswordRegistration}
            nameInputValueRegistration={nameInputValueRegistration}
            onChangeNameRegistration={this.handleChangeNameRegistration}
            avatarInputValueRegistration={avatarInputValueRegistration}
            onChangeInputFileRegistration={this.handleChangeInputFileRegistration}
            onClickSignUp={this.handleClickSignUp}
          />
        )}

        {(currentPage === 'Contacts') && (
          <Contacts
            onClickUserName={this.handleClickContact}
            onClickAvatar={this.handleClickOpenContactInfo}
            users={users}
          />
        )}

        {(currentPage === 'Contact info') && (
          <ContactInfo
            users={users}
            userProfile={userProfile}
            onClickOpenChat={this.handleClickOpenChat}
            chats={chats}
          />
        )}

        {(currentPage === 'Chats') && (
          <Chats
            currentUser={currentUser}
            onClick={this.handleClickChat}
            onDelete={this.handleClickDeleteChat}
            users={users}
            chats={chats}
          />
        )}

        {(currentPage === 'Settings') && (
          <Settings
            users={users}
            currentUser={currentUser}
            onClickEditProfile={() => this.changePage('Edit profile')}
            onClickThemes={() => this.changePage('Themes')}
          />
        )}

        {(currentPage === 'Messages') && (
          <Messages
            users={users}
            messages={this.state.currentPageState.messages}
            currentChat={currentChat}
            currentUser={currentUser}
            isEditMessages={isEditMessages}
            changePage={this.changePage}
          />
        )}

        {(currentPage === 'Themes') && (
          <SettingsThemes onClick={this.handleClickTheme} />
        )}

        {(currentPage === 'Edit profile') && (
          <SettingsEdit
            changeNameInput={changeNameInput}
            users={users}
            currentUser={currentUser}
            onChangeName={this.handleChangeName}
            onClickSubmitNewName={this.handleClickChangeName}
            onClickRemoveAvatar={this.handleClickRemoveAvatar}
            onChangeInputFile={this.handleChangeAvatarInput}
            onClickSubmitNewAvatar={this.handleClickChangeAvatarSubmitButton}
          />
        )}

        {(![ 'Authentication', 'Registration' ].includes(currentPage)) && (
          <Footer onButtonClick={(page) => this.changePage(page)} />
        )}
    </div>
    );
  }
};
