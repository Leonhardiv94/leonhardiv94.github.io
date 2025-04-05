const dia = new Date().getDay();
function esFinDeSemana() {
    if (dia===0 || dia===6) return true;
    else return false
}
let valorSrc;
if (esFinDeSemana()===true) valorSrc = 'CaritaFeliz.jpg';
else valorSrc = 'CaritaTriste.jpg';

const mensaje = esFinDeSemana() ? '¡Diviertete!' : '¡A trabajar!';

function queDia(){
    const nombreDia = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
    return nombreDia[dia];
}

const nombre = 'Leonhard'
function queDia1(nombre){
    const nombreDia = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
    return `Hola ${nombre}! Feliz ${nombreDia[dia]}`;
}

function cuantosDias(año, mes, dia, NombreEvento){
    const hoy = new Date();
    const miliSegEnUnDia = 1000*60*60*24;
    hoy.setHours(0,0,0,0);
    const fechaEvento = new Date(año, mes -1, dia)
    //const diferenciaHoras = Math.abs(fechaEvento.getTimezoneOffset()/60)-Math.abs(hoy.getTimezoneOffset()/60);
    //console.log(diferenciaHoras);

    if (fechaEvento > hoy){
        return `Faltan ${(fechaEvento.getTime()- hoy.getTime())/miliSegEnUnDia} dias para ${NombreEvento}`;
    } else {
        return 'La fecha ya paso'
    }
}

document.getElementById('output4').innerHTML = cuantosDias(2025,12,25,'Navidad');

document.getElementById('carita').src = valorSrc;
document.getElementById('output1').innerHTML = mensaje;
document.getElementById('output2').innerHTML = 'Hoy es ' + queDia();
document.getElementById('output3').innerHTML = queDia1(nombre);
console.log(new Date());
console.log(new Date().setHours(0,0,0,0));
console.log(new Date(2025,12-1,25).setHours(0,0,0,0));