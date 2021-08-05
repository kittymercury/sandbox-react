import React from 'react';
import './styles.css';

export default class InputWrapper extends React.Component {

  renderInputButton = (value) => {
    const { onSubmit, onCancel } = this.props;

    if (value) {
      return (
        <button onClick={this.props.onSubmit}>
          <i className="fas fa-check"></i>
        </button>
      )
    } else {
      return (
        <button onClick={this.props.onCancel}>
          <i className="fas fa-times"></i>
        </button>
      )
    }
  }

  render () {
    const { onChange, value } = this.props;

    return (
      <div className="input-wrapper">
        <input type="text" autoFocus onChange={onChange} value={value} />
        {this.renderInputButton(value)}
      </div>
    )
  }
}
