let x; 
if (typeof x === 'undefined') x = 20
console.log(x * 2)

export function createPerson(
    firstname:string,
    lastname?:string
):{
    //type anotation
    firstname:string;
    lastname?:string;
}{
    return {
        firstname,
        lastname
    };
}

export function squareOf(x:any){
    if (typeof x === 'number') return x * x;
    return null;
}

const squareOfTwoNum = squareOf(2);
const squareOfTwoString = squareOf("2");

if (typeof squareOfTwoNum === null){
    console.log('conta invalida')
}else{
    console.log(squareOfTwoNum)
}