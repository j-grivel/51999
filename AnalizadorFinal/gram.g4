grammar gram;

//Gramatica
program: statement+ ;

statement: doWhileStatement
        | assignmentStatement
        | consoleStatement ;

doWhileStatement: DO block WHILE '(' expression ')' ';' ;

assignmentStatement: ID '=' expression ';' ;

consoleStatement: CONSOLE '.' LOG '(' expression ')' ';' ;

block: LCURLY statement+ RCURLY ;

expression: term (( ADD | SUB | MUL | DIV ) term)* ;

term: ID
    | NUMBER
    | '(' expression ')' ;

//Tokens
DO: 'do';
WHILE: 'while';
LPAREN: '(';
RPAREN: ')';
SEMI: ';';
ASSIGN: '=';
CONSOLE: 'console';
DOT: '.';
LOG: 'log';
LCURLY: '{';
RCURLY: '}';
MUL: '*';
DIV: '/';
ADD: '+';
SUB: '-';
ID: [a-zA-Z_][a-zA-Z_0-9]*;
NUMBER: [0-9]+;
// Ignorar espacios y saltos de línea
WS
    : [ \t\r\n]+ -> skip
    ;
