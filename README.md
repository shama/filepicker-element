# filepicker-element

An button for opening the file picker dialog and returning the files picked.

![example](https://raw.githubusercontent.com/shama/filepicker-element/master/example/example.gif)

## Usage

```js
var filepicker = require('filepicker-element')

var element = filepicker('Pick a File', function (files) {
  console.log(files[0].name)
})

document.body.appendChild(element)
```

Set the types of files it accepts:

```js
var element = filepicker({
  accept: '.png,.jpg',
  label: 'Select File'
}, function (files) {
  console.log(files[0].name)
})
```

Or supply your own custom element as a button:

```js
var bel = require('bel')
var filepicker = require('filepicker-element')

var pick = bel`<a href="#">PICK YER FILE!</a>`
var element = filepicker(pick, function (files) {
  console.log(files)
})
```

# license
(c) 2016 Kyle Robinson Young. MIT License
