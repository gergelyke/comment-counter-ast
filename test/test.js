var test = require('tape');
var counter = require('../');

test('Finds single line comments', function (t) {
  t.equal(counter(__dirname + '/fixtures/single.js'), 1);
  t.end();
});

test('Finds block comments', function (t) {
  t.equal(counter(__dirname + '/fixtures/block.js'), 1);
  t.end();
});

test('Finds multiple block comments in the same line', function (t) {
  t.equal(counter(__dirname + '/fixtures/multi-block.js'), 2);
  t.end();
});

test('Finds block and line comments in the same file', function (t) {
  t.equal(counter(__dirname + '/fixtures/mix.js'), 9);
  t.end();
});
