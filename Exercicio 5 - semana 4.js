const senhas = ["abc123", "super-secreta", "42", "senha", "007"];

const testaSenha = () => {
  console.log(
    senhas.map((senha) => {
      if (senha.length >= 4 && senha.length <= 10) {
        console.log("true");
      } else {
        console.log("false");
      }
    })
  );
};

testaSenha();
