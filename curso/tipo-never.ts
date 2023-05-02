// ela não retorna nada, assim como void mais usada para lançar erros. 
function criarErro():never{
    throw new Error("Erros qualquer")
}

criarErro()