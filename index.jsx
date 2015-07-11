import React, {PropTypes} from 'react';
import memoize from 'lodash.memoize';


const radio = memoize(({name, selectedValue, onChange, callback}) => {
  return React.createClass({
    getInitialState() {
      return {name, selectedValue, onChange};
    },

    componentWillMount() {
      callback(newState => this.setState(newState));
    },

    render() {
      return (
        <input
          {...this.props}
          type="radio"
          name={this.state.name}
          checked={this.props.value === this.state.selectedValue}
          onChange={() => this.state.onChange(this.props.value)} />
      );
    }
  });
});


export default React.createClass({
  propTypes: {
    name: PropTypes.string,
    selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    children: PropTypes.func,
  },

  componentWillMount() {
    this.callbacks = [];
  },

  componentWillUpdate({name, selectedValue, onChange}) {
    if (this.callbacks.length) {
      this.callbacks.forEach(func => func({name, selectedValue, onChange}));
    }
  },

  render() {
    const {name, selectedValue, onChange, children} = this.props;
    return (
      <div>
        {children && children(radio({
          name, selectedValue, onChange,
          callback: func => this.callbacks.push(func)
        }))}
      </div>
    );
  }
});
