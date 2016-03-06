var include = require('./index.js');
var obj = {name: 'moe', age: 50, userid: 'moe1'};
console.log(include(obj, ['userid', 'name']));
