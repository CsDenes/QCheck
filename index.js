/**
 * Created by Denes on 15/03/16.
 */

console.log('Hello')
var express = require('express');
var app = express();

app.use(express.static('static'));

var server = app.listen(3000, function () {
});
