# [React](http://facebook.github.io/react/)-radio-group

This is your average radios group:

```html
<form>
  <input type="radio" name="fruit" value="apple">Apple
  <input type="radio" name="fruit" value="orange">Orange
  <input type="radio" name="fruit" value="watermelon">Watermelon
</form>
```

Repetitive, hard to manipulate and easily desynchronized.
Lift up the `name` and give it an initial checked value, and optionally remove the form tag:

```html
<RadioGroup name="fruit" value="orange">
  <input type="radio" value="apple">Apple
  <input type="radio" value="orange">Orange
  <input type="radio" value="watermelon">Watermelon
</RadioGroup>
```

Listen for changes, get the new value as intuitively as possible:

```html
<RadioGroup name="fruit" value="orange" ref="fruitsGroup" onChange={this.handleChange}>
// further...

this.refs.fruitsGroup.getCheckedValue(); // => whatever's currently checked
// handleChange is also passed the native onChange event, whose value
// resides in event.target.value (see example below)
```

That's it for the API! See below for a complete example.

## install

```sh
bower install react-radio-group
```

Or simply drop the script somewhere on your page (after React of course):

```html
<script src="path/to/react-radio-group.js"></script>
```

## Example

Demo's almost as long as the whole [source code](https://github.com/chenglou/react-radiogroup/blob/master/react-radiogroup.jsx).

```html
/**
* @jsx React.DOM
*/
var Demo = React.createClass({
  getInitialState: function() {
    return {value: 'celery'};
  },

  componentDidMount: function() {
    // change the selected radio to "Potato" in one second
    setTimeout(function() {
      this.setState({value: 'potato'});
    }.bind(this), 1000);
  },

  render: function() {
    // the radios can be arbitrarily deep. They will always be fetched and
    // attached the `name` attribute correctly. `value` is optional
    return (
      <RadioGroup
        name="veggy"
        value={this.state.value}
        ref="veggiesGroup"
        onChange={this.handleChange}
      >
        <div>
          <label>
            <input type="radio" value="celery"/>Celery
          </label>
          <label>
            <input type="radio" value="potato"/>Potato
          </label>
          <label>
            <input type="radio" value="broccoli"/>Broccoli
          </label>
        </div>
      </RadioGroup>
    );
  },

  handleChange: function(event) {
    // will return the currently selected radio's value, or null if none
    // alternatively, use the passed parameter `event`
    var selectedVeggy = this.refs.veggiesGroup.getCheckedValue();
    var sameVeggy = event.target.value;
  }
});

React.renderComponent(<Demo/>, document.body);
```

## License

MIT.
