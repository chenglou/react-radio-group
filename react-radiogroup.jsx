/**
* @jsx React.DOM
*/
(function (name, definition){
    if (typeof define === 'function'){ // AMD
        define(definition);
    } else if (typeof module !== 'undefined' && module.exports) { // Node.js
        module.exports = definition();
    } else { // Browser
        var theModule = definition(), global = this, old = global[name];
        theModule.noConflict = function () {
            global[name] = old;
            return theModule;
        };
        global[name] = theModule;
    }
})('RadioGroup', function () {

    // return the module's API
    return React.createClass({
        getInitialState: function() {
            // make sure all the child radio's have keys
            var i = 0;
            this.props.children = React.Children.map(this.props.children, function(child) {
                if(!child.props.key) {
                    var key = child.props.key || 'RadioGroup-' + i++,
                        newProps = {};
                    newProps.key = key;
                    return React.addons.cloneWithProps(child, newProps);
                }

                return child;
            }, this);

            return {
                checkedKey : this.getCheckedKeyForValue(this.props.value),
                value : this.props.value
            }
        },
        getCheckedKeyForValue: function(value) {
            var checkedKey;

            React.Children.forEach(this.props.children, function(child) {
                if(child.props.value == value) {
                    checkedKey = child.props.key;
                }
            });

            return checkedKey;
        },
        getValueForKey: function(key) {
            var value;

            React.Children.forEach(this.props.children, function(child) {
                if(child.props.key == key) {
                    value = child.props.value;
                }
            });

            return value;
        },
        getCheckedValue: function() {
            return this.state.value;
        },
        isChecked: function(key) {
            return (this.state && key == this.state.checkedKey);
        },
        onChange: function(key) {
            this.setState({checkedKey: key, value: this.getValueForKey(key) });
        },
        render: function () {
            var i = 0, children = React.Children.map(this.props.children, function(child) {
                var key = child.props.key || 'RadioGroup-' + i++,
                    newProps = {};

                newProps.key = key;
                newProps.onChange = this.onChange.bind(this, key);
                // DRY propagate the name property to the child radio
                newProps.name = this.props.name;
                newProps.checked = this.isChecked(key);
                newProps.isChecked = this.isChecked;
                newProps.required = this.props.required || 'false';

                return React.addons.cloneWithProps(child, newProps);
            }, this);

            return (
                <div onChange={this.props.onChange}>
                    {children}
                </div>
                );
        }
    });
});