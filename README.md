# [React](http://facebook.github.io/react/)-custom-radio

This is fork of [this awesome repository](https://github.com/chenglou/react-radio-group).

```
npm install react-custom-radio --save
```

Then either `import {RadioGroup, Radio} from 'react-radio-group'` or add `node_modules/react-radio-group/umd/index.js` into your HTML file (exports the `RadioGroup` global which contains: RadioGroup, Radio and RadioButton components.).

## What This Solves
This is your average radio buttons group:

```js
<form>
  <input type="radio" name="fruit" value="apple" />Apple
  <input type="radio" name="fruit" value="orange" />Orange
  <input type="radio" name="fruit" value="watermelon" />Watermelon
</form>
```

A few problems:
- Repetitive fields (`name`, `type`, `checked`, `onChange`).
- Hard to set the checked value. You need to put e.g. `checked={'apple' === this.state.selectedFruitName}` on every input.
- Hard to retrieve the selected value.

Here's a better version (full example [here](example/example.jsx))

```js
<RadioGroup name="fruit" selectedValue={this.state.selectedValue} onChange={this.handleChange}>
  <Radio value="apple" />Apple
  <Radio value="orange" />Orange
  <Radio value="watermelon" />Watermelon
</RadioGroup>
```

Repetitive fields are either lifted onto the `RadioGroup` wrapper or already implicitly set on the `Radio` component, which is a simple wrapper around the radio `input`.

## Customize your radio with \<button> elements
This library also provide simple interface to customize your buttons with:
```js
<RadioGroup
    name="car"
    selectedValue={this.state.selectedCar}
    onChange={this.handleCarChange}
>
    <RadioButton value="BMW" className="radio-button">
        BMW
    </RadioButton>
    <RadioButton value="Mercedes" className="radio-button">
        Mercedes-Benz
    </RadioButton>
    <RadioButton value="Porsche" className="radio-button">
        Porsche
    </RadioButton>
</RadioGroup>
```
This example will create few `<button>` elements and all of them will work as default radio elements.
If you want to use `<input>` elements both with `<button>` you will need to provide `useHiddenInput` to `RadioButton` component.
  
For details see [example](example/components/CustomButtonWithInputExample.js)


## Formal API
#### &lt;RadioGroup />
Exposes [5 optional props](src/components/RadioGroup.js#L13-L27):
- `name: String`: what you'd normally put on the radio inputs themselves.
- `selectedValue: String | Number | Boolean`: the currently selected value. This will be used to compare against the values on the `Radio` components to select the right one.
- `onChange: Function`: will be passed the newly selected value.
- `Component: String | React Component`: defaults to `"div"`, defines what tag or component is used for rendering the `RadioGroup`
- `children: Node`: define your `Radio`s and any other components. Each `Radio` component (a thin wrapper around `input`) within a `RadioGroup` will have some fields like `type`, `name` and `checked` prefilled.

#### &lt;Radio />
Any prop you pass onto it will be transferred to the actual `input` under the hood. `Radio` components cannot be used outside a `RadioGroup`

#### &lt;RadioButton />
Exposes [3 optional props](src/components/RadioButton.js#L17-L27):
- `useHiddenInput: Boolean`: if you need to use input
- `className: String`: base class name for button. If current button is active `active` class will be added to value of this prop (default - empty)
- `type`: type of button element. Default - `button`  
Any other prop you pass onto it will be transferred to actual `button` under the hood. `RadioButton` components cannot be used outside a `RadioGroup`.

## License

[MIT](./LICENSE)
