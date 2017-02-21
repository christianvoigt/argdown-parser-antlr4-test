var antlr4 = require("antlr4");
var ArgdownParser = require("../lib/index.js");
var fs = require('fs');
var path = require('path');
var expect = require('chai').expect;


describe("Parser", function() {
  it("can parse", function(){
    var filePath = path.join(__dirname, 'test.argdown');
    var input = fs.readFileSync(filePath, 'utf8');
    var tree = ArgdownParser.printTokens(input);
    var tree = ArgdownParser.printTokens(input);
    //ArgdownParser.printAst(tree);
    //ArgdownParser.printTokens(input);
    //expect(tree.children).to.be.an('array');
  });
});
