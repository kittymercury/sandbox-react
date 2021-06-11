import React from 'react';

export default class Keyboard extends React.Component {
  render () {

    return (
      <div className="keyboard">

        <div className="keyboard-line">
          <div className="button clear">C</div>
          <div className="button backspace">←</div>
        </div>

        <div className="keyboard-line">
          <div className="button number">1</div>
          <div className="button number">2</div>
          <div className="button number">3</div>
          <div className="button operator">+</div>
        </div>

        <div className="keyboard-line">
          <div className="button number">4</div>
          <div className="button number">5</div>
          <div className="button number">6</div>
          <div className="button operator">-</div>
        </div>

        <div className="keyboard-line">
          <div className="button number">7</div>
          <div className="button number">8</div>
          <div className="button number">9</div>
          <div className="button operator">*</div>
        </div>

        <div class="keyboard-line">
          <div class="button number">.</div>
          <div class="button number">0</div>
          <div class="button result">=</div>
          <div class="button operator">/</div>
        </div>
      </div>
    )
  }
}
