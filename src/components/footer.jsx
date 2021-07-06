import React from 'react';

export default class Footer extends React.Component {
  render () {
    const handleClick = this.props.onClick;

    return (
      <div className="footer">
        <button onClick={handleClick('Contacts')}>Contacts</button>
        <button onClick={handleClick('Chats')}>Chats</button>
        <button onClick={handleClick('Settings')}>Settings</button>
      </div>
    )
  }
}
