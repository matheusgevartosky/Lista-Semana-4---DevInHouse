class Usuario {
  constructor(login, senha) {
    this.login = login;
    this.senha = senha;
  }

  autenticar(senhaOk) {
    return senhaOk === this.senha;
  }
}

const user = new Usuario("admin", "segredo");
console.log(user.autenticar("segredo")); // true
console.log(user.autenticar("errado")); // false
