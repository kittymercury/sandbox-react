import React from 'react';

export default class PrivacyAndSecurity extends React.Component {
  render () {
    const onClick = this.props.onClickShowStatus;
    const onChange = this.props.onChangeShowStatus;
    const isStatusVisible = this.props.isStatusVisible;

    return (
      <div className="content privacy-and-security">
        <div>Don't show my status:
          <input
            type="checkbox"
            name="enabled"
            onChange={onChange}
            {isStatusVisible}
          />
          <button onClick={onClick}>Submit</button>
        </div>
      </div>
    )
  }
}
