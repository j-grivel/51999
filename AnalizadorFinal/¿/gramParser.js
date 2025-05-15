// Generated from gram.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import gramListener from './gramListener.js';
const serializedATN = [4,1,18,72,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,4,0,18,8,0,11,0,12,0,19,1,1,1,1,1,1,3,1,25,8,
1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,
4,1,4,1,4,1,4,1,5,1,5,4,5,50,8,5,11,5,12,5,51,1,5,1,5,1,6,1,6,1,6,5,6,59,
8,6,10,6,12,6,62,9,6,1,7,1,7,1,7,1,7,1,7,1,7,3,7,70,8,7,1,7,0,0,8,0,2,4,
6,8,10,12,14,0,1,1,0,12,15,70,0,17,1,0,0,0,2,24,1,0,0,0,4,26,1,0,0,0,6,34,
1,0,0,0,8,39,1,0,0,0,10,47,1,0,0,0,12,55,1,0,0,0,14,69,1,0,0,0,16,18,3,2,
1,0,17,16,1,0,0,0,18,19,1,0,0,0,19,17,1,0,0,0,19,20,1,0,0,0,20,1,1,0,0,0,
21,25,3,4,2,0,22,25,3,6,3,0,23,25,3,8,4,0,24,21,1,0,0,0,24,22,1,0,0,0,24,
23,1,0,0,0,25,3,1,0,0,0,26,27,5,1,0,0,27,28,3,10,5,0,28,29,5,2,0,0,29,30,
5,3,0,0,30,31,3,12,6,0,31,32,5,4,0,0,32,33,5,5,0,0,33,5,1,0,0,0,34,35,5,
16,0,0,35,36,5,6,0,0,36,37,3,12,6,0,37,38,5,5,0,0,38,7,1,0,0,0,39,40,5,7,
0,0,40,41,5,8,0,0,41,42,5,9,0,0,42,43,5,3,0,0,43,44,3,12,6,0,44,45,5,4,0,
0,45,46,5,5,0,0,46,9,1,0,0,0,47,49,5,10,0,0,48,50,3,2,1,0,49,48,1,0,0,0,
50,51,1,0,0,0,51,49,1,0,0,0,51,52,1,0,0,0,52,53,1,0,0,0,53,54,5,11,0,0,54,
11,1,0,0,0,55,60,3,14,7,0,56,57,7,0,0,0,57,59,3,14,7,0,58,56,1,0,0,0,59,
62,1,0,0,0,60,58,1,0,0,0,60,61,1,0,0,0,61,13,1,0,0,0,62,60,1,0,0,0,63,70,
5,16,0,0,64,70,5,17,0,0,65,66,5,3,0,0,66,67,3,12,6,0,67,68,5,4,0,0,68,70,
1,0,0,0,69,63,1,0,0,0,69,64,1,0,0,0,69,65,1,0,0,0,70,15,1,0,0,0,5,19,24,
51,60,69];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class gramParser extends antlr4.Parser {

    static grammarFileName = "gram.g4";
    static literalNames = [ null, "'do'", "'while'", "'('", "')'", "';'", 
                            "'='", "'console'", "'.'", "'log'", "'{'", "'}'", 
                            "'*'", "'/'", "'+'", "'-'" ];
    static symbolicNames = [ null, "DO", "WHILE", "LPAREN", "RPAREN", "SEMI", 
                             "ASSIGN", "CONSOLE", "DOT", "LOG", "LCURLY", 
                             "RCURLY", "MUL", "DIV", "ADD", "SUB", "ID", 
                             "NUMBER", "WS" ];
    static ruleNames = [ "program", "statement", "doWhileStatement", "assignmentStatement", 
                         "consoleStatement", "block", "expression", "term" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = gramParser.ruleNames;
        this.literalNames = gramParser.literalNames;
        this.symbolicNames = gramParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, gramParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 16;
	            this.statement();
	            this.state = 19; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 65666) !== 0));
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
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, gramParser.RULE_statement);
	    try {
	        this.state = 24;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 21;
	            this.doWhileStatement();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 22;
	            this.assignmentStatement();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 23;
	            this.consoleStatement();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
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
	}



	doWhileStatement() {
	    let localctx = new DoWhileStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, gramParser.RULE_doWhileStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        this.match(gramParser.DO);
	        this.state = 27;
	        this.block();
	        this.state = 28;
	        this.match(gramParser.WHILE);
	        this.state = 29;
	        this.match(gramParser.LPAREN);
	        this.state = 30;
	        this.expression();
	        this.state = 31;
	        this.match(gramParser.RPAREN);
	        this.state = 32;
	        this.match(gramParser.SEMI);
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
	}



	assignmentStatement() {
	    let localctx = new AssignmentStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, gramParser.RULE_assignmentStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this.match(gramParser.ID);
	        this.state = 35;
	        this.match(gramParser.ASSIGN);
	        this.state = 36;
	        this.expression();
	        this.state = 37;
	        this.match(gramParser.SEMI);
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
	}



	consoleStatement() {
	    let localctx = new ConsoleStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, gramParser.RULE_consoleStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this.match(gramParser.CONSOLE);
	        this.state = 40;
	        this.match(gramParser.DOT);
	        this.state = 41;
	        this.match(gramParser.LOG);
	        this.state = 42;
	        this.match(gramParser.LPAREN);
	        this.state = 43;
	        this.expression();
	        this.state = 44;
	        this.match(gramParser.RPAREN);
	        this.state = 45;
	        this.match(gramParser.SEMI);
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
	}



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, gramParser.RULE_block);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this.match(gramParser.LCURLY);
	        this.state = 49; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 48;
	            this.statement();
	            this.state = 51; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 65666) !== 0));
	        this.state = 53;
	        this.match(gramParser.RCURLY);
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
	}



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, gramParser.RULE_expression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this.term();
	        this.state = 60;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 61440) !== 0)) {
	            this.state = 56;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 61440) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 57;
	            this.term();
	            this.state = 62;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
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
	}



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, gramParser.RULE_term);
	    try {
	        this.state = 69;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 16:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 63;
	            this.match(gramParser.ID);
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 64;
	            this.match(gramParser.NUMBER);
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 65;
	            this.match(gramParser.LPAREN);
	            this.state = 66;
	            this.expression();
	            this.state = 67;
	            this.match(gramParser.RPAREN);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
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
	}


}

gramParser.EOF = antlr4.Token.EOF;
gramParser.DO = 1;
gramParser.WHILE = 2;
gramParser.LPAREN = 3;
gramParser.RPAREN = 4;
gramParser.SEMI = 5;
gramParser.ASSIGN = 6;
gramParser.CONSOLE = 7;
gramParser.DOT = 8;
gramParser.LOG = 9;
gramParser.LCURLY = 10;
gramParser.RCURLY = 11;
gramParser.MUL = 12;
gramParser.DIV = 13;
gramParser.ADD = 14;
gramParser.SUB = 15;
gramParser.ID = 16;
gramParser.NUMBER = 17;
gramParser.WS = 18;

gramParser.RULE_program = 0;
gramParser.RULE_statement = 1;
gramParser.RULE_doWhileStatement = 2;
gramParser.RULE_assignmentStatement = 3;
gramParser.RULE_consoleStatement = 4;
gramParser.RULE_block = 5;
gramParser.RULE_expression = 6;
gramParser.RULE_term = 7;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramParser.RULE_program;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof gramListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramListener ) {
	        listener.exitProgram(this);
		}
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramParser.RULE_statement;
    }

	doWhileStatement() {
	    return this.getTypedRuleContext(DoWhileStatementContext,0);
	};

	assignmentStatement() {
	    return this.getTypedRuleContext(AssignmentStatementContext,0);
	};

	consoleStatement() {
	    return this.getTypedRuleContext(ConsoleStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gramListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramListener ) {
	        listener.exitStatement(this);
		}
	}


}



class DoWhileStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramParser.RULE_doWhileStatement;
    }

	DO() {
	    return this.getToken(gramParser.DO, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	WHILE() {
	    return this.getToken(gramParser.WHILE, 0);
	};

	LPAREN() {
	    return this.getToken(gramParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(gramParser.RPAREN, 0);
	};

	SEMI() {
	    return this.getToken(gramParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gramListener ) {
	        listener.enterDoWhileStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramListener ) {
	        listener.exitDoWhileStatement(this);
		}
	}


}



class AssignmentStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramParser.RULE_assignmentStatement;
    }

	ID() {
	    return this.getToken(gramParser.ID, 0);
	};

	ASSIGN() {
	    return this.getToken(gramParser.ASSIGN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	SEMI() {
	    return this.getToken(gramParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gramListener ) {
	        listener.enterAssignmentStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramListener ) {
	        listener.exitAssignmentStatement(this);
		}
	}


}



class ConsoleStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramParser.RULE_consoleStatement;
    }

	CONSOLE() {
	    return this.getToken(gramParser.CONSOLE, 0);
	};

	DOT() {
	    return this.getToken(gramParser.DOT, 0);
	};

	LOG() {
	    return this.getToken(gramParser.LOG, 0);
	};

	LPAREN() {
	    return this.getToken(gramParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(gramParser.RPAREN, 0);
	};

	SEMI() {
	    return this.getToken(gramParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gramListener ) {
	        listener.enterConsoleStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramListener ) {
	        listener.exitConsoleStatement(this);
		}
	}


}



class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramParser.RULE_block;
    }

	LCURLY() {
	    return this.getToken(gramParser.LCURLY, 0);
	};

	RCURLY() {
	    return this.getToken(gramParser.RCURLY, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof gramListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramListener ) {
	        listener.exitBlock(this);
		}
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramParser.RULE_expression;
    }

	term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermContext);
	    } else {
	        return this.getTypedRuleContext(TermContext,i);
	    }
	};

	ADD = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(gramParser.ADD);
	    } else {
	        return this.getToken(gramParser.ADD, i);
	    }
	};


	SUB = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(gramParser.SUB);
	    } else {
	        return this.getToken(gramParser.SUB, i);
	    }
	};


	MUL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(gramParser.MUL);
	    } else {
	        return this.getToken(gramParser.MUL, i);
	    }
	};


	DIV = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(gramParser.DIV);
	    } else {
	        return this.getToken(gramParser.DIV, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof gramListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramListener ) {
	        listener.exitExpression(this);
		}
	}


}



class TermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramParser.RULE_term;
    }

	ID() {
	    return this.getToken(gramParser.ID, 0);
	};

	NUMBER() {
	    return this.getToken(gramParser.NUMBER, 0);
	};

	LPAREN() {
	    return this.getToken(gramParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(gramParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gramListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramListener ) {
	        listener.exitTerm(this);
		}
	}


}




gramParser.ProgramContext = ProgramContext; 
gramParser.StatementContext = StatementContext; 
gramParser.DoWhileStatementContext = DoWhileStatementContext; 
gramParser.AssignmentStatementContext = AssignmentStatementContext; 
gramParser.ConsoleStatementContext = ConsoleStatementContext; 
gramParser.BlockContext = BlockContext; 
gramParser.ExpressionContext = ExpressionContext; 
gramParser.TermContext = TermContext; 
