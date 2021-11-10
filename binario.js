//funcional apenas para numeros naturais
function traduzBinario(nNatural){
    var bin =[];
    var num = nNatural;

    while (divInt !=0){
        var divInt = Math.floor(num / 2);//Retorna a parte inteira da divisão
        bin.unshift(num%2);//adiciona o resto da divisão (0 ou 1) ao início do array  
        num = divInt;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
    }
    console.log(bin.join(''));// .join('') transforma o array em string e exclui as virgulas do array
}     

var nNatural = 986;
console.log(nNatural);
traduzBinario(nNatural);