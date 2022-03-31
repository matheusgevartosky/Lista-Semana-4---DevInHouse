const numeros = [0, 2, 88, 56, 33, 42, 67, 3, 9, 0, 2];

const maiores = [];

const number = () => {
  numeros.find((number) => {
    if (number > 50) {
      maiores.push(number);
    }
  });
  console.log(maiores);
};

number();
