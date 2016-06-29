# [React](http://facebook.github.io/react/)-radio-group

```
npm install react-radio-group
```

Then either `import {RadioGroup, Radio} from 'react-radio-group'` or add `node_modules/react-radio-group/umd/index.js` into your HTML file (exports the `RadioGroup` global which contains both, the RadioGroup and Radio component.).

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

Here's a better version (full example [here](https://github.com/chenglou/react-radio-group/blob/67a2bcdc7f3d0c8cb4d7762f82558d75c9592ea9/example/example.jsx))

```js
<RadioGroup name="fruit" selectedValue={this.state.selectedValue} onChange={this.handleChange}>
  <Radio value="apple" />Apple
  <Radio value="orange" />Orange
  <Radio value="watermelon" />Watermelon
</RadioGroup>
```

Repetitive fields are either lifted onto the `RadioGroup` wrapper or already implicitly set on the `Radio` component, which is a simple wrapper around the radio `input`.

## Formal API
#### &lt;RadioGroup />
Exposes [5 optional props](https://github.com/chenglou/react-radio-group/blob/67a2bcdc7f3d0c8cb4d7762f82558d75c9592ea9/index.jsx#L34-L46):
- `name: String`: what you'd normally put on the radio inputs themselves.
- `selectedValue: String | Number | Boolean`: the currently selected value. This will be used to compare against the values on the `Radio` components to select the right one.
- `onChange: Function`: will be passed the newly selected value.
- `Component: String | React Component`: defaults to `"div"`, defines what tag or component is used for rendering the `RadioGroup`
- `children: Node`: define your `Radio`s and any other components. Each `Radio` component (a thin wrapper around `input`) within a `RadioGroup` will have some fields like `type`, `name` and `checked` prefilled.

#### &lt;Radio />
Any prop you pass onto it will be transferred to the actual `input` under the hood. `Radio` components cannot be used outside a `RadioGroup`

## License

[MIT](./LICENSE)
