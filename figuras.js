/*cuadrado=Lado*lado 
Triangulo= Base*altura/2 
Ciruclo= pi*r^2 */

var lado, base, altura, radio, opcion, resultado;
const pi = 3.14156;

opcion = parseInt(prompt("seleccione el tipo de figura al que le quiere hallar el area : 1.Cuadrado  2.Triangulo  3. Circulo"));

switch (opcion) {
    case 1:
        lado = parseInt(prompt("ingrese el valor del lado en cm"));
        resultado = lado * lado;
        alert("el area del Cuadrado es igual a : " + resultado + " cenrimetros")
        break;

    case 2:
        base = parseInt(prompt("ingrese el valor de la base en cm"));
        altura = parseInt(prompt("ingrese el valor de la altura en cm"));
        resultado = (base * altura) / 2;
        alert("el area del Triangulo es igual a : " + resultado + " cenrimetros")
        break;

    case 3:
        radio = parseInt(prompt("ingrese el valor del radio en cm"));
        resultado = pi * radio * radio;
        alert("el area del Circulo es igual a : " + resultado + " cenrimetros")
        break;

    default:
        alert("La opcion  no es valida")
        break;
}