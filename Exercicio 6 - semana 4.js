const notas = [8.5, 7.5, 6, 3, 8.5, 10, 10, 9, 4, 7];

const passou = [];

const filtraNota = () => {
  notas.filter((nota) => {
    if (nota >= 7) {
      passou.push(nota);
    }
  });
  console.log(passou);
};

filtraNota();
