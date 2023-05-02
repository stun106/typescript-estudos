//Tipos básicos (aqui ocorre inferencia de tipos)
const nome: string = 'josé'; // Qualquer tipode de string
const idade: number =  30; // 10, 1.57, -5.55
const adulto: boolean = true; // true ou false
const simbolo: symbol = Symbol('****') // symbol

// tipos de arrays
const arrayDeNumbero: number[] = [1,2,5,3,5];
const arrayDeString: string[] = ["josé","maria","joão"];

//objetos
const pessoa: {nome:string, idade:number, adulto?:boolean} ={
    nome : "josé",
    idade : 30,
}

//funções 
function soma(x:number, y:number){
    return x + y
}

const soma2: (x:number, y:number) => number = (x, y) => x + y
