const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

function calcularPrecioConDescuento() {
    const price = Number(inputPrice.value);
    const discount = Number(inputDiscount.value);

    if (!price || !discount) {
        pResult.innerHTML = 'CHANCLA por favor llena el formulario';
        return;
    }

    if (discount > 100) {
        pResult.innerHTML = 'Aja, ya quisieras, no te vamos a dar plata, PAGA!';
        return;
    }

    const newPrice = (price * (100 - discount)) / 100;

    pResult.innerHTML = 'El nuevo precio con descuento es $' + newPrice;
}