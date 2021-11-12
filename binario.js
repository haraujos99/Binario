function traduzBinario(num){
    var bin =[];

    while (divInt !=0){
        var divInt = Math.floor(num / 2);//Retorna a parte inteira da divisão
        bin.unshift(num%2);//adiciona o resto da divisão (0 ou 1) ao início do array  
        num = divInt;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
    }
    console.log(bin.join(''));// .join('') transforma o array em string e exclui as virgulas do array
}     

function BinarioDecimal(num){
    var binInvert = [];
    var decimal = 0;

    //Inverter os termos da string e jogar no array
    for (let i = 0 ; i < num.length ; i++){

        binInvert.unshift(num[i]);
        
    }

    //Fazer a operação para transformar de volta o binário em decimal
    for (let c = 0 ; c < binInvert.length ; c++){
                            //(0 ou 1) x 2^c
        decimal = decimal + binInvert[c]*(2**c);

    }


    console.log(num);
    console.log(decimal);
}

var nDecimal = 986;
traduzBinario(nDecimal); //Transforma o decimal em binário



var nBinario = '1111011010'
BinarioDecimal(nBinario); //Transforma o binário em decimal