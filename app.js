/**
 * Created by ndjordjevic on 4/12/15.
 */

var walk = require('walk');
var fs = require('fs');
var files = [];

// Walker options TODO: populate 'filters'
var walker = walk.walk('testFolder', {followLinks: false, filters: ["Temp", "_Temp"]});

walker.on('file', function (root, stat, next) {
    // Add this file to the list of files
    if (stat.name === 'pom.xml') {
        files.push(root + '/' + stat.name);
        fs.readFile(root + '/' + stat.name, 'utf8', function (err,data) {
            if (err) {
                return console.log(err);
            }
            var result = data.replace(/provided/g, 'compile');

            fs.writeFile(root + '/' + stat.name, result, 'utf8', function (err) {
                if (err) return console.log(err);
            });
        });
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