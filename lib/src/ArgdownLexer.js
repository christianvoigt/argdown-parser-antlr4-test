// Generated from ./src/Argdown.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002\u0010\u00c9\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0007",
    "\b4\n\b\f\b\u000e\b7\u000b\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005\b",
    "=\n\b\u0003\b\u0007\b@\n\b\f\b\u000e\bC\u000b\b\u0003\b\u0003\b\u0003",
    "\b\u0005\bH\n\b\u0003\b\u0003\b\u0003\t\u0003\t\u0007\tN\n\t\f\t\u000e",
    "\tQ\u000b\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\tW\n\t\u0003\t\u0007",
    "\tZ\n\t\f\t\u000e\t]\u000b\t\u0003\t\u0003\t\u0003\t\u0005\tb\n\t\u0003",
    "\t\u0003\t\u0003\n\u0003\n\u0007\nh\n\n\f\n\u000e\nk\u000b\n\u0003\n",
    "\u0003\n\u0003\n\u0005\np\n\n\u0003\n\u0003\n\u0005\nt\n\n\u0003\n\u0007",
    "\nw\n\n\f\n\u000e\nz\u000b\n\u0003\n\u0003\n\u0003\n\u0005\n\u007f\n",
    "\n\u0005\n\u0081\n\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0007\u000b",
    "\u0087\n\u000b\f\u000b\u000e\u000b\u008a\u000b\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0005\u000b\u008f\n\u000b\u0003\u000b\u0003\u000b",
    "\u0005\u000b\u0093\n\u000b\u0003\u000b\u0007\u000b\u0096\n\u000b\f\u000b",
    "\u000e\u000b\u0099\u000b\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0005",
    "\u000b\u009e\n\u000b\u0005\u000b\u00a0\n\u000b\u0003\u000b\u0003\u000b",
    "\u0003\f\u0003\f\u0006\f\u00a6\n\f\r\f\u000e\f\u00a7\u0003\f\u0003\f",
    "\u0003\r\u0003\r\u0003\r\u0003\r\u0003\u000e\u0006\u000e\u00b1\n\u000e",
    "\r\u000e\u000e\u000e\u00b2\u0003\u000e\u0003\u000e\u0003\u000f\u0003",
    "\u000f\u0003\u0010\u0005\u0010\u00ba\n\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0011\u0006\u0011\u00bf\n\u0011\r\u0011\u000e\u0011\u00c0\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0006\u0012\u00c6\n\u0012\r\u0012\u000e",
    "\u0012\u00c7\u0002\u0002\u0013\u0003\u0003\u0005\u0004\u0007\u0005\t",
    "\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019",
    "\u000e\u001b\u000f\u001d\u0010\u001f\u0002!\u0002#\u0002\u0003\u0002",
    "\u0004\u0005\u0002\u000b\u000b\u000e\u000e\"\"\u0003\u00022;\u00df\u0002",
    "\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002",
    "\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002",
    "\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002",
    "\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002",
    "\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002",
    "\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002",
    "\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0003",
    "%\u0003\u0002\u0002\u0002\u0005\'\u0003\u0002\u0002\u0002\u0007)\u0003",
    "\u0002\u0002\u0002\t+\u0003\u0002\u0002\u0002\u000b-\u0003\u0002\u0002",
    "\u0002\r/\u0003\u0002\u0002\u0002\u000fG\u0003\u0002\u0002\u0002\u0011",
    "a\u0003\u0002\u0002\u0002\u0013\u0080\u0003\u0002\u0002\u0002\u0015",
    "\u009f\u0003\u0002\u0002\u0002\u0017\u00a3\u0003\u0002\u0002\u0002\u0019",
    "\u00ab\u0003\u0002\u0002\u0002\u001b\u00b0\u0003\u0002\u0002\u0002\u001d",
    "\u00b6\u0003\u0002\u0002\u0002\u001f\u00b9\u0003\u0002\u0002\u0002!",
    "\u00be\u0003\u0002\u0002\u0002#\u00c5\u0003\u0002\u0002\u0002%&\u0007",
    "<\u0002\u0002&\u0004\u0003\u0002\u0002\u0002\'(\u0007>\u0002\u0002(",
    "\u0006\u0003\u0002\u0002\u0002)*\u0007@\u0002\u0002*\b\u0003\u0002\u0002",
    "\u0002+,\u0007]\u0002\u0002,\n\u0003\u0002\u0002\u0002-.\u0007_\u0002",
    "\u0002.\f\u0003\u0002\u0002\u0002/0\u0007%\u0002\u00020\u000e\u0003",
    "\u0002\u0002\u000215\u0006\b\u0002\u000224\u0005#\u0012\u000232\u0003",
    "\u0002\u0002\u000247\u0003\u0002\u0002\u000253\u0003\u0002\u0002\u0002",
    "56\u0003\u0002\u0002\u000268\u0003\u0002\u0002\u000275\u0003\u0002\u0002",
    "\u000289\u0007-\u0002\u00029H\u0007@\u0002\u0002:=\u0005\u0017\f\u0002",
    ";=\u0005\u001f\u0010\u0002<:\u0003\u0002\u0002\u0002<;\u0003\u0002\u0002",
    "\u0002=A\u0003\u0002\u0002\u0002>@\u0005#\u0012\u0002?>\u0003\u0002",
    "\u0002\u0002@C\u0003\u0002\u0002\u0002A?\u0003\u0002\u0002\u0002AB\u0003",
    "\u0002\u0002\u0002BD\u0003\u0002\u0002\u0002CA\u0003\u0002\u0002\u0002",
    "DE\u0007-\u0002\u0002EF\u0007@\u0002\u0002FH\u0003\u0002\u0002\u0002",
    "G1\u0003\u0002\u0002\u0002G<\u0003\u0002\u0002\u0002HI\u0003\u0002\u0002",
    "\u0002IJ\b\b\u0002\u0002J\u0010\u0003\u0002\u0002\u0002KO\u0006\t\u0003",
    "\u0002LN\u0005#\u0012\u0002ML\u0003\u0002\u0002\u0002NQ\u0003\u0002",
    "\u0002\u0002OM\u0003\u0002\u0002\u0002OP\u0003\u0002\u0002\u0002PR\u0003",
    "\u0002\u0002\u0002QO\u0003\u0002\u0002\u0002RS\u0007/\u0002\u0002Sb",
    "\u0007@\u0002\u0002TW\u0005\u0017\f\u0002UW\u0005\u001f\u0010\u0002",
    "VT\u0003\u0002\u0002\u0002VU\u0003\u0002\u0002\u0002W[\u0003\u0002\u0002",
    "\u0002XZ\u0005#\u0012\u0002YX\u0003\u0002\u0002\u0002Z]\u0003\u0002",
    "\u0002\u0002[Y\u0003\u0002\u0002\u0002[\\\u0003\u0002\u0002\u0002\\",
    "^\u0003\u0002\u0002\u0002][\u0003\u0002\u0002\u0002^_\u0007/\u0002\u0002",
    "_`\u0007@\u0002\u0002`b\u0003\u0002\u0002\u0002aK\u0003\u0002\u0002",
    "\u0002aV\u0003\u0002\u0002\u0002bc\u0003\u0002\u0002\u0002cd\b\t\u0003",
    "\u0002d\u0012\u0003\u0002\u0002\u0002ei\u0006\n\u0004\u0002fh\u0005",
    "#\u0012\u0002gf\u0003\u0002\u0002\u0002hk\u0003\u0002\u0002\u0002ig",
    "\u0003\u0002\u0002\u0002ij\u0003\u0002\u0002\u0002jo\u0003\u0002\u0002",
    "\u0002ki\u0003\u0002\u0002\u0002lm\u0007>\u0002\u0002mp\u0007-\u0002",
    "\u0002np\u0007-\u0002\u0002ol\u0003\u0002\u0002\u0002on\u0003\u0002",
    "\u0002\u0002p\u0081\u0003\u0002\u0002\u0002qt\u0005\u0017\f\u0002rt",
    "\u0005\u001f\u0010\u0002sq\u0003\u0002\u0002\u0002sr\u0003\u0002\u0002",
    "\u0002tx\u0003\u0002\u0002\u0002uw\u0005#\u0012\u0002vu\u0003\u0002",
    "\u0002\u0002wz\u0003\u0002\u0002\u0002xv\u0003\u0002\u0002\u0002xy\u0003",
    "\u0002\u0002\u0002y~\u0003\u0002\u0002\u0002zx\u0003\u0002\u0002\u0002",
    "{|\u0007>\u0002\u0002|\u007f\u0007-\u0002\u0002}\u007f\u0007-\u0002",
    "\u0002~{\u0003\u0002\u0002\u0002~}\u0003\u0002\u0002\u0002\u007f\u0081",
    "\u0003\u0002\u0002\u0002\u0080e\u0003\u0002\u0002\u0002\u0080s\u0003",
    "\u0002\u0002\u0002\u0081\u0082\u0003\u0002\u0002\u0002\u0082\u0083\b",
    "\n\u0004\u0002\u0083\u0014\u0003\u0002\u0002\u0002\u0084\u0088\u0006",
    "\u000b\u0005\u0002\u0085\u0087\u0005#\u0012\u0002\u0086\u0085\u0003",
    "\u0002\u0002\u0002\u0087\u008a\u0003\u0002\u0002\u0002\u0088\u0086\u0003",
    "\u0002\u0002\u0002\u0088\u0089\u0003\u0002\u0002\u0002\u0089\u008e\u0003",
    "\u0002\u0002\u0002\u008a\u0088\u0003\u0002\u0002\u0002\u008b\u008c\u0007",
    ">\u0002\u0002\u008c\u008f\u0007/\u0002\u0002\u008d\u008f\u0007/\u0002",
    "\u0002\u008e\u008b\u0003\u0002\u0002\u0002\u008e\u008d\u0003\u0002\u0002",
    "\u0002\u008f\u00a0\u0003\u0002\u0002\u0002\u0090\u0093\u0005\u0017\f",
    "\u0002\u0091\u0093\u0005\u001f\u0010\u0002\u0092\u0090\u0003\u0002\u0002",
    "\u0002\u0092\u0091\u0003\u0002\u0002\u0002\u0093\u0097\u0003\u0002\u0002",
    "\u0002\u0094\u0096\u0005#\u0012\u0002\u0095\u0094\u0003\u0002\u0002",
    "\u0002\u0096\u0099\u0003\u0002\u0002\u0002\u0097\u0095\u0003\u0002\u0002",
    "\u0002\u0097\u0098\u0003\u0002\u0002\u0002\u0098\u009d\u0003\u0002\u0002",
    "\u0002\u0099\u0097\u0003\u0002\u0002\u0002\u009a\u009b\u0007>\u0002",
    "\u0002\u009b\u009e\u0007/\u0002\u0002\u009c\u009e\u0007/\u0002\u0002",
    "\u009d\u009a\u0003\u0002\u0002\u0002\u009d\u009c\u0003\u0002\u0002\u0002",
    "\u009e\u00a0\u0003\u0002\u0002\u0002\u009f\u0084\u0003\u0002\u0002\u0002",
    "\u009f\u0092\u0003\u0002\u0002\u0002\u00a0\u00a1\u0003\u0002\u0002\u0002",
    "\u00a1\u00a2\b\u000b\u0005\u0002\u00a2\u0016\u0003\u0002\u0002\u0002",
    "\u00a3\u00a5\u0005\u001f\u0010\u0002\u00a4\u00a6\u0005\u001f\u0010\u0002",
    "\u00a5\u00a4\u0003\u0002\u0002\u0002\u00a6\u00a7\u0003\u0002\u0002\u0002",
    "\u00a7\u00a5\u0003\u0002\u0002\u0002\u00a7\u00a8\u0003\u0002\u0002\u0002",
    "\u00a8\u00a9\u0003\u0002\u0002\u0002\u00a9\u00aa\b\f\u0006\u0002\u00aa",
    "\u0018\u0003\u0002\u0002\u0002\u00ab\u00ac\u0005\u001f\u0010\u0002\u00ac",
    "\u00ad\u0003\u0002\u0002\u0002\u00ad\u00ae\b\r\u0007\u0002\u00ae\u001a",
    "\u0003\u0002\u0002\u0002\u00af\u00b1\t\u0002\u0002\u0002\u00b0\u00af",
    "\u0003\u0002\u0002\u0002\u00b1\u00b2\u0003\u0002\u0002\u0002\u00b2\u00b0",
    "\u0003\u0002\u0002\u0002\u00b2\u00b3\u0003\u0002\u0002\u0002\u00b3\u00b4",
    "\u0003\u0002\u0002\u0002\u00b4\u00b5\b\u000e\u0007\u0002\u00b5\u001c",
    "\u0003\u0002\u0002\u0002\u00b6\u00b7\u000b\u0002\u0002\u0002\u00b7\u001e",
    "\u0003\u0002\u0002\u0002\u00b8\u00ba\u0007\u000f\u0002\u0002\u00b9\u00b8",
    "\u0003\u0002\u0002\u0002\u00b9\u00ba\u0003\u0002\u0002\u0002\u00ba\u00bb",
    "\u0003\u0002\u0002\u0002\u00bb\u00bc\u0007\f\u0002\u0002\u00bc \u0003",
    "\u0002\u0002\u0002\u00bd\u00bf\t\u0003\u0002\u0002\u00be\u00bd\u0003",
    "\u0002\u0002\u0002\u00bf\u00c0\u0003\u0002\u0002\u0002\u00c0\u00be\u0003",
    "\u0002\u0002\u0002\u00c0\u00c1\u0003\u0002\u0002\u0002\u00c1\"\u0003",
    "\u0002\u0002\u0002\u00c2\u00c3\u0007\"\u0002\u0002\u00c3\u00c6\u0007",
    "\"\u0002\u0002\u00c4\u00c6\u0007\u000b\u0002\u0002\u00c5\u00c2\u0003",
    "\u0002\u0002\u0002\u00c5\u00c4\u0003\u0002\u0002\u0002\u00c6\u00c7\u0003",
    "\u0002\u0002\u0002\u00c7\u00c5\u0003\u0002\u0002\u0002\u00c7\u00c8\u0003",
    "\u0002\u0002\u0002\u00c8$\u0003\u0002\u0002\u0002\u001d\u00025<AGOV",
    "[aiosx~\u0080\u0088\u008e\u0092\u0097\u009d\u009f\u00a7\u00b2\u00b9",
    "\u00c0\u00c5\u00c7\b\u0003\b\u0002\u0003\t\u0003\u0003\n\u0004\u0003",
    "\u000b\u0005\u0003\f\u0006\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function ArgdownLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

ArgdownLexer.prototype = Object.create(antlr4.Lexer.prototype);
ArgdownLexer.prototype.constructor = ArgdownLexer;

ArgdownLexer.EOF = antlr4.Token.EOF;
ArgdownLexer.T__0 = 1;
ArgdownLexer.T__1 = 2;
ArgdownLexer.T__2 = 3;
ArgdownLexer.T__3 = 4;
ArgdownLexer.T__4 = 5;
ArgdownLexer.T__5 = 6;
ArgdownLexer.INCOMING_SUPPORT_START = 7;
ArgdownLexer.INCOMING_ATTACK_START = 8;
ArgdownLexer.OUTGOING_SUPPORT_START = 9;
ArgdownLexer.OUTGOING_ATTACK_START = 10;
ArgdownLexer.EMPTYLINE = 11;
ArgdownLexer.NEWLINE = 12;
ArgdownLexer.WS = 13;
ArgdownLexer.CHAR = 14;


ArgdownLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

ArgdownLexer.prototype.literalNames = [ null, "':'", "'<'", "'>'", "'['", 
                                        "']'", "'#'" ];

ArgdownLexer.prototype.symbolicNames = [ null, null, null, null, null, null, 
                                         null, "INCOMING_SUPPORT_START", 
                                         "INCOMING_ATTACK_START", "OUTGOING_SUPPORT_START", 
                                         "OUTGOING_ATTACK_START", "EMPTYLINE", 
                                         "NEWLINE", "WS", "CHAR" ];

ArgdownLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", 
                                     "T__5", "INCOMING_SUPPORT_START", "INCOMING_ATTACK_START", 
                                     "OUTGOING_SUPPORT_START", "OUTGOING_ATTACK_START", 
                                     "EMPTYLINE", "NEWLINE", "WS", "CHAR", 
                                     "Newline", "Integer", "Spaces" ];

ArgdownLexer.prototype.grammarFileName = "Argdown.g4";


  var ArgdownParser = require("./ArgdownParser.js");
  //var antlr4 = require("antlr4");
  // A queue where extra tokenStack are pushed on (see the NEWLINE lexer rule).
  Object.defineProperty(ArgdownLexer.prototype, "tokenStack", {
  	get : function() {
      if(this._tokenStack == null)
        this._tokenStack = [];
  		return this._tokenStack;
  	},
    set : function(arr){
      this._tokenStack = [];
    }
  });
  // The stack that keeps track of the indentation level.
  Object.defineProperty(ArgdownLexer.prototype, "indentStack", {
  	get : function() {
      if(this._indentStack == null)
        this._indentStack = [];
  		return this._indentStack;
  	}
  });

  ArgdownLexer.prototype.superFunctions = {
    emit: ArgdownLexer.prototype.emit,
    nextToken: ArgdownLexer.prototype.nextToken
  };

  ArgdownLexer.prototype.emit = function(t) {
    if(!t){
      return this.superFunctions.emit.call(this);
    }
    //this.setToken(t);
    //this.emitToken(t);
    this.tokenStack.push(t);
    return t;
  };
  ArgdownLexer.prototype.nextToken = function() {
    var next = this.superFunctions.nextToken.call(this);

    if(next.type == ArgdownLexer.EOF){
      this.emitRemainingDedents();
    }

      /*if (next && next.channel == antlr4.Token.DEFAULT_CHANNEL) {
        // Keep track of the last token on the default channel.
        lastToken = next;
      }*/
    this.tokenStack.push(next);
    return this.tokenStack.splice(0, 1)[0];
  }

  ArgdownLexer.prototype.emitRemainingDedents = function(){
      while (this.indentStack.length > 0) {
        this.emit(this.createDedent());
        this.indentStack.splice(this.indentStack.length-1, 1);
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
	 var indent = this.getIndentationCount(spaces);
	 var previous = this.indentStack.length == 0 ? 0 : this.indentStack[this.indentStack.length - 1];
   if (indent > previous) {
	   this.indentStack.push(indent);
	   this.emit(this.commonToken(ArgdownParser.ArgdownParser.INDENT, ''));
	 }else if(indent < previous){
	   // Possibly emit more than 1 DEDENT token.
	   while(!this.indentStack.length == 0 && this.indentStack[this.indentStack.length - 1] > indent) {
	     this.emit(this.createDedent());
	     this.indentStack.splice(this.indentStack.length - 1, 1);
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

  ArgdownLexer.prototype.getIndentationCount = function(spaces) {

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


ArgdownLexer.prototype.action = function(localctx, ruleIndex, actionIndex) {
	switch (ruleIndex) {
	case 6:
		this.INCOMING_SUPPORT_START_action(localctx, actionIndex);
		break;
	case 7:
		this.INCOMING_ATTACK_START_action(localctx, actionIndex);
		break;
	case 8:
		this.OUTGOING_SUPPORT_START_action(localctx, actionIndex);
		break;
	case 9:
		this.OUTGOING_ATTACK_START_action(localctx, actionIndex);
		break;
	case 10:
		this.EMPTYLINE_action(localctx, actionIndex);
		break;
	default:
		throw "No registered action for:" + ruleIndex;
	}
};

ArgdownLexer.prototype.INCOMING_SUPPORT_START_action = function(localctx , actionIndex) {
	switch (actionIndex) {
	case 0:
		this.emitRelation(this.text, ArgdownLexer.INCOMING_SUPPORT_START);
		break;
	default:
		throw "No registered action for:" + actionIndex;
	}
};

ArgdownLexer.prototype.INCOMING_ATTACK_START_action = function(localctx , actionIndex) {
	switch (actionIndex) {
	case 1:
		this.emitRelation(this.text, ArgdownLexer.INCOMING_ATTACK_START);
		break;
	default:
		throw "No registered action for:" + actionIndex;
	}
};

ArgdownLexer.prototype.OUTGOING_SUPPORT_START_action = function(localctx , actionIndex) {
	switch (actionIndex) {
	case 2:
		this.emitRelation(this.text, ArgdownLexer.OUTGOING_SUPPORT_START);
		break;
	default:
		throw "No registered action for:" + actionIndex;
	}
};

ArgdownLexer.prototype.OUTGOING_ATTACK_START_action = function(localctx , actionIndex) {
	switch (actionIndex) {
	case 3:
		this.emitRelation(this.text, ArgdownLexer.OUTGOING_ATTACK_START);
		break;
	default:
		throw "No registered action for:" + actionIndex;
	}
};

ArgdownLexer.prototype.EMPTYLINE_action = function(localctx , actionIndex) {
	switch (actionIndex) {
	case 4:
		this.emitEmptyline(this.text);
			
		break;
	default:
		throw "No registered action for:" + actionIndex;
	}
};
ArgdownLexer.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch (ruleIndex) {
		case 6:
			return this.INCOMING_SUPPORT_START_sempred(localctx, predIndex);
		case 7:
			return this.INCOMING_ATTACK_START_sempred(localctx, predIndex);
		case 8:
			return this.OUTGOING_SUPPORT_START_sempred(localctx, predIndex);
		case 9:
			return this.OUTGOING_ATTACK_START_sempred(localctx, predIndex);
    	default:
    		throw "No registered predicate for:" + ruleIndex;
    }
};

ArgdownLexer.prototype.INCOMING_SUPPORT_START_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.atStartOfInput();
		default:
			throw "No predicate with index:" + predIndex;
	}
};

ArgdownLexer.prototype.INCOMING_ATTACK_START_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 1:
			return this.atStartOfInput();
		default:
			throw "No predicate with index:" + predIndex;
	}
};

ArgdownLexer.prototype.OUTGOING_SUPPORT_START_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 2:
			return this.atStartOfInput();
		default:
			throw "No predicate with index:" + predIndex;
	}
};

ArgdownLexer.prototype.OUTGOING_ATTACK_START_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 3:
			return this.atStartOfInput();
		default:
			throw "No predicate with index:" + predIndex;
	}
};



exports.ArgdownLexer = ArgdownLexer;

