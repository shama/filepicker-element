# pickfile-element

An button for opening the file picker dialog and returning the files picked.

## Usage

```js
var pickfile = require('pickfile-element')

var element = pickfile('Pick a File', function (files) {
  console.log(files[0].name)
})

document.body.appendChild(element)
```
