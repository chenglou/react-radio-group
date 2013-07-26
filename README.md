# [React](http://facebook.github.io/react/)-radiogroup

README under construction! Please come back later =)



```html
<RadioGroup name="fruits" checkedValue="orange" ref="radioGroup">
  <input type="radio" value="apple">Apple
  <input type="radio" value="orange">Orange
  <input type="radio" value="watermelon">Watermelon
</RadioGroup>
```

Makes you wonder why this isn't in DOM in the first place.

Now wasn't that easy? Here's how you can style the tree (also check out [index.css](https://github.com/chenglou/react-treeview/blob/master/index.css), it's so short it didn't warrant a minified version):

```
whole tree is a ul.treeview

div.treenode-arrow ->   ▾ Apple              <- div.treenode-item    
                            FileMaker                        whole node is
                            Braeburn Capital                 a li.treenode
```

## install

```sh
bower install react-treeview
```

Or simply drop the script somewhere on your page (after React of course):

```html
<script src="path/to/react-treeview.js"></script>
```

And the CSS file:

```html
<link rel="stylesheet" type="text/css" href="path/to/index.css">
```

## API

(This README uses the [JSX](http://facebook.github.io/react/docs/jsx-in-depth.html) syntax. If you prefer the JavaScript version, try the [JSX Compiler](http://facebook.github.io/react/jsx-compiler.html) any time.)

#### &lt;TreeView />
The tag for declaring the tree view. A self-closing tag.

#### source
The only attribute. It takes an array with the following format (see the example below for a use case):

```js
[
  {
    displayNode: markupHere,
    initiallyCollapsed: booleanHere,
    canToggle: booleanHere,
    children: [moreObjectsHere]
  },
  {
    displayNode: markupHere,
    initiallyCollapsed: booleanHere,
    canToggle: booleanHere,
    children: [moreObjectsHere]
  },
  // more...
];
```

Where, inside each object of the array:
- `displayNode` is the only required key. Its value could be any valid React node (a string won't do), therefore conferring to the tree view an extreme flexibility ([hardness its full power here](https://github.com/chenglou/react-treeview/tree/master/examples/integration.js)), such as custom styling, data attachment, nested components, etc.

- `initiallyCollapsed` defaults to false. Setting it to true renders the tree with that node's children collapsed.

- `canToggle` defaults to true. This lets the user expand/collapse the node. This is the only state in the tree; disabling it effectively renders this whole component stateless, which might be desirable if you want full control from a parent component.

- `children` is an array of more nodes, taking the exact format as the whole outside array. A tree can be arbitrarily deep.

## Example


## License

MIT.
