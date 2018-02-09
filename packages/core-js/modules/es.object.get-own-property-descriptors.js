var ownKeys = require('./_own-keys');
var toIndexedObject = require('core-js-internals/to-indexed-object');
var getOwnPropertyDescriptorModule = require('./_object-get-own-property-descriptor');
var createProperty = require('./_create-property');

// `Object.getOwnPropertyDescriptors` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
require('./_export')({ target: 'Object', stat: true }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, descriptor;
    while (keys.length > i) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[i++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});