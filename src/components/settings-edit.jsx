import React from 'react';

export default class SettingsEdit extends React.Component {
  render () {
    const changeNameInput = this.props.changeNameInput;
    const users = this.props.users;
    const currentUser = this.props.currentUser;
    const onChangeName = this.props.onChangeName;
    const onClickSubmitNewName = this.props.onClickSubmitNewName;

    const onClickRemoveAvatar = this.props.onClickRemoveAvatar;
    const onChangeInputFile = this.props.onChangeInputFile;
    const onClickSubmitNewAvatar = this.props.onClickSubmitNewAvatar;

    return (
      <div className="edit-profile content">
        <div className="change-name">
          <h4>Change name</h4>
          <input type="text" value={changeNameInput} placeholder={users.find((user) => user.id === currentUser).name} onChange={onChangeName} />
          <button className="submit" onClick={onClickSubmitNewName}>Submit</button>
        </div>

        <div className="change-avatar">
          <h4>Change avatar</h4>
          <div>
            <button onClick={onClickRemoveAvatar}>Remove avatar</button>
          </div>
          <div>
            <input type="file" name="avatar" accept="image/png, image/jpeg, image/jpg" onChange={onChangeInputFile}/>
            <p>
              <button onClick={onClickSubmitNewAvatar}>Submit</button>
            </p>
          </div>
        </div>
      </div>
    )
  }
}
