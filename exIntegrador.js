// Exercício Integrador

// Temos que fazer um sistema para um Agricultor controlar suas vendas. Ele tem um controle de vendas em um caderno, onde os produtos estão organizados por nome, preço e quantidade vendida.
// Portanto, crie um array de objetos literais com essas informações. No sistema, você tem que adicionar uma função (ou várias) que realize os seguintes passos:
let estoque = [
    { produto: 'Maçã', preco: 5, qtdVendida: 50 },
    { produto: 'Banana', preco: 3, qtdVendida: 150 },
    { produto: 'Laranja', preco: 2, qtdVendida: 80 },
    { produto: 'Abacaxi', preco: 8, qtdVendida: 40 }
];

// 1. Calcular o lucro total de todos os produtos;

let lucroTotal = () => {
    let getTotal = (total, item) => {
        return total + (item.preco * item.qtdVendida);
    };
    let lucroTotal = estoque.reduce(getTotal, 0);
    console.log(`O lucro total de todos os produtos é R$${lucroTotal}`);
};
lucroTotal();

// 2. Permitir pesquisar um produto pelo nome e calcular seu lucro total;

let lucroProduto = item => {
    let produto = estoque.filter(nome => nome.produto === item);
    let getTotal = (total, item) => {
        return total + (item.preco * item.qtdVendida);
    };
    let totalProduto = produto.reduce(getTotal, 0);
    console.log(`O lucro total de ${item} é R$${totalProduto}`);
}
lucroProduto('Banana');

// 3. Permite receber um valor e indicar todos os produtos que venderam mais que esse valor;

let produtoVendido = valor => {
    estoque.map(e => {
        if (e.preco * e.qtdVendida > valor)
            console.log(`Produto vendido acima de R$${valor}: ${e.produto}`);
    });
};
produtoVendido(200);

// 4. Classifique todos os produtos pela quantidade de dinheiro que geraram.

let maiorLucro = () => {
    estoque.sort(function (a, b) {
        if (a.preco * a.qtdVendida < b.preco * b.qtdVendida) {
            return 1;
        };
        if (a.preco * a.qtdVendida > b.preco * b.qtdVendida) {
            return -1;
        };
    });
    console.log(estoque);
}
maiorLucro();

// 5. Encontre um produto e atribua a ele um novo valor (reutilize o código que permite encontrar o produto pelo nome).
let novoPreco = (item, valor) => {
    let produto = estoque.filter((nome) => {
        if (nome.produto === item) {
            nome.preco = valor;
        };
        return nome.produto === item;
    }
    );
    console.log(produto);
};
novoPreco('Abacaxi', 10);

// 6. Calcule o lucro total após pagar 45% do lucro em impostos.

let lucroTotalImposto = () => {
    let getTotal = (total, item) => {
        return total + (item.preco * item.qtdVendida);
    };
    let lucroTotal = estoque.reduce(getTotal, 0);
    let lucroTotalImposto = lucroTotal - lucroTotal * (45 / 100);
    console.log(`O lucro total de todos os produtos após pagar 45% de imposto é R$${lucroTotalImposto}`);
};
lucroTotalImposto();