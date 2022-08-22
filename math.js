console.group('Cuadrado')

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;

const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado,
});

function calcularCuadrado(lado) {
    return {
        perimetro: lado * 4,
        area: lado * lado,
    }
}

console.groupEnd('Cuadrado')

console.group('Triangulo')

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

function calcularTriangulo(lado1, lado2, base, altura) {
    return {
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2,
    };
}

function calcularAlturaTriangulo(lado1, base) {
    if (lado1 == base) {
        console.warn('Este no es un triangulo isoceles');
    } else {
        return Math.sqrt( Math.pow(lado1, 2) - ( (Math.pow(base, 2)) ) / 4);
    }
}

function calcularAlturaTrianguloEscaleno(lado1, lado2, base) {
    const x = (Math.pow(lado2, 2) - Math.pow(lado1, 2) + Math.pow(base, 2)) / (2 * base);
    const h = Math.sqrt(Math.pow(lado2, 2) - Math.pow(x, 2));

    return h;
}

console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTrianguloBase,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo,
})

console.groupEnd('Triandgulo')

console.group('Circle')

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = 3.1415;

const circuferencia = diametroCirculo * PI;
const areacirculo = (radioCirculo ** 2) * PI;

console.log({
    radioCirculo,
    diametroCirculo,
    PI,
    circuferencia,
    areacirculo,
});

function calcularCirculo(radio) {
    const diametro = radio * 2;
    const radioAlcuadrado = Math.pow(radio, 2);
    
    return {
        circuferencia: diametro * Math.PI,
        area: radioAlcuadrado * Math.PI,
    };
} 

console.groupEnd('Circle')