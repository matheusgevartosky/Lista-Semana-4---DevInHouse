class Personagem{
    constructor (nome){
        this.nome = nome;
        this.vidatotal = 100
    }

    sofreuDano(percentualDano){
        this.vidatotal -= percentualDano
        console.log(this.vidatotal)
    }
    usouKitMedico(){
        if(this.vidatotal <= 90){
            this.vidatotal += 10
            console.log(this.vidatotal)
        }else{
            console.log(`Sua vida é de ${this.vidatotal}, não é necessário usar a cura`)
        }
    }
    

}

const jogador = new Personagem('Mr. Shooter');
console.log( jogador );
jogador.sofreuDano(7);
jogador.usouKitMedico();
console.log (jogador.vidatotal ); 


