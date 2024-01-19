const clientes = requiret("./clientes.json");

function filtrarApartamentoSemComplemento(clientes) {
	return clientes.filter((clientes) => {
		return clientes.endereco.apartamento && !clientes.endereco.hasOwProperty("complemento");
	});
}

const filtrados = filtrarApartamentoSemComplemento(clientes);

console.log(filtrados);
