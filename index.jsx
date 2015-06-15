'use strict';

import React, {PropTypes} from 'react';

function radio(name, selectedValue, onChange) {
  return React.createClass({
    render: function() {
      return (
        <input
          {...this.props}
          type="radio"
          name={name}
          checked={this.props.value === selectedValue}
          onChange={onChange.bind(null, this.props.value)} />
      );
    }
  });
}

export default React.createClass({
  propTypes: {
    name: PropTypes.string,
    selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    children: PropTypes.func,
  },

  render: function() {
    let {name, selectedValue, onChange, children} = this.props;
    return (
      <div>
        {children && children(radio(name, selectedValue, onChange))}
      </div>
    );
  }
});
