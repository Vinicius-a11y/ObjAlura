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

const chavesDoObj = Object.keys(cliente);

console.log(chavesDoObj);

if (!chavesDoObj.includes["endereco"]) {
	console.error("Erro. é necessario ter um endereço cadastrado");
}
