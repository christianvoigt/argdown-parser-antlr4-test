var antlr4 = require("antlr4");
var ArgdownLexer = require("./src/ArgdownLexer.js");
var ArgdownParser = require("./src/ArgdownParser.js");
var fs = require('fs');
var path = require('path');

var parse = function(input){
  var chars = new antlr4.InputStream(input);
  var lexer = new ArgdownLexer.ArgdownLexer(chars);
  var tokens  = new antlr4.CommonTokenStream(lexer);
  var parser = new ArgdownParser.ArgdownParser(tokens);
  parser.buildParseTrees = true;
  var value = parser.tests();
  return value;
}

var printTokens = function(input){
  var chars = new antlr4.InputStream(input);
  var lexer = new ArgdownLexer.ArgdownLexer(chars);
  var tokens  = new antlr4.CommonTokenStream(lexer);
  var parser = new ArgdownParser.ArgdownParser(tokens);
  parser.buildParseTrees = true;
  parser.tests();
  // for(var i = 0; i < tokens.tokens.length; i++){
  //   var token = tokens.tokens[i];
  //   //console.log(token);
  //   console.log(parser.symbolicNames[token.type] + " " + token.text);
  // }
}

var printAstRecursively = function(value,pre,parser){
  if(value instanceof antlr4.ParserRuleContext){
    console.log(pre + " " + parser.ruleNames[value.ruleIndex]);
  }else{
    console.log(pre + " " + parser.symbolicNames[value.getSymbol().type]);
    // var propValue;
    // for(var propName in value) {
    //     propValue = value[propName]
    //
    //     console.log(propName,propValue);
    // }
  }

  if(value.children && value.children.length > 0){
    var newPre = pre + " |";
    for(var i = 0; i < value.children.length; i++){
      printAstRecursively(value.children[i],newPre, parser);
    }
  }
}

var printAst = function(value){
  var parser = value.parser;
  printAstRecursively(value, "", parser);
}

module.exports = {
  parse : parse,
  printTokens: printTokens,
  printAst: printAst,
  ArgdownParser: ArgdownParser,
  ArgdownLexer: ArgdownLexer
}
