import React from 'react';

export default class SettingsThemes extends React.Component {
  render () {
    return (
      <div className="content settings-themes">
        <h5>Change theme</h5>
        <ul className="theme-menu">
          <li onClick={() => this.props.onClick('light')}>Light</li>
          <li onClick={() => this.props.onClick('dark')}>Dark</li>
        </ul>
      </div>
    )
  }
}
