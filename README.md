# visualize-buffer

generate a visualization of a buffer.
for example, to show a public key as a picture.

will generate randomly colored grid.

## example

```
var visualize = require('visualize-buffer')
var random = require('crypto').randomBytes

document.appendChild(visualize(random(32), 256))

```

## visualize(buffer, width) => img

will return a square image, with `width`.
Each nibble (4bits) of `buffer` is represented as a colored square.
If `Math.sqrt(buffer.length*2)` is a whole number, then the buffer will fit perfectly,
otherwise, it will have some blocks shown trailing, and be spaced with white.

If you need to fix that, then make a PR, I only needed this for buffers (ed25519 keys) that fit
perfectly in a square.

## License

MIT


