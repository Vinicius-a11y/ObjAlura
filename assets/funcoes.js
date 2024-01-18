const cliente = {
	nome: "Joao",
	idade: 22,
	email: "joao@firma.com",
	telefone: ["19928484849", "19992892871"],
	saldo: 200,
	efetuaPagamento: function (valor) {
		if (valor > this.saldo) {
			console.log("Saldo insuficiente");
		} else {
			this.saldo -= valor;
			console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`);
		}
	},
};

cliente.efetuaPagamento(50);
