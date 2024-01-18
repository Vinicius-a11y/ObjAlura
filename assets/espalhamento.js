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
