# [React](http://facebook.github.io/react/)-radio-group

```
npm install react-radio-group
```

Then either `require('react-radio-group')` or add `node_modules/react-radio-group/lib/index.js` into your HTML file (exports the `RadioGroup` global).

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

Here's a better version (full example [here](https://github.com/chenglou/react-radio-group/blob/5019ce724e4bb8c9aca35c11c20f7800995c2bcb/example/example.jsx))

```js
<RadioGroup name="fruit" selectedValue={this.state.selectedValue} onChange={this.handleChange}>
  {Radio => (
    <div>
      <Radio value="apple" />Apple
      <Radio value="orange" />Orange
      <Radio value="watermelon" />Watermelon
    </div>
  )}
</RadioGroup>
```

Repetitive fields are either lifted onto the `RadioGroup` wrapper or already implicitly set on the `Radio` component, which is a simple wrapper around the radio `input`.

## Formal API
#### &lt;RadioGroup />
Exposes [4 optional props](https://github.com/chenglou/react-radio-group/blob/7a9b0fb4c82dd70d09e01ca6dcc64a1194d7219d/index.jsx#L23-L26):
- `name: String`: what you'd normally put on the radio inputs themselves.
- `selectedValue: String | Number`: the currently selected value. This will be used to compare against the values on the `Radio` components to select the right one.
- `onChange: Function`: will be passed the newly selected value.
- `children: Function`: will be passed a `Radio` component (a thin wrapper around `input`) some fields like `type`, `name` and `checked` already set.

#### &lt;Radio />
(Since you're getting that as the argument of your children function, you could have named it anything you wanted really.) Any prop you pass onto it will be transferred to the actual `input` under the hood.

## License

[MIT](./LICENSE)
