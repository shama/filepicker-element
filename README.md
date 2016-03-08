# filepicker-element

An button for opening the file picker dialog and returning the files picked.

## Usage

```js
var filepicker = require('filepicker-element')

var element = filepicker('Pick a File', function (files) {
  console.log(files[0].name)
})

document.body.appendChild(element)
```

# license
(c) 2016 Kyle Robinson Young. MIT License
