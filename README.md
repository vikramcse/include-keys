# include-keys
Return a copy of the object, filtered to only have values for the whitelisted keys.

## Install

```sh
$ npm install --save include-keys
```

## Example

```js
var include = require('include-keys');

var obj = {name: 'moe', age: 50, userid: 'moe1'};
console.log(exclude(obj, 'userid'));
// -> { userid: 'moe1' }

var obj = {name: 'moe', age: 50, userid: 'moe1'};
console.log(include(obj, ['userid', 'name']));
// -> { name: 'moe', userid: 'moe1' }
```

#### `require('include-keys')(object, list)`

**Arguments**:
- `object`: Object
- `list`: list of items to include from object

**Returns**: Return a copy of the object, filtered to only have values for the whitelisted keys.

## License

&copy; 2016 vikram. MIT Licen