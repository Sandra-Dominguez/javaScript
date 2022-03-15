//Codigo del cuadrado
console.group("Cuadrados");

//const ladoCuadrado =  5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");


function perimetroCuadrado(lado) {
    return lado * 4;
}

//console.log("El perimetro del cuadrado es: "+ perimetroCuadrado + " cm");

function AreaCuadrado(lado) {
    return lado * lado;
}
//console.log("El area del cuadrado es: "+ AreaCuadrado + " cm^2");

console.groupEnd();

//Codigo del triangulo

/*console.group("Trinagulo");
const ladoTriangulo1 =  6;
const ladoTriangulo2 =  6;
const baseTriangulo =  4;

console.log
("Los lados del triangulo miden: " 
+ ladoTriangulo1 
+ "cm, " 
+ ladoTriangulo2 
+ "cm, "
 + baseTriangulo
+ "cm, "
);
*/
//const alturaTriangulo = 5.5;
//console.log("La altura del triangulo: " + alturaTriangulo + " cm");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}


//console.log("El perimetro del triangulo es: "+ perimetroTriangulo + " cm");
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
//console.log("El area del triangulo es: "+ areaTriangulo + " cm^2");

console.groupEnd();


//Codigo del circulo
console.group("Circulos");
//Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es : " + radioCirculo + "cm");
//Diametro
function diametroCirculo(radio) {
    return radio * 2;
}
//console.log("El diametro del circulo es : " + diametroCirculo+ "cm");
//Pi
const PI = Math.PI;
//console.log("El valor de PI es : " + PI );
//Circuferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
//console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");
//Area

//const areaCirculo =(radioCirculo * radioCirculo) * PI  ;
function areaCirculo(radio) {
    return (radio * radio) * PI;
}
//console.log("El area del circulo es : " + areaCirculo + "cm^2");


console.groupEnd();
//Caulcular la altura de un triangulo isoaceles.
/*console.group("triangulo-isosceles");
    function trianguloIsosceles (lon1, log2 ,base3){
       if (long1 != long2){
           console.error("Los lados a y b o son igualaes");
       }
       else{

       }
        h=raiz a^2-b^2/4
    }
console.groupEnd();*/

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;


    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;


    const area = AreaCuadrado(value);
    alert(area);
}