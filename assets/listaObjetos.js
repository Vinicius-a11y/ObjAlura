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

cliente.endereco.push({
	rua: "R Aristel valente",
	numero: 455,
	apartamento: false,
});

const listApenasAp = cliente.endereco.filter((endereco) => endereco.apartamento === true);

console.log(listApenasAp);
