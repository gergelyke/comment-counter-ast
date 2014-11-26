var fs = require('fs');

var esprima = require('esprima');
var traverse = require('ast-traverse');

var TPYE_ONE_LINE_COMMENT = 'Line';
var TPYE_BLOCK_COMMENT = 'Block';

module.exports = function (path) {
  var code = fs.readFileSync(path, 'utf-8');

  var lineComment = 0;
  var blockComment = 0;

  var ast = esprima.parse(code, {
    comment: true
  });

  traverse(ast, {
    pre: function(node, parent, prop, idx) {
        if (node.type === TPYE_ONE_LINE_COMMENT) {
          lineComment += 1;
        } else if (node.type === TPYE_BLOCK_COMMENT) {
          blockComment += 1;
        }
      }
  });

  return blockComment + lineComment;
};
