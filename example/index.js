/* global FileReader */
var pickfile = require('../index.js')
var bel = require('bel')

function render (selected, contents) {
  return bel`<div>
    ${pickfile('Pick a file', filepicked)}
    <h3>Selected File: ${selected || 'none'}</h3>
    <textarea style=${{width: '100%', height: 500}}>${contents || ''}</textarea>
  </div>`
}

function filepicked (files) {
  var file = files[0]
  var reader = new FileReader()
  reader.onload = function (e) {
    var contents = e.target.result
    app.update(render(file.name, contents))
  }
  reader.readAsBinaryString(file)
}

var app = render()
document.body.appendChild(app)
