class KitTurbo{
    private kitPadaria:number;
    constructor(){
        this.kitPadaria = 0
    }
    public getInstall(): number{
        return this.kitPadaria
    }
    public setInstall(): void{
        this.kitPadaria = 150
    }
}

class Carros extends KitTurbo{
    model:string;
    factory:string;
    power:number;
    private ligado:boolean;

    constructor(model:string,factory:string,power:number){
        super()
        this.model = model;
        this.factory = factory;
        this.power = power;
        this.ligado = false
    }

    
    public get_ligado(): string {
        if(this.ligado === true){
            return `status: ${this.ligado} - Carro ligado.`
        }else{
            return `status: ${this.ligado} - Carro desligado.`
        }
    }

    public set_ligado(question:string): void{
        if(question == "yep"){
            this.ligado = true;
        }
    }
}



const meuNovoCarro = new Carros("CivicSI", "Honda",250)
console.log(`Carro:${meuNovoCarro.model} Potencia: ${meuNovoCarro.power}`)
meuNovoCarro.setInstall()
console.log(`kit turbo instalado: Potencia atual - ${meuNovoCarro.getInstall() + meuNovoCarro.power}`)
meuNovoCarro.set_ligado("yep")
console.log(meuNovoCarro.get_ligado())