function semRetorno(...args:string[]):void{
    console.log(args.join(' '))
}

const pessoa = {
    nome: 'josé',
    sobrenome: 'antonio',
    
    exibirNome():void{
        console.log(this.nome + ' ' + this.sobrenome);
    }
}

semRetorno("josé","otávio","maria")
pessoa.exibirNome()

export { pessoa }