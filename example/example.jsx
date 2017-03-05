'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SimpleRadioExample from 'components/SimpleRadioExample';
import CustomRadioExample from 'components/CustomRadioExample';
import CBWIE from 'components/CustomButtonWithInputExample';
import 'example.css';

const App = () => <div>
    <h1>Examples</h1>
    <SimpleRadioExample/>
    <CustomRadioExample/>
    <CBWIE/>
</div>;

ReactDOM.render(<App />, document.getElementById('content'));
