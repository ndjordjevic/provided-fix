/**
 * Created by ndjordjevic on 4/12/15.
 */

var walk = require('walk');
var files = [];

// Walker options
var walker = walk.walk('testFolder', {followLinks: false, filters: ["Temp", "_Temp"]});

walker.on('file', function (root, stat, next) {
    // Add this file to the list of files
    if (stat.name === 'pom.xml') {
        files.push(root + '/' + stat.name);
    }
    next();
});

//walker.on('names', function (root, nodeNamesArray) {
//    console.log(nodeNamesArray);
//});

walker.on('end', function () {
    console.log(files);
});

//walker.on('files', function(root, stats, next) {
//    console.log(root);
//});