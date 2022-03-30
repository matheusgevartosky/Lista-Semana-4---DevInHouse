const arr = [1, 2, 3, 4];

const arrModificado = [];

const multiplica = () => {
  arr.map((number) => {
    arrModificado.push(number * 3);
  });
};

multiplica();
console.log(arr);
console.log(arrModificado);
