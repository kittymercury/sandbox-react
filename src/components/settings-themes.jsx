import React from 'react';

export default class SettingsThemes extends React.Component {
  render () {
    const onClickDarkTheme = this.props.onClickDarkTheme;
    const onClickLightTheme = this.props.onClickLightTheme;

    return (
      <div className="content settings-themes">
        <h5>Themes</h5>
        <ul className="sub-menu">
          <li onClick={onClickLightTheme}>Light</li>
          <li onClick={onClickDarkTheme}>Dark</li>
        </ul>
      </div>
    )
  }
}
