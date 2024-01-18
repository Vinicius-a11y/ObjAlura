const cliente = {
	nome: "Joao",
	idade: 22,
	email: "joao@firma.com",
	telefone: ["19928484849", "19992892871"],
};

cliente.endereco = [
	{
		rua: "R. Goiania",
		numero: 375,
		apartamento: true,
		complemento: "ap 15",
	},
];

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
	console.log(`Ligando para ${telefoneComercial}`);
	console.log(`Lifando para ${telefoneResidencial}`);
}

ligaParaCliente(...cliente.telefone);

const encomenda = {
	destinatario: cliente.nome,
	...cliente.endereco[0],
};
console.log(encomenda);

// Como percorrer objetos a partir das chaves com for...in, iterando sobre as propriedades de um objeto como em um array;
// Que para extrair chaves e valores de objetos é possível utilizar métodos de Object;
// Que funções como .entries, .key e .value podem ser úteis na hora de trabalhar com objetos;
// Que o spread operator (ou sintaxe de espalhamento) pode ser uma opção para decompor objetos quando precisamos extraí-los de um array e formar um novo array.
