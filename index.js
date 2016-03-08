var bel = require('bel')
var csjs = require('csjs')
var objectAssign = require('object-assign')

module.exports = function (opts, onpicked) {
  if (typeof opts === 'string') opts = {label: opts}
  opts = objectAssign({
    label: 'Pick File',
    accept: null
  }, opts)
  onpicked = onpicked || function () {}
  var input = bel`<input type="file" accept=${opts.accept} style=${{display: 'none'}} onchange=${function (e) {
    onpicked(e.target.files)
  }} />`
  return bel`<div class=${styles.index}>
    <button onclick=${function () {
      input.click()
    }}>${opts.label}</button>
    ${input}
  </div>`
}

var styles = module.exports.styles = csjs`
.index button {
  border: none;
  font-size: 1rem;
  padding: .5rem 1rem;
  cursor: pointer;
  color: #fff;
  background-color: #2ecc71;
  border-radius: 10px;
}
.index button:hover {
  background-color: #27ae60;
}
.index button:focus {
  outline: none;
}
`
