var bel = require('bel')
var csjs = require('csjs')
var objectAssign = require('object-assign')

module.exports = function (opts, onpicked) {
  onpicked = onpicked || function () {}
  var input = bel`<input type="file" accept=${opts.accept} style=${{display: 'none'}} onchange=${function (e) {
    onpicked(e.target.files)
  }} />`

  // If supplied a custom element as the button
  if (opts && opts.nodeName && opts.nodeType) {
    opts.onclick = function (e) {
      e.preventDefault()
      input.click()
    }
    return render(opts)
  }

  if (typeof opts === 'string') opts = {label: opts}
  opts = objectAssign({
    label: 'Pick File',
    accept: null
  }, opts)

  return render(bel`<button onclick=${function () {
    input.click()
  }}>${opts.label}</button>`)

  function render (inner) {
    return bel`<div class=${styles.index}>
      ${inner}
      ${input}
    </div>`
  }
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
