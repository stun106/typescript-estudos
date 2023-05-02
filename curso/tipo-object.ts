// object utilizando index unknown
// objeto aberto
const objectA:{
    chaveA: string;
    chaveB: string;
    chaveC?:string;
    [key:string]:unknown
} = {
    chaveA: 'valor A',
    chaveB: 'valorB'
};
objectA.chaveA = "outro valor"
objectA.chaveB = " nova chave"
objectA.chaveC = "chave opcional"
objectA.chaveD = "index unknown"
