const pontos = [10, 8, 5, 4, 9, 1, 9, 10, 2, 10];

const pontosValidos = [];

const validaPontos = () => {
  pontos.filter((number) => {
    if (number > 5) {
      pontosValidos.push(number);
    }
  });
  const teste = pontosValidos.reduce((acumulo, proximo) => {
    return (acumulo += proximo);
  }, 0);
  console.log(teste);
};

validaPontos();
