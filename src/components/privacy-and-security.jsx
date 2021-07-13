import React from 'react';

export default class PrivacyAndSecurity extends React.Component {

  handleChangeInputCheckbox = (e) => {
    this.props.onChangeStatus(e.target.checked);
  }

  render () {
    const onClickSubmit = this.props.onClickSubmit;
    const isStatusVisible = this.props.isStatusVisible;

    return (
      <div className="content privacy-and-security">
        <div>Show my status:
          <input
            type="checkbox"
            onChange={this.handleChangeInputCheckbox}
            checked={isStatusVisible}
          />
          <button onClick={onClickSubmit}>Submit</button>
        </div>
      </div>
    )
  }
}
