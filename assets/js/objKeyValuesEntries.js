/*
    Usando o Object (usados em arrays e objetos), Key, Values e Entries
*/

/*
let i = [ 'Item 1', 'Item 2', 'Item 3',  ];

Mostra os index do Array
console.log(Object.keys(i));

Mostra os valores dentro do Array
console.log(Object.values(i));

Mostra um array e dentro do mesmo, seus respectivos valores (index e valor)
console.log(Object.entries(i));
*/

//Usando em objeto, com as mesmas funçõe  do código acima
let pessoa = {
    nome: 'Beltrano',
    sobrenome: 'Da Silva',
    idade: 43,
    action: (x, y) => x + y
};

console.log(Object.entries(pessoa));