'use strict'

var path = require('path')
var fs = require('fs')

/* Main function with object of options passed in
  options.directory => String with the directory of outputted html files
  options.commonsChunk => String of the name of the commons chunk js file
  options.outputHash => Bool to show the hash in the console or not
*/
function UpdateScriptTagsPlugin (options) {
  this.options = options
  this.chunk = false
  this.files = [ ]
}

UpdateScriptTagsPlugin.prototype.saveFile = function (file) {
  var self = this
  fs.access(file.file, fs.F_OK, function (err) { // Check directory exists
    if (err) return // Directory doesn't exist so exit
    fs.readFile(file.file, 'utf8', function (readErr, data) { // Read the html file in
      if (readErr) return // Couldn't read html file so exit
      data = data.replace(file.asset + '.js', file.hash) // Replace inline js file with new hash one
      // We also found a commons chunk file so rpelace that too
      if (self.chunk) data = data.replace(self.options.commonsChunk + '.js', self.chunk)
      fs.writeFileSync(file.file, data) // Save the file back again
    })
  })
}

UpdateScriptTagsPlugin.prototype.apply = function apply (compiler) {
  var self = this
  var options = this.options
  if (!options.directory) options.directory = ''
  // Called on the final emit function of webpack
  compiler.plugin('emit', function onEmit (compilation, done) {
    // Get the compilation stats for hash assets created
    var result = compilation.getStats().toJson()
    if (options.outputHash) console.log('\nHash used:', compilation.hash)
    // Loop over all assets created to get the hash filename
    Object.keys(result.assetsByChunkName).map(function (key) {
      var hash = result.assetsByChunkName[key]
      // We found the commons chunk file so save this for later on
      if (key === options.commonsChunk) {
        self.chunk = hash
        return
      }
      var file = path.join(__dirname, options.directory, key + '.html')
      // Push html filename, asset filename and hashed asset
      self.files.push({ file: file, asset: key, hash: hash })
    })
    done()
  })
  // webpack has finished now
  compiler.plugin('done', function onDone () {
    // wait 100milliseconds as webpack has a delay in what it writes itself from metalsmith
    setTimeout(function () {
      self.files.map(function (item) {
        self.saveFile(item)
      })
    }, 100)
  })
}

module.exports = UpdateScriptTagsPlugin
