/*const lista1 = [
   100,
   200,
   300,
   400,
   500,
];

let sumaLista1 = 0;                 //Recore la lista y suma
for(let i =0; i< lista1.length; i++){
    sumaLista1 = sumaLista1 + lista1[i];

}
const promedioLista1 = sumaLista1 / lista1.length;*/




function calcularMediaAritmetica(lista){
    /*let sumaLista = 0;                 //Recore la lista y suma
    for(let i =0; i< lista.length; i++){
        sumaLista = sumaLista + lista[i];
    
    }*/

    //Alternativa del for
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}