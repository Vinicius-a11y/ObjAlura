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

for (let chave in cliente) {
	let tipo = typeof cliente[chave];
	if (tipo !== "object" && tipo !== "function") {
		console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
	}
}
