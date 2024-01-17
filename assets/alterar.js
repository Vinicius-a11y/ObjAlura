const pessoa = {
	nome: "Luma",
	profissao: "Engenheira",
};

console.log(pessoa.nome);

console.log(pessoa.telefone);

pessoa.telefone = "19 992892871";

console.log(pessoa.telefone);

pessoa.nome = "Luma Silva";

console.log(pessoa);

// const novaPessoa = {
// 	nome: "Pedro",
// };

// pessoa = novaPessoa;
// Não conseguimos altetar a const tentando atribuir um valor a ela
