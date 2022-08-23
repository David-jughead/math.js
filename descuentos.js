const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

// const couponsObj = {
//     'JuanDC_es_Batman': 30,
//     '3456789': 25,
//     '123': 15,
// };

const couponsList = [];
couponsList.push({
    name: 'JuanDC_es_Batman',
    discount: 30,
});
couponsList.push({
    name: 'pero_es_un_secreto',
    discount: 25,
});
couponsList.push({
    name: 'no_le_digas_a_nadie',
    discount: 15,
});

function calcularPrecioConDescuento() {
    const price = Number(inputPrice.value);
    const coupon = inputCoupon.value;
    
    if (!price || !coupon) {
        pResult.innerHTML = 'CHANCLA por favor llena el formulario';
        return;
    }
    
    let discount;

    function isCouponInArray(couponElement) {
        return couponElement.name == coupon;
    }

    const couponInArray = couponsList.filter(isCouponInArray)

    if (couponInArray.length > 0) {
        discount = couponInArray[0].discount;
    } else {
        pResult.innerHTML = 'El cupon no es valido';
        return;
    }

    console.log({
        coupon,
        discount,
        couponInArray,
        couponsList,
    })

    // if (couponsObj[coupon]) {
    //     discount = couponsObj[coupon];
    // } else {
    //     pResult.innerHTML = 'El cupon no es valido';
    //     return;
    // }

    // if (coupon == 'JuanDC_es_Batman') {
    //     discount = 30;
    // } else if (coupon == 'no_le_digas_a_nadie ') {
    //     discount = 25
    // } else {
    //     pResult.innerHTML = 'El cupon no es valido';
    //     return;
    // }

   

    const newPrice = (price * (100 - discount)) / 100;

    pResult.innerHTML = 'El nuevo precio con descuento es $' + newPrice;
}