var listaDePecas = ["Filtro do Ar","Motor","Amortecedor"]

if (listaDePecas.length < 10){
    //E possivel cadastrar
    console.log("E possivel cadastrar mais pecas")
} else {
    console.log("Nao tem mais espaco na lista")
}


let peso = 50;
if(peso<100){
    console.log("A peca deve pesar no minimo 100g")
}else {
    console.log("A peca possui peso adequado")
}


let nomePeca ="Disco de Freio"
if (nomePeca.length>3){
    console.log("Nome da peca esta adequado para o cadastro!")
}else{
    console.log("O nome deve ter mais 3 caracteres, digite um nome adequado")
}



  // = -> atribuicao de valor -> recebe
 // == -> verificacao se os valores sao iguais ->E igual?
// === -> verificacao se o valor e o tipo de valor sao iguais 

//let idade = "23"
//if (idade === "23")


switch(nomePeca.length){
    Case 0:
    console.log("O nome da peca nao pode ser vazio")
    break;

    Case 1:
    Case 2:
    Case 3:
    console.log("O nome deve ter mais de 3 caracteres, digite um nome adequado")

    default:
        console.log("Nome da peca esta adequado")
        break;
}