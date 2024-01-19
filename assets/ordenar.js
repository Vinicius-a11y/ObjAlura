const clientes = require("./clientes.json");

function ordenar(lista, propriedade) {
	const resultado = lista.sort((a, b) => {
		if (a[propriedade] < b[propriedade]) {
			return -1;
		}
		if (a[propriedade] > b[propriedade]) {
			return 1;
		}
		return 0;
	});
	return resultado;
}

const ordenadoNome = ordenar(clientes, clientes);

console.log(ordenadoNome);

// Que podemos utilizar os métodos de listas em conjunto com objetos;
// Como passamos os parâmetros e propriedades dos objetos para alguns métodos de listas;
// Vimos exemplos de como encontrar, filtrar e ordenar uma lista de objetos.
