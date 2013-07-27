/**
* @jsx React.DOM
*/

var RadioGroup = React.createClass({
  componentDidMount: function() {
    this.setRadioNames();
    this.setCheckedRadio();
  },

  componentDidUpdate: function() {
    this.setRadioNames();
    this.setCheckedRadio();
  },

  render: function() {
    return this.transferPropsTo(
      <div onChange={this.handleChange}>
        {this.props.children}
      </div>
    );
  },

  setRadioNames: function() {
    // stay DRY and don't put the same `name` on all radios manually. Put it on
    // the tag and it'll be done here
    var $radios = this.getRadios();
    for (var i = 0, length = $radios.length; i < length; i++) {
      $radios[i].setAttribute('name', this.props.name);
    }
  },

  getRadios: function() {
    return this.getDOMNode().querySelectorAll('input[type="radio"]');
  },

  setCheckedRadio: function(forcedValue) {
    // by default, check the radio whose value is provided by checkValue from
    // parent. This method also doubles as a hard radio setter if forcedValue is
    // passed (see `handleChange`). In this case, since DOM sadly doesn't update
    // the markup of the radio by adding the `checked` attribute upon clicking,
    // we do it manually here. The other solution would be setting a state and
    // render accordingly, but less state = better
    var valueToChangeTo = forcedValue ? forcedValue : this.props.value;
    var $radios = this.getRadios();
    for (var i = 0, length = $radios.length; i < length; i++) {
      var $radio = $radios[i];
      if ($radio.value === valueToChangeTo) {
        $radio.checked = true;
      }
    }
  },

  getCheckedValue: function() {
    var $radios = this.getRadios();
    for (var i = 0, length = $radios.length; i < length; i++) {
      if ($radios[i].checked) {
        return $radios[i].value;
      }
    }

    return null;
  },

  handleChange: function(event) {
    this.setCheckedRadio(event.target.value);
    this.props.onChange && this.props.onChange();
  }
});

var Demo = React.createClass({
  getInitialState: function() {
    return {val: 'apple'};
  },
  componentDidMount: function() {
    setInterval(function() {
      this.setState({val: Math.random() > .5 ? 'orange' : 'watermelon'}, function() {
        console.log(this.refs.fruitsGroup.getCheckedValue(), this.state.val);
      }.bind(this));
    }.bind(this), 1000000);
  },

  render: function() {
    return (
      <div>

        <RadioGroup name="fruits" onChange={this.moreDemo} value={this.state.val} ref="fruitsGroup">
          <input type="radio" value="apple"/>Apple
          <input type="radio" value="orange"/>Orange
          <input type="radio" value="watermelon"/>Watermelon
        </RadioGroup>

        <RadioGroup name="veggies" onChange={this.moreDemo} ref="veggiesGroup">
          <label>
            <input type="radio" value="celery"/>Celery
          </label>
          <label>
            <input type="radio" value="potato"/>Potato
          </label>
          <label>
            <input type="radio" value="broccoli"/>Broccoli
          </label>
        </RadioGroup>

        <RadioGroup name="people" onChange={this.moreDemo} value="SJ" ref="peopleGroup">
          <div>
            <input type="radio" value="SJ"/>Steve Jobs
            <input type="radio" value="MZ"/>Mark Zukerberg
            <input type="radio" value="SB"/>Steve Ballmer
          </div>
        </RadioGroup>

      </div>
    );
  },

  moreDemo: function() {
    var selectedFruit = this.refs.fruitsGroup.getCheckedValue();
    var selectedVeggy = this.refs.veggiesGroup.getCheckedValue();
    var selectedPerson = this.refs.peopleGroup.getCheckedValue();
    console.log(selectedFruit, selectedVeggy, selectedPerson);
  }
});

var demo = <Demo/>;

React.renderComponent(demo, document.body)

