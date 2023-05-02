class Garagem{
    data:object[]
    constructor(){
        this.data = []
    }



    //methods

    insertData(model:string,factory:string,motor:string,housePower:string):void{
        const carro = this.createCar(model,factory,motor,housePower)
        this.data.push(carro)
    }



    createCar(model:string,factory:string,motor:string,housePower:string):object{
        const components = {}
        let idx = this.data.length+1
        components['id'] = idx
        components['model'] = model
        components['factory'] = factory
        components['motor'] = motor
        components['housePower'] = housePower 
        return components
    }

    selectAll(): void {
        for (let x = 0; x <= this.data.length; x++) {
            for (let chave in this.data[x]) {
                console.log(` ${chave} -> ${this.data[x][chave]}`)
                if (chave === 'housePower') {
                    console.log('\n ----------------')
                }

            }
        }

    }

}

//main

const minhaGaragem = new Garagem()
minhaGaragem.insertData("Golf GTI","Volks","MK4","300cv")
minhaGaragem.insertData("Civic SI","Honda","VTEC","250cv")
minhaGaragem.insertData("Marea", "Fiat", "HLX 2.4 20V", "160cv")
minhaGaragem.selectAll()

