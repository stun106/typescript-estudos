export function multiplicaArgs(...args:number[]):number{
    return args.reduce((flag,valor) => flag * valor,1);
}

export function concatenaStrings(...args:string[]):string{
    return args.reduce((flag,valor) => flag + valor);
}


console.log(multiplicaArgs(1,2,5,6));
console.log(concatenaStrings("jose ","antonio"," bispo ","dos Santos ","junior"))