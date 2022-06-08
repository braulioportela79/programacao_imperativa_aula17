// 1. Crie um array de números pares, e utilizando a função .map() nesse array, crie um novo array com apenas números ímpares.
let numPar = [10, 20, 40, 60, 80];
let numImpar = numPar.map(num => num + 1);
console.log(numImpar);

// 2. Crie um array de nomes, que possua dois índices com o nome Maria. Utilize o .filter() para obter apenas esses dois índices com o nome Maria.
let nomes = ["Pedro", "João", "Maria", "Alberto", "Maria"];
let maria = nomes.filter(nome => nome === "Maria");
console.log(maria);

// 3. Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.
// Exemplo [1,5,9,3,7] => “1 – 5 – 9 – 3 – 7”
let arrayNum = [1, 5, 9, 3, 7];
let stringNum = arrayNum.reduce((acc, cur) => {
    return `${acc} - ${cur}`
})
console.log(stringNum);

// 4. Crie um array de animais, após isso passe por cada índice utilizando o .forEach() e imprima a frase “O animal é NOME_DO_ANIMAL”.
let animais = ["Cachorro", "Gato", "Vaca", "Cavalo"];
animais.forEach(animal => console.log(`O animal é ${animal}`));