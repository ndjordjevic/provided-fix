/**
 * Created by ndjordjevic on 4/12/15.
 */

var walk    = require('walk');
var files   = [];

// Walker options
var walker  = walk.walk('.', { followLinks: false });

walker.on('file', function(root, stat, next) {
    // Add this file to the list of files
    files.push(root + '/' + stat.name);
    next();
});

walker.on('names', function (root, nodeNamesArray) {
    console.log(nodeNamesArray);
});

walker.on('end', function() {
    console.log(files);
});