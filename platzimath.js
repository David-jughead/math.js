function esPar(lista) {
    return !(lista.length % 2);
}
function esImpar(lista) {
    return lista.length % 2;
}

function calcularMediana(lista) {
    const listaEsPar = esPar(lista);

    if (listaEsPar) {
        // ...
    } else {
        const indexMitadListaImpar =  Math.floor(lista.length / 2);
        console.log(indexMitadListaImpar);
        console.log(lista[indexMitadListaImpar]);
    }
}

function calcularPromedio(lista) {
    function sumarTodosElementos(valorAcumulado, nuevoValor) {
        return valorAcumulado + nuevoValor;
    }

    const sumaLista = lista.reduce(sumarTodosElementos);
    const promedio = sumaLista / lista.length;
    console.log(promedio)
    return promedio;
}