import GramLexer from "./generated/gramLexer.js";
import GramParser from "./generated/gramParser.js";
import { CustomgramListener } from "./CustomgramListener.js";
import { CustomgramVisitor2 } from "./CustomgramVisitor2.js";
import antlr4, { CharStreams, CommonTokenStream, ParseTreeWalker } from "antlr4";
import readline from 'readline';
import fs from 'fs';

async function main() {
    let input;

    // Intento leer la entrada desde el archivo input - en forma sincrona.
    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        // Si no es posible leer el archivo, solicitar la entrada del usuario por teclado
        input = await leerCadena(); // Simula lectura síncrona
        console.log(input);
    }

    // Proceso la entrada con el analizador e imprimo el arbol de analisis en formato texto
    let inputStream = CharStreams.fromString(input);
    let lexer = new GramLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new GramParser(tokenStream);
    let tree = parser.program();

    //agregado
    const chars = new antlr4.InputStream(input);
    const lexer2 = new GramLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer2);
    
    // Verifico si se produjeron errores
    if (parser.syntaxErrorsCount > 0) {
        console.error("\nSe encontraron errores de sintaxis en la entrada.");
    } 
    else {
        console.log("\nEntrada válida.");

// Mostrar tokens
 tokens.fill();
    for (const token of tokens.tokens) {

        if (token.type !== -1) {
             const tokenName = lexer2.symbolicNames[token.type];
             console.log(`Token: ${tokenName}, Lexema: '${token.text}'`);
  }
}

        const cadena_tree = tree.toStringTree(parser.ruleNames);
        console.log(`Árbol de derivación: ${cadena_tree}`);

        // Utilizo un listener y un walker para recorrer el arbol e indicar cada vez que reconoce una sentencia (stat)
        //const listener = new CustomgramListener();
        // ParseTreeWalker.DEFAULT.walk(listener, tree);
        // Utilizo un visitor para visitar los nodos que me interesan de mi arbol
        
        const visitor = new CustomgramVisitor2();
        visitor.visit(tree);   
    }
}

function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question("Ingrese una cadena: ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

// Ejecuta la función principal
main();