grammar Argdown;

tokens { INDENT, DEDENT, BOF }

@lexer::members {
  var ArgdownParser = require("./ArgdownParser.js");
  //var antlr4 = require("antlr4");
  // A queue where extra tokens are pushed on (see the NEWLINE lexer rule).
  var tokens = [];
  // The stack that keeps track of the indentation level.
  var indents = [];
  // The amount of opened braces, brackets and parenthesis.
  var opened = 0;
  // The most recently produced token.
  var lastToken = null;

  var superFunctions = {
    emit: ArgdownLexer.prototype.emit,
    nextToken: ArgdownLexer.prototype.nextToken
  };

  ArgdownLexer.prototype.emit = function(t) {
    if(!t){
      return superFunctions.emit.call(this);
    }
    //this.setToken(t);
    //this.emitToken(t);
    tokens.push(t);
    return t;
  };
  ArgdownLexer.prototype.nextToken = function() {
    var next = superFunctions.nextToken.call(this);

    if(next.type == ArgdownLexer.EOF){
      this.emitRemainingDedents();
    }

      /*if (next && next.channel == antlr4.Token.DEFAULT_CHANNEL) {
        // Keep track of the last token on the default channel.
        lastToken = next;
      }*/
    tokens.push(next);
    return tokens.splice(0, 1)[0];
  }

  ArgdownLexer.prototype.emitRemainingDedents = function(){
      while (indents.length > 0) {
        this.emit(this.createDedent());
        indents.splice(indents.length-1, 1);
      }
  };

  ArgdownLexer.prototype.emitEmptyline = function(tokenText){
  	this.emitRemainingDedents();
  	//this.emit(this.commonToken(ArgdownLexer.EMPTYLINE, tokenText));
  }

  ArgdownLexer.prototype.emitRelation = function(tokenText, relationType){
	 var spaces = tokenText.replace(/[^'  '\t]+/g, '');
   var relation = tokenText.replace(/[\r\n'  '\t]+/g, '');

	 //var next = this._input.LA(1);
	 var indent = getIndentationCount(spaces);
	 var previous = indents.length == 0 ? 0 : indents[indents.length - 1];
   if (indent > previous) {
	   indents.push(indent);
	   this.emit(this.commonToken(ArgdownParser.ArgdownParser.INDENT, ''));
	 }else if(indent < previous){
	   // Possibly emit more than 1 DEDENT token.
	   while(!indents.length == 0 && indents[indents.length - 1] > indent) {
	     this.emit(this.createDedent());
	     indents.splice(indents.length - 1, 1);
	   }
	 }
	 //this.emit(this.commonToken(relationType,tokenText));
  }

  ArgdownLexer.prototype.createDedent = function() {
	   var dedent = this.commonToken(ArgdownParser.ArgdownParser.DEDENT, '');
     this.line;
     //dedent.line = lastToken.line;
    return dedent;
  }

  ArgdownLexer.prototype.commonToken = function(type, text) {
    var stop = this.getCharIndex() - 1;
    var start = (!text || text.length == 0)? stop : stop - text.length + 1;
    var t = this._factory.create(this._tokenFactorySourcePair, type,
        text, antlr4.CommonToken.DEFAULT_TOKEN_CHANNEL, start, stop, this._tokenStartLine,
        this._tokenStartColumn);
    return t;
  }

  var getIndentationCount = function(spaces) {

    var count = 1;
    var previousCharWasSpace = false;
    for (var i = 0; i < spaces.length; i++) {
      var ch = spaces[i];
      switch (ch) {
        case '\t':
          count ++;
          break;
        default:
        	if(previousCharWasSpace){
	          count++;
			  previousCharWasSpace = false;
        	}else{
        		previousCharWasSpace = true;
        	}
      }
    }
    return count;
  }

  ArgdownLexer.prototype.atStartOfInput = function() {
    if(this._token == null)
      return true;

    return this._token.column == 0 && this._token.line == 1;
    //return this.getCharPositionInLine() == 0 && this.getLine() == 1;
  }
}

tests
	: statement (EMPTYLINE statement)* EMPTYLINE? EOF
	;

relations
	: INDENT (incomingSupport|incomingAttack|outgoingSupport|outgoingAttack)+ DEDENT
	;


incomingSupport
	: INCOMING_SUPPORT_START statement;

incomingAttack
	: INCOMING_ATTACK_START statement;

outgoingSupport
	: OUTGOING_SUPPORT_START statement;

outgoingAttack
	: OUTGOING_ATTACK_START statement;

statement
	: (string|statementTitle|statementTitleDefinition string) relations?
	;

argumentTitleDefinition
	: argumentTitle':'
	;

argumentTitle
	: '<'string'>'
	;

statementTitleDefinition
	: statementTitle':'
	;

statementTitle
	: '['string']'
	;

tag
	: '#'(CHAR)+;

string : CHAR+;


INCOMING_SUPPORT_START
	: ({this.atStartOfInput()}? Spaces* '+>'
	| (EMPTYLINE | Newline) Spaces* '+>')
	{this.emitRelation(this.text, ArgdownLexer.INCOMING_SUPPORT_START);}
	;
INCOMING_ATTACK_START
	: ({this.atStartOfInput()}? Spaces* '->'
	| (EMPTYLINE | Newline) Spaces* '->')
	{this.emitRelation(this.text, ArgdownLexer.INCOMING_ATTACK_START);}
	;
OUTGOING_SUPPORT_START
	: ({this.atStartOfInput()}? Spaces* ('<+'|'+')
	| (EMPTYLINE | Newline) Spaces* ('<+'|'+'))
	{this.emitRelation(this.text, ArgdownLexer.OUTGOING_SUPPORT_START);}
	;
OUTGOING_ATTACK_START
	: ({this.atStartOfInput()}? Spaces* ('<-'|'-')
	| (EMPTYLINE | Newline) Spaces* ('<-'|'-'))
	{this.emitRelation(this.text, ArgdownLexer.OUTGOING_ATTACK_START);}
	;



EMPTYLINE
	: Newline Newline+ {this.emitEmptyline(this.text);
	}
	;
NEWLINE : Newline ->skip
	;

WS  :   [ \t\u000C]+ ->skip
    ;

CHAR : .;

fragment Newline
	: '\r'? '\n' ;

fragment Integer
	: [0-9]+
	;
fragment Spaces
 : ('  '|'\t')+
 ;
