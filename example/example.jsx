import React from 'react';
import RadioGroup from '../index.jsx';

const App = React.createClass({
  getInitialState: function () {
    return {
      selectedValue: 'apple',
    };
  },

  handleChange: function (value) {
    this.setState({
      selectedValue: value,
    });
  },

  render: function () {
    return (
      <div>
        <RadioGroup
          name="fruit"
          selectedValue={this.state.selectedValue}
          onChange={this.handleChange}>
          {radio => (
            <div>
              <label>
                {radio({value: 'apple'})}Apple
              </label>
              <label>
                {radio({value: 'orange'})}Orange
              </label>
              <label>
                {radio({value: 'watermelon'})}Watermelon
              </label>
            </div>
          )}
        </RadioGroup>
      </div>
    );
  }
});

React.render(<App />, document.getElementById('content'));
