import { Parser } from "antlr4"
import gramVisitor from './generated/gramVisitor.js';
import gramParser from "./generated/gramParser.js";

export class CustomgramVisitor2 extends gramVisitor {
  constructor() {
    super();
    this.variables = {}; 
    this.memory = new Map ();
  }

 visitAssignmentStatement(ctx) {
  const id = ctx.ID().getText();
  const value = this.visit(ctx.expression());
  this.variables[id] = value;
  return value;
}


 visitConsoleStatement(ctx) {
    const value = this.visit(ctx.expression()) ;
    console.log('Salida del intérprete:' , value);
  }

  visitExpression(ctx) {
    if (ctx.term().length === 1) {
      return this.visit(ctx.term(0));
    }

    let left = this.visit(ctx.term(0));

    for (let i = 1; i < ctx.term().length; i++) {
      const operator = ctx.getChild(2 * i - 1).getText(); // '+', '-', etc.
      const right = this.visit(ctx.term(i));

      switch (operator) {
        case '+': left += right; break;
        case '-': left -= right; break;
        case '*': left *= right; break;
        case '/': left /= right; break;
      }
    }

    return left;
  }

 visitTerm(ctx) {

  const numberToken = ctx.NUMBER?.(); // ejecuta la función solo si existe
  if (numberToken) {
    return parseInt(numberToken.getText());
  }

  const idToken = ctx.ID?.();
  if (idToken) {
    const id = idToken.getText();
    return this.variables[id] ?? 0;
  }

  if (ctx.expression) {
    return this.visit(ctx.expression());
  }

  console.warn("Término no reconocido:", ctx.getText());
  return null;
}


  visitDoWhileStatement(ctx) {
    do {
      this.visit(ctx.block());
    } while (this.visit(ctx.expression()));
  }

  visitBlock(ctx) {
    for (const stmt of ctx.statement()) {
      this.visit(stmt);
    }
  }
}
export default CustomgramVisitor2;
