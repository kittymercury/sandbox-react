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
import PrivacyAndSecurity from './privacy-and-security';

import cornersImg from './tg-imgs/corners.jpeg';
import jesseImg from './tg-imgs/jesse.jpg';
import walterImg from './tg-imgs/walter.jpeg';
import freddieImg from './tg-imgs/freddie.jpeg';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: 7,
      currentPage: 'Messages',
      currentPageState: {},
      currentChat: { id: 1 },
      userProfile: '',
      theme: 'light',

      isEditMessages: false,
      isSearch: false,

      users: [
        { id: 1, name: 'Cut Corners', status: 'online', contactNumber: '+380996661488', avatar: 'corners.jpeg', login: '1', password: '1' },
        { id: 2, name: 'Jesse Pinkman', contactNumber: '+380996261488', status: 'online', avatar: 'jesse.jpg' },
        { id: 3, name: 'Walter White', status: 'offline' ,contactNumber: '+380996643488', avatar: 'walter.jpeg' },
        { id: 6, name: 'Olga Tkachuk', status: 'offline', contactNumber: '+380996632488', avatar: '' },
        { id: 7, name: 'Mercury', status: 'online', contactNumber: '+380956543488', avatar: 'freddie.jpeg', login: '2', password: '2' },
      ],

      chats: [
        { id: 1, participants: [ 7, 1 ] },
        { id: 2, participants: [ 7, 6 ] },
        { id: 3, participants: [ 7, 3 ] },
      ],
    };
  }

  changePage = (page, currentPageState = {}) => {
    this.setState({ currentPage: page, currentPageState, isSearch: false })
  }

  // handlers for Header

  handleClickEditMessages = (condition) => {
    this.setState({ isEditMessages: condition })
  }

  handleClickSearch = (condition) => {
    this.setState({ isSearch: condition })
  }
  // ---------------------------------------

  // handlers for Contacts

  handleClickContact = (user) => {
    const currentUser = this.state.currentUser;
    const currentPage = this.state.currentPage;
    const currentChat = this.state.currentChat;
    const chats = this.state.chats;
    const users = this.state.users;

    const userToChat = users.find((u) => u.id === user.id).id;
    const isChatExist = chats.find((chat) => chat.participants.includes(userToChat) === true);
    if (isChatExist) return;

    const newChat = {
      id: +new Date(),
      name: user.name,
      participants: [ currentUser, user.id ]
    }

    const newChats = chats.concat(newChat);

    this.changePage('Messages');
    this.setState({ currentChat: newChat, chats: newChats })
  }

  handleClickOpenContactInfo = (user) => {
    const users = this.state.users;
    const userClicked = users.find((u) => u.id === user.id);

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

  handleClickDeleteChat = (chat) => {
    const chats = this.state.chats;
    const filteredChats = chats.filter((c) => c !== chat);

    this.setState({ chats: filteredChats })
  }

  // ----------------------------------------------------


  //  Themes

  handleClickTheme = (theme) => {
    this.setState({ theme })
  }

  // Authentication

  handleClickLogIn = (state) => {
    const users = this.state.users;
    const currentUser = users.find((user) => {
      if ((user.login === state.login) && (user.password === state.password)) {
        return true;
      } else {
        return false;
      }
    });
    if (currentUser) {
      this.changePage('Chats');
      this.setState({
        currentUser: currentUser.id,
      });
    } else {
      alert('Wrong credentials');
    }
  }

  handleClickSignUp = (state) => {
    const users = this.state.users;
    const currentUser = this.state.currentUser;

    const newUser = {
      id: +new Date(),
      name: state.name,
      status: 'online',
      avatar: state.avatar,
      login: state.login,
      password: state.password,
    }

    const newUsers = users.concat(newUser);

    this.changePage('Chats');
    this.setState({ currentUser: newUser.id, users: newUsers })
  }

  // -----------------------------------

  // Registration

  handleSubmitUser = (user) => {
    const currentUser = this.state.currentUser;
    const users = this.state.users;

    const newUsers = users.map((u) => {
      if (u.id === currentUser) {
        return { ...u, ...user };
      } else {
        return u;
      }
    })

    this.setState({ users: newUsers })
  }

  // -------------------------------------------------------

  render() {
    const currentUser = this.state.currentUser;
    const currentPage = this.state.currentPage;
    const currentChat = this.state.currentChat;
    const userProfile = this.state.userProfile;
    const theme = this.state.theme;
    const isEditMessages = this.state.isEditMessages;
    const isSearch = this.state.isSearch;

    const users = this.state.users;
    const chats = this.state.chats;

    const user = users.find((user) => user.id === currentUser);

    return (
      <div className={`chat ${theme}`}>
        <Header
          currentPage={currentPage}
          onClickCreateChat={() => this.changePage('Contacts')}
          onClickEditMessages={this.handleClickEditMessages}
          onClickSearch={this.handleClickSearch}
          isEditMessages={isEditMessages}
          isSearch={isSearch}
        />

        {(currentPage === 'Authentication') && (
          <Authentication
            onClickLogIn={this.handleClickLogIn}
            onClickOpenRegistration={() => this.changePage('Registration')}
          />
        )}

        {(currentPage === 'Registration') && (
          <Registration
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
            isSearch={isSearch}
            users={users}
            chats={chats}
          />
        )}

        {(currentPage === 'Settings') && (
          <Settings
            user={user}
            onClickEditProfile={() => this.changePage('Edit profile')}
            onClickThemes={() => this.changePage('Themes')}
            onClickPrivacyAndSecurity={() => this.changePage('Privacy and security')}
          />
        )}

        {(currentPage === 'Messages') && (
          <Messages
            users={users}
            messages={this.state.currentPageState.messages}
            currentChat={currentChat}
            currentUser={currentUser}
            isEditMessages={isEditMessages}
            isSearch={isSearch}
            changePage={this.changePage}
          />
        )}

        {(currentPage === 'Themes') && (
          <SettingsThemes onClick={this.handleClickTheme} />
        )}

        {(currentPage === 'Edit profile') && (
          <SettingsEdit
            user={user}
            onSubmitUser={this.handleSubmitUser}
          />
        )}

        {(currentPage === 'Privacy and security') &&
          <PrivacyAndSecurity />}

        {(![ 'Authentication', 'Registration' ].includes(currentPage)) && (
          <Footer onButtonClick={(page) => this.changePage(page)} />
        )}
    </div>
    );
  }
};
