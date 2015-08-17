'use strict';

import React from 'react';
import RadioGroup from '../index.jsx';

let App = React.createClass({
  getInitialState() {
    return {selectedValue: 'apple'};
  },

  handleChange(value) {
    this.setState({selectedValue: value});
  },

  render() {
    return (
      <RadioGroup
        name="fruit"
        selectedValue={this.state.selectedValue}
        onChange={this.handleChange}>
        {Radio => (
          <div>
            <label>
              <Radio value="apple" />Apple
            </label>
            <label>
              <Radio value="orange" />Orange
            </label>
            <label>
              <Radio value="watermelon" />Watermelon
            </label>
          </div>
        )}
      </RadioGroup>
    );
  }
});

React.render(<App />, document.getElementById('content'));
