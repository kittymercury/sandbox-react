import React from 'react';

export default class Footer extends React.Component {
  render () {
    return (
      <div className="footer">
        <button onClick={() => this.props.onButtonClick('Contacts')}>Contacts</button>
        <button onClick={() => this.props.onButtonClick('Chats')}>Chats</button>
        <button onClick={() => this.props.onButtonClick('Settings')}>Settings</button>
      </div>
    )
  }
}
