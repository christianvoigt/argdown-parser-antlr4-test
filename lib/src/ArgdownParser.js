// Generated from ./src/Argdown.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ArgdownListener = require('./ArgdownListener').ArgdownListener;
var grammarFileName = "Argdown.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u0013a\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0003\u0002\u0003\u0002\u0003\u0002\u0007",
    "\u0002 \n\u0002\f\u0002\u000e\u0002#\u000b\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0006\u0003",
    ",\n\u0003\r\u0003\u000e\u0003-\u0003\u0003\u0003\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0005\bC\n\b\u0003\b\u0005\bF\n\b\u0003\t",
    "\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0006\r",
    "X\n\r\r\r\u000e\rY\u0003\u000e\u0006\u000e]\n\u000e\r\u000e\u000e\u000e",
    "^\u0003\u000e\u0002\u0002\u000f\u0002\u0004\u0006\b\n\f\u000e\u0010",
    "\u0012\u0014\u0016\u0018\u001a\u0002\u0002]\u0002\u001c\u0003\u0002",
    "\u0002\u0002\u0004&\u0003\u0002\u0002\u0002\u00061\u0003\u0002\u0002",
    "\u0002\b4\u0003\u0002\u0002\u0002\n7\u0003\u0002\u0002\u0002\f:\u0003",
    "\u0002\u0002\u0002\u000eB\u0003\u0002\u0002\u0002\u0010G\u0003\u0002",
    "\u0002\u0002\u0012J\u0003\u0002\u0002\u0002\u0014N\u0003\u0002\u0002",
    "\u0002\u0016Q\u0003\u0002\u0002\u0002\u0018U\u0003\u0002\u0002\u0002",
    "\u001a\\\u0003\u0002\u0002\u0002\u001c!\u0005\u000e\b\u0002\u001d\u001e",
    "\u0007\r\u0002\u0002\u001e \u0005\u000e\b\u0002\u001f\u001d\u0003\u0002",
    "\u0002\u0002 #\u0003\u0002\u0002\u0002!\u001f\u0003\u0002\u0002\u0002",
    "!\"\u0003\u0002\u0002\u0002\"$\u0003\u0002\u0002\u0002#!\u0003\u0002",
    "\u0002\u0002$%\u0007\u0002\u0002\u0003%\u0003\u0003\u0002\u0002\u0002",
    "&+\u0007\u0011\u0002\u0002\',\u0005\u0006\u0004\u0002(,\u0005\b\u0005",
    "\u0002),\u0005\n\u0006\u0002*,\u0005\f\u0007\u0002+\'\u0003\u0002\u0002",
    "\u0002+(\u0003\u0002\u0002\u0002+)\u0003\u0002\u0002\u0002+*\u0003\u0002",
    "\u0002\u0002,-\u0003\u0002\u0002\u0002-+\u0003\u0002\u0002\u0002-.\u0003",
    "\u0002\u0002\u0002./\u0003\u0002\u0002\u0002/0\u0007\u0012\u0002\u0002",
    "0\u0005\u0003\u0002\u0002\u000212\u0007\t\u0002\u000223\u0005\u000e",
    "\b\u00023\u0007\u0003\u0002\u0002\u000245\u0007\n\u0002\u000256\u0005",
    "\u000e\b\u00026\t\u0003\u0002\u0002\u000278\u0007\u000b\u0002\u0002",
    "89\u0005\u000e\b\u00029\u000b\u0003\u0002\u0002\u0002:;\u0007\f\u0002",
    "\u0002;<\u0005\u000e\b\u0002<\r\u0003\u0002\u0002\u0002=C\u0005\u001a",
    "\u000e\u0002>C\u0005\u0016\f\u0002?@\u0005\u0014\u000b\u0002@A\u0005",
    "\u001a\u000e\u0002AC\u0003\u0002\u0002\u0002B=\u0003\u0002\u0002\u0002",
    "B>\u0003\u0002\u0002\u0002B?\u0003\u0002\u0002\u0002CE\u0003\u0002\u0002",
    "\u0002DF\u0005\u0004\u0003\u0002ED\u0003\u0002\u0002\u0002EF\u0003\u0002",
    "\u0002\u0002F\u000f\u0003\u0002\u0002\u0002GH\u0005\u0012\n\u0002HI",
    "\u0007\u0003\u0002\u0002I\u0011\u0003\u0002\u0002\u0002JK\u0007\u0004",
    "\u0002\u0002KL\u0005\u001a\u000e\u0002LM\u0007\u0005\u0002\u0002M\u0013",
    "\u0003\u0002\u0002\u0002NO\u0005\u0016\f\u0002OP\u0007\u0003\u0002\u0002",
    "P\u0015\u0003\u0002\u0002\u0002QR\u0007\u0006\u0002\u0002RS\u0005\u001a",
    "\u000e\u0002ST\u0007\u0007\u0002\u0002T\u0017\u0003\u0002\u0002\u0002",
    "UW\u0007\b\u0002\u0002VX\u0007\u0010\u0002\u0002WV\u0003\u0002\u0002",
    "\u0002XY\u0003\u0002\u0002\u0002YW\u0003\u0002\u0002\u0002YZ\u0003\u0002",
    "\u0002\u0002Z\u0019\u0003\u0002\u0002\u0002[]\u0007\u0010\u0002\u0002",
    "\\[\u0003\u0002\u0002\u0002]^\u0003\u0002\u0002\u0002^\\\u0003\u0002",
    "\u0002\u0002^_\u0003\u0002\u0002\u0002_\u001b\u0003\u0002\u0002\u0002",
    "\t!+-BEY^"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "':'", "'<'", "'>'", "'['", "']'", "'#'" ];

var symbolicNames = [ null, null, null, null, null, null, null, "INCOMING_SUPPORT_START", 
                      "INCOMING_ATTACK_START", "OUTGOING_SUPPORT_START", 
                      "OUTGOING_ATTACK_START", "EMPTYLINE", "NEWLINE", "WS", 
                      "CHAR", "INDENT", "DEDENT", "BOF" ];

var ruleNames =  [ "tests", "relations", "incomingSupport", "incomingAttack", 
                   "outgoingSupport", "outgoingAttack", "statement", "argumentTitleDefinition", 
                   "argumentTitle", "statementTitleDefinition", "statementTitle", 
                   "tag", "string" ];

function ArgdownParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

ArgdownParser.prototype = Object.create(antlr4.Parser.prototype);
ArgdownParser.prototype.constructor = ArgdownParser;

Object.defineProperty(ArgdownParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

ArgdownParser.EOF = antlr4.Token.EOF;
ArgdownParser.T__0 = 1;
ArgdownParser.T__1 = 2;
ArgdownParser.T__2 = 3;
ArgdownParser.T__3 = 4;
ArgdownParser.T__4 = 5;
ArgdownParser.T__5 = 6;
ArgdownParser.INCOMING_SUPPORT_START = 7;
ArgdownParser.INCOMING_ATTACK_START = 8;
ArgdownParser.OUTGOING_SUPPORT_START = 9;
ArgdownParser.OUTGOING_ATTACK_START = 10;
ArgdownParser.EMPTYLINE = 11;
ArgdownParser.NEWLINE = 12;
ArgdownParser.WS = 13;
ArgdownParser.CHAR = 14;
ArgdownParser.INDENT = 15;
ArgdownParser.DEDENT = 16;
ArgdownParser.BOF = 17;

ArgdownParser.RULE_tests = 0;
ArgdownParser.RULE_relations = 1;
ArgdownParser.RULE_incomingSupport = 2;
ArgdownParser.RULE_incomingAttack = 3;
ArgdownParser.RULE_outgoingSupport = 4;
ArgdownParser.RULE_outgoingAttack = 5;
ArgdownParser.RULE_statement = 6;
ArgdownParser.RULE_argumentTitleDefinition = 7;
ArgdownParser.RULE_argumentTitle = 8;
ArgdownParser.RULE_statementTitleDefinition = 9;
ArgdownParser.RULE_statementTitle = 10;
ArgdownParser.RULE_tag = 11;
ArgdownParser.RULE_string = 12;

function TestsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArgdownParser.RULE_tests;
    return this;
}

TestsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TestsContext.prototype.constructor = TestsContext;

TestsContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

TestsContext.prototype.EOF = function() {
    return this.getToken(ArgdownParser.EOF, 0);
};

TestsContext.prototype.EMPTYLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ArgdownParser.EMPTYLINE);
    } else {
        return this.getToken(ArgdownParser.EMPTYLINE, i);
    }
};


TestsContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArgdownListener ) {
        listener.enterTests(this);
	}
};

TestsContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArgdownListener ) {
        listener.exitTests(this);
	}
};




ArgdownParser.TestsContext = TestsContext;

ArgdownParser.prototype.tests = function() {

    var localctx = new TestsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, ArgdownParser.RULE_tests);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 26;
        this.statement();
        this.state = 31;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ArgdownParser.EMPTYLINE) {
            this.state = 27;
            this.match(ArgdownParser.EMPTYLINE);
            this.state = 28;
            this.statement();
            this.state = 33;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 34;
        this.match(ArgdownParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RelationsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArgdownParser.RULE_relations;
    return this;
}

RelationsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RelationsContext.prototype.constructor = RelationsContext;

RelationsContext.prototype.INDENT = function() {
    return this.getToken(ArgdownParser.INDENT, 0);
};

RelationsContext.prototype.DEDENT = function() {
    return this.getToken(ArgdownParser.DEDENT, 0);
};

RelationsContext.prototype.incomingSupport = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IncomingSupportContext);
    } else {
        return this.getTypedRuleContext(IncomingSupportContext,i);
    }
};

RelationsContext.prototype.incomingAttack = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IncomingAttackContext);
    } else {
        return this.getTypedRuleContext(IncomingAttackContext,i);
    }
};

RelationsContext.prototype.outgoingSupport = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(OutgoingSupportContext);
    } else {
        return this.getTypedRuleContext(OutgoingSupportContext,i);
    }
};

RelationsContext.prototype.outgoingAttack = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(OutgoingAttackContext);
    } else {
        return this.getTypedRuleContext(OutgoingAttackContext,i);
    }
};

RelationsContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArgdownListener ) {
        listener.enterRelations(this);
	}
};

RelationsContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArgdownListener ) {
        listener.exitRelations(this);
	}
};




ArgdownParser.RelationsContext = RelationsContext;

ArgdownParser.prototype.relations = function() {

    var localctx = new RelationsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, ArgdownParser.RULE_relations);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 36;
        this.match(ArgdownParser.INDENT);
        this.state = 41; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 41;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case ArgdownParser.INCOMING_SUPPORT_START:
                this.state = 37;
                this.incomingSupport();
                break;
            case ArgdownParser.INCOMING_ATTACK_START:
                this.state = 38;
                this.incomingAttack();
                break;
            case ArgdownParser.OUTGOING_SUPPORT_START:
                this.state = 39;
                this.outgoingSupport();
                break;
            case ArgdownParser.OUTGOING_ATTACK_START:
                this.state = 40;
                this.outgoingAttack();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 43; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ArgdownParser.INCOMING_SUPPORT_START) | (1 << ArgdownParser.INCOMING_ATTACK_START) | (1 << ArgdownParser.OUTGOING_SUPPORT_START) | (1 << ArgdownParser.OUTGOING_ATTACK_START))) !== 0));
        this.state = 45;
        this.match(ArgdownParser.DEDENT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IncomingSupportContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArgdownParser.RULE_incomingSupport;
    return this;
}

IncomingSupportContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IncomingSupportContext.prototype.constructor = IncomingSupportContext;

IncomingSupportContext.prototype.INCOMING_SUPPORT_START = function() {
    return this.getToken(ArgdownParser.INCOMING_SUPPORT_START, 0);
};

IncomingSupportContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

IncomingSupportContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArgdownListener ) {
        listener.enterIncomingSupport(this);
	}
};

IncomingSupportContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArgdownListener ) {
        listener.exitIncomingSupport(this);
	}
};




ArgdownParser.IncomingSupportContext = IncomingSupportContext;

ArgdownParser.prototype.incomingSupport = function() {

    var localctx = new IncomingSupportContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, ArgdownParser.RULE_incomingSupport);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 47;
        this.match(ArgdownParser.INCOMING_SUPPORT_START);
        this.state = 48;
        this.statement();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IncomingAttackContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArgdownParser.RULE_incomingAttack;
    return this;
}

IncomingAttackContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IncomingAttackContext.prototype.constructor = IncomingAttackContext;

IncomingAttackContext.prototype.INCOMING_ATTACK_START = function() {
    return this.getToken(ArgdownParser.INCOMING_ATTACK_START, 0);
};

IncomingAttackContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

IncomingAttackContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArgdownListener ) {
        listener.enterIncomingAttack(this);
	}
};

IncomingAttackContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArgdownListener ) {
        listener.exitIncomingAttack(this);
	}
};




ArgdownParser.IncomingAttackContext = IncomingAttackContext;

ArgdownParser.prototype.incomingAttack = function() {

    var localctx = new IncomingAttackContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, ArgdownParser.RULE_incomingAttack);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 50;
        this.match(ArgdownParser.INCOMING_ATTACK_START);
        this.state = 51;
        this.statement();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OutgoingSupportContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArgdownParser.RULE_outgoingSupport;
    return this;
}

OutgoingSupportContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OutgoingSupportContext.prototype.constructor = OutgoingSupportContext;

OutgoingSupportContext.prototype.OUTGOING_SUPPORT_START = function() {
    return this.getToken(ArgdownParser.OUTGOING_SUPPORT_START, 0);
};

OutgoingSupportContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

OutgoingSupportContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArgdownListener ) {
        listener.enterOutgoingSupport(this);
	}
};

OutgoingSupportContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArgdownListener ) {
        listener.exitOutgoingSupport(this);
	}
};




ArgdownParser.OutgoingSupportContext = OutgoingSupportContext;

ArgdownParser.prototype.outgoingSupport = function() {

    var localctx = new OutgoingSupportContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, ArgdownParser.RULE_outgoingSupport);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 53;
        this.match(ArgdownParser.OUTGOING_SUPPORT_START);
        this.state = 54;
        this.statement();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OutgoingAttackContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArgdownParser.RULE_outgoingAttack;
    return this;
}

OutgoingAttackContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OutgoingAttackContext.prototype.constructor = OutgoingAttackContext;

OutgoingAttackContext.prototype.OUTGOING_ATTACK_START = function() {
    return this.getToken(ArgdownParser.OUTGOING_ATTACK_START, 0);
};

OutgoingAttackContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

OutgoingAttackContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArgdownListener ) {
        listener.enterOutgoingAttack(this);
	}
};

OutgoingAttackContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArgdownListener ) {
        listener.exitOutgoingAttack(this);
	}
};




ArgdownParser.OutgoingAttackContext = OutgoingAttackContext;

ArgdownParser.prototype.outgoingAttack = function() {

    var localctx = new OutgoingAttackContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, ArgdownParser.RULE_outgoingAttack);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 56;
        this.match(ArgdownParser.OUTGOING_ATTACK_START);
        this.state = 57;
        this.statement();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArgdownParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.string = function() {
    return this.getTypedRuleContext(StringContext,0);
};

StatementContext.prototype.statementTitle = function() {
    return this.getTypedRuleContext(StatementTitleContext,0);
};

StatementContext.prototype.statementTitleDefinition = function() {
    return this.getTypedRuleContext(StatementTitleDefinitionContext,0);
};

StatementContext.prototype.relations = function() {
    return this.getTypedRuleContext(RelationsContext,0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArgdownListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArgdownListener ) {
        listener.exitStatement(this);
	}
};




ArgdownParser.StatementContext = StatementContext;

ArgdownParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, ArgdownParser.RULE_statement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 64;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.state = 59;
            this.string();
            break;

        case 2:
            this.state = 60;
            this.statementTitle();
            break;

        case 3:
            this.state = 61;
            this.statementTitleDefinition();
            this.state = 62;
            this.string();
            break;

        }
        this.state = 67;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ArgdownParser.INDENT) {
            this.state = 66;
            this.relations();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArgumentTitleDefinitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArgdownParser.RULE_argumentTitleDefinition;
    return this;
}

ArgumentTitleDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgumentTitleDefinitionContext.prototype.constructor = ArgumentTitleDefinitionContext;

ArgumentTitleDefinitionContext.prototype.argumentTitle = function() {
    return this.getTypedRuleContext(ArgumentTitleContext,0);
};

ArgumentTitleDefinitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArgdownListener ) {
        listener.enterArgumentTitleDefinition(this);
	}
};

ArgumentTitleDefinitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArgdownListener ) {
        listener.exitArgumentTitleDefinition(this);
	}
};




ArgdownParser.ArgumentTitleDefinitionContext = ArgumentTitleDefinitionContext;

ArgdownParser.prototype.argumentTitleDefinition = function() {

    var localctx = new ArgumentTitleDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, ArgdownParser.RULE_argumentTitleDefinition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 69;
        this.argumentTitle();
        this.state = 70;
        this.match(ArgdownParser.T__0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArgumentTitleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArgdownParser.RULE_argumentTitle;
    return this;
}

ArgumentTitleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgumentTitleContext.prototype.constructor = ArgumentTitleContext;

ArgumentTitleContext.prototype.string = function() {
    return this.getTypedRuleContext(StringContext,0);
};

ArgumentTitleContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArgdownListener ) {
        listener.enterArgumentTitle(this);
	}
};

ArgumentTitleContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArgdownListener ) {
        listener.exitArgumentTitle(this);
	}
};




ArgdownParser.ArgumentTitleContext = ArgumentTitleContext;

ArgdownParser.prototype.argumentTitle = function() {

    var localctx = new ArgumentTitleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, ArgdownParser.RULE_argumentTitle);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 72;
        this.match(ArgdownParser.T__1);
        this.state = 73;
        this.string();
        this.state = 74;
        this.match(ArgdownParser.T__2);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementTitleDefinitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArgdownParser.RULE_statementTitleDefinition;
    return this;
}

StatementTitleDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementTitleDefinitionContext.prototype.constructor = StatementTitleDefinitionContext;

StatementTitleDefinitionContext.prototype.statementTitle = function() {
    return this.getTypedRuleContext(StatementTitleContext,0);
};

StatementTitleDefinitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArgdownListener ) {
        listener.enterStatementTitleDefinition(this);
	}
};

StatementTitleDefinitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArgdownListener ) {
        listener.exitStatementTitleDefinition(this);
	}
};




ArgdownParser.StatementTitleDefinitionContext = StatementTitleDefinitionContext;

ArgdownParser.prototype.statementTitleDefinition = function() {

    var localctx = new StatementTitleDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, ArgdownParser.RULE_statementTitleDefinition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 76;
        this.statementTitle();
        this.state = 77;
        this.match(ArgdownParser.T__0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementTitleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArgdownParser.RULE_statementTitle;
    return this;
}

StatementTitleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementTitleContext.prototype.constructor = StatementTitleContext;

StatementTitleContext.prototype.string = function() {
    return this.getTypedRuleContext(StringContext,0);
};

StatementTitleContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArgdownListener ) {
        listener.enterStatementTitle(this);
	}
};

StatementTitleContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArgdownListener ) {
        listener.exitStatementTitle(this);
	}
};




ArgdownParser.StatementTitleContext = StatementTitleContext;

ArgdownParser.prototype.statementTitle = function() {

    var localctx = new StatementTitleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, ArgdownParser.RULE_statementTitle);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 79;
        this.match(ArgdownParser.T__3);
        this.state = 80;
        this.string();
        this.state = 81;
        this.match(ArgdownParser.T__4);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TagContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArgdownParser.RULE_tag;
    return this;
}

TagContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TagContext.prototype.constructor = TagContext;

TagContext.prototype.CHAR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ArgdownParser.CHAR);
    } else {
        return this.getToken(ArgdownParser.CHAR, i);
    }
};


TagContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArgdownListener ) {
        listener.enterTag(this);
	}
};

TagContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArgdownListener ) {
        listener.exitTag(this);
	}
};




ArgdownParser.TagContext = TagContext;

ArgdownParser.prototype.tag = function() {

    var localctx = new TagContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, ArgdownParser.RULE_tag);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 83;
        this.match(ArgdownParser.T__5);
        this.state = 85; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 84;
            this.match(ArgdownParser.CHAR);
            this.state = 87; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===ArgdownParser.CHAR);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StringContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArgdownParser.RULE_string;
    return this;
}

StringContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StringContext.prototype.constructor = StringContext;

StringContext.prototype.CHAR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ArgdownParser.CHAR);
    } else {
        return this.getToken(ArgdownParser.CHAR, i);
    }
};


StringContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArgdownListener ) {
        listener.enterString(this);
	}
};

StringContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArgdownListener ) {
        listener.exitString(this);
	}
};




ArgdownParser.StringContext = StringContext;

ArgdownParser.prototype.string = function() {

    var localctx = new StringContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, ArgdownParser.RULE_string);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 90; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 89;
            this.match(ArgdownParser.CHAR);
            this.state = 92; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===ArgdownParser.CHAR);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.ArgdownParser = ArgdownParser;
