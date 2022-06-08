// 1. Crie uma função que receba um array composto por números e retorna uma nova matriz (array) com todos os valores divididos pela soma de toda a matriz, usando map() e reduce().

let divisaoArray = array => {
    let novaArray = array.map(num => num / array.reduce((acc, cur) => {
        return acc + cur;
    }));
    console.log(novaArray);
};

let arrayNum = [1, 2, 3];
divisaoArray(arrayNum);

// 2. Crie uma função que receba um array de palavras e um número, e que retorna uma matriz (array) com apenas as palavras que têm mais do que uma quantidade de letras maior do que o número informado. (verifique como funciona o método filter ())

let separarPalavras = (array, num) => {
    let novaArray = array.filter(nomes => nomes.length > num);
    console.log(novaArray);
};

let cores = ["Azul", "Vermelho", "Verde", "Amarelo", "Branco"];
separarPalavras(cores, 6);

// 3. Crie um array de objetos literais, onde cada objeto será um aluno e terá dois atributos: nome e nota. Crie duas funções que ordenam o array: uma ordenará os alunos em ordem alfabética e a outra o fará por nota, da mais alta para a mais baixa. (Analise qual método seria apropriado para este caso. Recomendamos que você consulte a documentação do MDN: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)

let ordernarNomeAluno = obj => {
    let novoObj = obj.sort((a, b) => {
        if (a.nome > b.nome) {
            return 1;
        };
        if (a.nome < b.nome) {
            return -1;
        };
    });
    console.log(novoObj);
};

let ordernarNotaAluno = obj => {
    let novoObj = obj.sort((a, b) => {
        return b.nota - a.nota;
    });
    console.log(novoObj);
};

let alunos = [
    { nome: 'Maria', nota: 5 },
    { nome: 'Paulo', nota: 9 },
    { nome: 'Eduardo', nota: 8 },
    { nome: 'Carlos', nota: 10 },
    { nome: 'Bianca', nota: 3 }
];

ordernarNomeAluno(alunos);
ordernarNotaAluno(alunos);