//const precioOriginal = 120;
//const descuento = 18;


function calcularPrecioConDescuentos(precio, descuento){
    const porcentajePrecioConDescuentos = 100 - descuento;
const precioConDescuento = ( precio * porcentajePrecioConDescuentos) / 100;

return precioConDescuento;

}

function onClickButton()
{
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuentos(priceValue, discountValue);


    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precion con descuento es: $" +  precioConDescuento;
}


/*
console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuentos,
    precioConDescuento,
});
*/
