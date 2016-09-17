var visualize = require('./')

var random = require('crypto').randomBytes

document.body.appendChild(visualize(random(32), 256))
document.body.appendChild(visualize(new Buffer('the quick brown fox jumps over the lazy dog'), 256))
document.body.appendChild(visualize(new Buffer('HELLO WORLD'), 256))

