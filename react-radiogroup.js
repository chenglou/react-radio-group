/**
* @jsx React.DOM
*/

var RadioGroup = React.createClass({displayName: 'RadioGroup',
  componentDidMount: function() {
    this.setCheckedRadio();
  },

  componentDidUpdate: function() {
    this.setCheckedRadio();
  },

  render: function() {
    this.getRadios().forEach(function(radio) {
      radio.props.name = this.props.name;
    }, this);

    return this.transferPropsTo(
      React.DOM.div( {onChange:this.handleChange}, 
        this.props.children
      )
    );
  },

  getRadios: function() {
    var children = this.props.children;
    if (!Array.isArray(children)) {
      // single child isn't returned as an array
      children = [children];
    }

    var radios = children.map(function(child) {
      return this.extractNestedRadioFrom(child);
    }, this)

    return this.flatten(radios, []);
  },

  extractNestedRadioFrom: function(node) {
    if (!node.props) {
      return [];
    }

    if (node.props.type === 'radio') {
      return node;
    }

    if (node.props.children) {
      return node.props.children.map(function(child) {
        return this.extractNestedRadioFrom(child);
      }, this);
    }
  },

  flatten: function(array, output) {
    array.forEach(function(item) {
      if (Array.isArray(item)) {
        this.flatten(item, output);
      } else {
        output.push(item);
      }
    }, this);

    return output;
  },

  setCheckedRadio: function(forcedValue) {
    // by default, check the radio whose value is provided by checkValue from
    // parent. This method also doubles as a hard radio setter if forcedValue is
    // passed (see `handleChange`). In this case, since DOM sadly doesn't update
    // the markup of the radio by adding the `checked` attribute upon clicking,
    // we do it manually here. The other solution would be setting a state and
    // render accordingly, but less state = better
    var value = forcedValue ? forcedValue : this.props.checkedValue;
    this.getRadios().forEach(function(radio) {
      var $radio = radio.getDOMNode();
      if ($radio.value === value) {
        $radio.setAttribute('checked', 'true');
      } else {
        $radio.removeAttribute('checked');
      }
    }, this);
  },

  getCheckedValue: function() {
    var checkedRadio = this.getRadios().filter(function(radio) {
      return radio.getDOMNode().getAttribute('checked') === 'true';
    });

    return checkedRadio[0] ? checkedRadio[0].props.value : null;
  },

  handleChange: function(event) {
    this.setCheckedRadio(event.target.value);
    this.props.onChange && this.props.onChange();
  }
});

// var Demo = React.createClass({
//   render: function() {
//     return (
//       <div>

//         <RadioGroup name="fruits" onChange={this.moreDemo} checkedValue="orange" ref="fruitsGroup">
//           <input type="radio" value="apple"/>Apple
//           <input type="radio" value="orange"/>Orange
//           <input type="radio" value="watermelon"/>Watermelon
//         </RadioGroup>

//         <RadioGroup name="veggies" onChange={this.moreDemo} ref="veggiesGroup">
//           <label>
//             <input type="radio" value="celery"/>Celery
//           </label>
//           <label>
//             <input type="radio" value="orange"/>Potato
//           </label>
//           <label>
//             <input type="radio" value="broccoli"/>Broccoli
//           </label>
//         </RadioGroup>


//         <RadioGroup name="people" onChange={this.moreDemo} checkedValue="SJ" ref="peopleGroup">
//           <div>
//             <input type="radio" value="SJ"/>Steve Jobs
//             <input type="radio" value="MZ"/>Mark Zukerberg
//             <input type="radio" value="SB"/>Steve Ballmer
//           </div>
//         </RadioGroup>

//       </div>
//     );
//   },

//   moreDemo: function() {
//     var selectedFruit = this.refs.fruitsGroup.getCheckedValue();
//     var selectedVeggy = this.refs.veggiesGroup.getCheckedValue();
//     var selectedPerson = this.refs.peopleGroup.getCheckedValue();
//     console.log(selectedFruit, selectedVeggy, selectedPerson);
//   }
// });

// var demo = <Demo/>;

// React.renderComponent(demo, document.body)
