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

function mediaConVar(numeros){
    var suma=0;
    for (var indice = 0; indice < numeros.length; indice +=1){
        suma += numeros[indice];
    }
    var media = suma/numeros.length;
    return `Los ${numeros.length} numeros tienen suma= ${suma} y media= ${media}. El indice es ${indice}`;
}

function leeFormulario(){
    document.getElementById('output5').innerHTML = `La fecha seleccionada es: ${document.getElementById('fecha').value}`
    const hoy = new Date();
    const miliSegEnUnDia = 1000*60*60*24;
    hoy.setHours(0,0,0,0);
    const fechaEvento = (new Date(document.getElementById('fecha').value));
    fechaEvento.setHours(24,0,0,0);
    //const diferenciaHoras = Math.abs(fechaEvento.getTimezoneOffset()/60)-Math.abs(hoy.getTimezoneOffset()/60);
    //hoy.setHours(hoy.getHours()- diferenciaHoras)
    if (fechaEvento > hoy){
        let diasTotales = (fechaEvento.getTime()- hoy.getTime())/miliSegEnUnDia;
        diasAbsolutos= Math.abs(diasTotales);
        document.getElementById('output4').innerHTML = `Faltan ${diasAbsolutos} dias para la fecha`;
    } else {
        document.getElementById('output4').innerHTML = 'La fecha ya paso'
    }
}


document.getElementById('carita').src = valorSrc;
document.getElementById('output1').innerHTML = mensaje;
document.getElementById('output2').innerHTML = 'Hoy es ' + queDia();
document.getElementById('output3').innerHTML = queDia1(nombre);
console.log(new Date());
console.log(new Date().setHours(0,0,0,0));
console.log(new Date(2025,12-1,25).setHours(0,0,0,0));
console.log(mediaConVar([84,36,61,67,22,20,22,16,76,54]));
