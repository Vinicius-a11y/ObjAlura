const dados = require("./cliente.json");

console.log(dados);
console.log(typeof dados);

const clienteEmString = JSON.stringify(dados);

console.log(clienteEmString);
console.log(typeof clienteEmString);

console.log(clienteEmString.nome);

const objCliente = JSON.parse(clienteEmString);

console.log(objCliente);

// O que é o formato JSON e por qual motivo o utilizamos, como por exemplo a transmissão de dados ou armazenamento de configurações;
// Qual a sintaxe do JSON e suas limitações, como não ter variáveis ou comentários;
// Como ler um arquivo .json no Node.js;
// Como utilizar as funções nativas do Node.js para manipular um JSON.
