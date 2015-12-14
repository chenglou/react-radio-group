import React, {PropTypes} from 'react';

function radio(name, selectedValue, onChange) {
  return React.createClass({
    render: function() {
      const optional = {};
      if(selectedValue !== undefined) {
        optional.checked = (this.props.value === selectedValue);
      }
      if(typeof onChange === 'function') {
        optional.onChange = onChange.bind(null, this.props.value);
      }

      return (
        <input
          {...this.props}
          type="radio"
          name={name}
          {...optional} />
      );
    }
  });
}

export default React.createClass({
  getValueLink: function(props) {
    return props.valueLink || {
      value: props.value,
      requestChange: props.onChange
    };	
  },
  
  propTypes: {
    name: PropTypes.string,
    selectedValue: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
    ]),
    onChange: PropTypes.func,
    children: PropTypes.func.isRequired,
  },

  render: function() {
    const {name, children} = this.props;
    const valueLink = this.getValueLink(this.props);
    const onChange = this.getValueLink(this.props).requestChange;
    const selectedValue = this.getValueLink(this.props).value;
    const renderedChildren = children(radio(name, selectedValue, onChange));
    return renderedChildren && React.Children.only(renderedChildren);
  }
});
