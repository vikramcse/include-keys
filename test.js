var expect = require('chai').expect;
var include = require('./index.js');
var obj = {name: 'moe', age: 50, userid: 'moe1'};

describe('tests for including properties from object', function () {
  it('should return object with userid property', function () {
    expect(include(obj, ['userid'])).to.deep.equal({ userid: 'moe1' });
  });
  
  it('should return object with userid property', function () {
    expect(include(obj, 'userid')).to.deep.equal({ userid: 'moe1' });
  });
  
  it('should return object with userid and name property', function () {
    expect(include(obj, ['userid', 'name'])).to.deep.equal({ name: 'moe', userid: 'moe1' });
  });

});