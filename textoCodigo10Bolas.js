var probBolaNegra, probBolaRoja, probBolaAzul, numBolas;

probBolaNegra = ((5 / 10) * 100);

probBolaRoja = ((3 / 10) * 100);

probBolaAzul = ((2 / 10) * 100);

numBolas = prompt('øCu·ntas bolas quieres sacar para calcular la probabilidad? (Indique un n˙mero del 1 al 3)');

 
//PROCESO PARA CALCULAR EL COLOR DE LA PRIMERA BOLA, SABIENDO EL N⁄MERO DE BOLAS QUE QUIERES SACAR
 
if (numBolas === '1') {var colorBolaUno = prompt('Introduce el color de la bola sobre la que quieres calcular la probabilidad:');
    } else if (numBolas === '2') {var colorBolaUnoDos = prompt('Introduce el color de la primera bola sobre la que quieres calcular la probabilidad:');
    } else if (numBolas === '3') {var bolaUnoTresTres = prompt('Introduce el color de la primera bola sobre la que quieres calcular la probabilidad:');
    } else {alert('Lo sentimos, actualmente solo disponemos del c·lculo de probabilidad de un m·ximo de 3 bolas. Por favor, recarga la p·gina e introduce un n˙mero del 1 al 3');
}

if (colorBolaUno === 'Negro' || colorBolaUno === 'Negra' || colorBolaUno === 'negro' || colorBolaUno === 'negra') {

    alert('La probabilidad de sacar una bola negra es de ' + probBolaNegra + '%');

        } else if (colorBolaUno === 'Rojo' || colorBolaUno === 'Roja' || colorBolaUno === 'rojo' || colorBolaUno === 'roja') {

    alert('La probabilidad de sacar una bola roja es de ' + probBolaRoja + '%');

        } else if (colorBolaUno === 'Azul' || colorBolaUno === 'azul') {

    alert('La probabilidad de sacar una bola azul es de ' + probBolaAzul + '%');

         } else if (typeof colorBolaUno === 'string') {

    alert('Ha habido un error. Por favor, revise los datos introducidos y pruebe de nuevo');

}

 


var probNegroRojo, probNegroAzul, probRojoAzul, probNegroNegro, probRojoRojo, probAzulAzul;

probNegroRojo = (probBolaNegra * probBolaRoja) / 100;

probNegroAzul = (probBolaNegra * probBolaAzul) / 100;

probRojoAzul = (probBolaRoja * probBolaAzul) / 100;

probNegroNegro = (probBolaNegra * probBolaNegra) / 100;

probRojoRojo = (probBolaRoja * probBolaRoja) / 100;

probAzulAzul = (probBolaAzul * probBolaAzul) / 100;



//PROCESO PARA SABER EL COLOR DE LA PRIMERA DE DOS BOLAS

 

if (colorBolaUnoDos === 'Negro' || colorBolaUnoDos === 'Negra' || colorBolaUnoDos === 'negro' || colorBolaUnoDos === 'negra') {

    var colorBolaNegroDos = prompt('Introduce el color de la segunda bola sobre la que quieres calcular la probabilidad');

} else if (colorBolaUnoDos === 'Rojo' || colorBolaUnoDos === 'Roja' || colorBolaUnoDos === 'rojo' || colorBolaUnoDos === 'roja') {

    var colorBolaRojoDos = prompt('Introduce el color de la segunda bola sobre la que quieres calcular la probabilidad');

} else if (colorBolaUnoDos === 'Azul' || colorBolaUnoDos === 'azul') {

    var colorBolaAzulDos = prompt('Introduce el color de la segunda bola sobre la que quieres calcular la probabilidad');

} else if (typeof colorBolaUnoDos === 'string') {

    alert('Ha habido un error. Por favor, revise los datos introducidos y pruebe de nuevo');
    
}

 

// PROCESO PARA CUANDO LA PRIMERA BOLA ES NEGRA, SABER EL COLOR DE LA SEGUNDA

 

if (colorBolaNegroDos === 'Negro' || colorBolaNegroDos === 'Negra' || colorBolaNegroDos === 'negro' || colorBolaNegroDos === 'negra') {

    alert('La probabilidad de sacar una bola negra, volverla a meter, y sacar otra ves una bola negra es de ' + probNegroNegro + '%');

} else if (colorBolaNegroDos === 'Rojo' || colorBolaNegroDos === 'Roja' || colorBolaNegroDos === 'rojo' || colorBolaNegroDos === 'roja') {

    alert('La probabilidad de sacar una bola negra, volverla a meter, y a continuaciÛn sacar una roja es de ' + probNegroRojo + '%');

} else if (colorBolaNegroDos === 'Azul' || colorBolaNegroDos === 'azul') {

    alert('La probabilidad de sacar una bola negra, volverla a meter, y a continuaciÛn sacar una azul es de ' + probNegroAzul + '%');

} else if (typeof colorBolaNegroDos === 'string') {

    alert('Ha habido un error. Por favor, revise los datos introducidos y pruebe de nuevo');

}

 

 

// PROCESO PARA CUANDO LA PRIMERA BOLA ES ROJA, SABER EL COLOR DE LA SEGUNDA

 

if (colorBolaRojoDos === 'Negro' || colorBolaRojoDos === 'Negra' || colorBolaRojoDos === 'negro' || colorBolaRojoDos === 'negra') {

    alert('La probabilidad de sacar una bola roja, volverla a meter, y sacar una bola negra es de ' + probNegroRojo + '%');

} else if (colorBolaRojoDos === 'Rojo' || colorBolaRojoDos === 'Roja' || colorBolaRojoDos === 'rojo' || colorBolaRojoDos === 'roja') {

    alert('La probabilidad de sacar una bola roja, volverla a meter, y a continuaciÛn sacar otra vez una roja es de ' + probRojoRojo + '%');

} else if (colorBolaRojoDos === 'Azul' || colorBolaRojoDos === 'azul') {

    alert('La probabilidad de sacar una bola roja, volverla a meter, y a continuaciÛn sacar una azul es de ' + probRojoAzul + '%');

} else if (typeof colorBolaRojoDos === 'string') {

    alert('Ha habido un error. Por favor, revise los datos introducidos y pruebe de nuevo');

}

 

 

// PROCESO PARA CUANDO LA PRIMERA BOLA ES AZUL, SABER EL COLOR DE LA SEGUNDA

 

if (colorBolaAzulDos === 'Negro' || colorBolaAzulDos === 'Negra' || colorBolaAzulDos === 'negro' || colorBolaAzulDos === 'negra') {

    alert('La probabilidad de sacar una bola azul, volverla a meter, y sacar una bola negra es de ' + probNegroAzul + '%');

} else if (colorBolaAzulDos === 'Rojo' || colorBolaAzulDos === 'Roja' || colorBolaAzulDos === 'rojo' || colorBolaAzulDos === 'roja') {

    alert('La probabilidad de sacar una bola azul, volverla a meter, y a continuaciÛn sacar una roja es de ' + probRojoAzul + '%');

} else if (colorBolaAzulDos === 'Azul' || colorBolaAzulDos === 'azul') {

    alert('La probabilidad de sacar una bola azul, volverla a meter, y a continuaciÛn sacar otra vez una azul es de ' + probAzulAzul + '%');

} else if (typeof colorBolaAzulDos === 'string') {

    alert('Ha habido un error. Por favor, revise los datos introducidos y pruebe de nuevo');

}





//PROCESO PARA SABER EL COLOR DE LA SEGUNDA BOLA DE TRES, DEPENDIENDO DEL COLOR DE LA PRIMERA

 

if (bolaUnoTresTres === 'Negro' || bolaUnoTresTres === 'Negra' || bolaUnoTresTres === 'negro' || bolaUnoTresTres === 'negra') {

    var bolaNegraTresTres = prompt('Introduce el color de la segunda bola sobre la que quieres calcular la probabilidad');

} else if (bolaUnoTresTres === 'Rojo' || bolaUnoTresTres === 'Roja' || bolaUnoTresTres === 'rojo' || bolaUnoTresTres === 'roja') {

    var  bolaRojaTresTres = prompt('Introduce el color de la segunda bola sobre la que quieres calcular la probabilidad');

} else if (bolaUnoTresTres === 'Azul' || bolaUnoTresTres === 'azul') {

    var bolaAzulTresTres = prompt('Introduce el color de la segunda bola sobre la que quieres calcular la probabilidad');

} else if (typeof bolaUnoTresTres === 'string') {

    alert('Ha habido un error. Por favor, revise los datos introducidos y pruebe de nuevo');
    
}


//PROCESO PARA SABER EL COLOR DE LA TERCERA DE TRES BOLAS, SABIENDO QUE LA PRIMERA ES NEGRA Y LA SEGUNDA ES NEGRA/ROJA/AZUL.

 

if (bolaNegraTresTres === 'Negro' || bolaNegraTresTres === 'Negra' || bolaNegraTresTres === 'negro' || bolaNegraTresTres === 'negra') {

    var bolaNegraNegraTres = prompt('Introduce el color de la tercera bola sobre la que quieres calcular la probabilidad');

} else if (bolaNegraTresTres === 'Rojo' || bolaNegraTresTres === 'Roja' || bolaNegraTresTres === 'rojo' || bolaNegraTresTres === 'roja') {

    var  bolaNegraRojaTres = prompt('Introduce el color de la tercera bola sobre la que quieres calcular la probabilidad');

} else if (bolaNegraTresTres === 'Azul' || bolaNegraTresTres === 'azul') {

    var bolaNegraAzulTres = prompt('Introduce el color de la tercera bola sobre la que quieres calcular la probabilidad');

} else if (typeof bolaNegraTresTres === 'string') {

    alert('Ha habido un error. Por favor, revise los datos introducidos y pruebe de nuevo');
    
}



//PROCESO PARA SABER EL COLOR DE LA TERCERA DE TRES BOLAS, SABIENDO QUE LA PRIMERA ES ROJA Y LA SEGUNDA ES NEGRA/ROJA/AZUL.

 

if (bolaRojaTresTres === 'Negro' || bolaRojaTresTres === 'Negra' || bolaRojaTresTres === 'negro' || bolaRojaTresTres === 'negra') {

    var bolaRojaNegraTres = prompt('Introduce el color de la tercera bola sobre la que quieres calcular la probabilidad');

} else if (bolaRojaTresTres === 'Rojo' || bolaRojaTresTres === 'Roja' || bolaRojaTresTres === 'rojo' || bolaRojaTresTres === 'roja') {

    var  bolaRojaRojaTres = prompt('Introduce el color de la tercera bola sobre la que quieres calcular la probabilidad');

} else if (bolaRojaTresTres === 'Azul' || bolaRojaTresTres === 'azul') {

    var bolaRojaAzulTres = prompt('Introduce el color de la tercera bola sobre la que quieres calcular la probabilidad');

} else if (typeof bolaRojaTresTres === 'string') {

    alert('Ha habido un error. Por favor, revise los datos introducidos y pruebe de nuevo');
    
}



//PROCESO PARA SABER EL COLOR DE LA TERCERA DE TRES BOLAS, SABIENDO QUE LA PRIMERA ES AZUL Y LA SEGUNDA ES NEGRA/ROJA/AZUL.

 

if (bolaAzulTresTres === 'Negro' || bolaAzulTresTres === 'Negra' || bolaAzulTresTres === 'negro' || bolaAzulTresTres === 'negra') {

    var bolaAzulNegraTres = prompt('Introduce el color de la tercera bola sobre la que quieres calcular la probabilidad');

} else if (bolaAzulTresTres === 'Rojo' || bolaAzulTresTres === 'Roja' || bolaAzulTresTres === 'rojo' || bolaAzulTresTres === 'roja') {

    var  bolaAzulRojaTres = prompt('Introduce el color de la tercera bola sobre la que quieres calcular la probabilidad');

} else if (bolaAzulTresTres === 'Azul' || bolaAzulTresTres === 'azul') {

    var bolaAzulAzulTres = prompt('Introduce el color de la tercera bola sobre la que quieres calcular la probabilidad');

} else if (typeof bolaAzulTresTres === 'string') {


    alert('Ha habido un error. Por favor, revise los datos introducidos y pruebe de nuevo');
    
}

var probNNN, probNNR, probNNA, probNRR, probNRA, probNAA, probRRR, probRRA, probRAA, probAAA;
probNNN = probBolaNegra * probBolaNegra * probBolaNegra /10000;
probNNR = probBolaNegra * probBolaNegra * probBolaRoja /10000;
probNNA = probBolaNegra * probBolaNegra * probBolaAzul /10000;
probNRR = probBolaNegra * probBolaRoja * probBolaRoja /10000;
probNRA = probBolaNegra * probBolaRoja * probBolaAzul /10000;
probNAA = probBolaNegra * probBolaAzul * probBolaAzul /10000;
probRRR = probBolaRoja * probBolaRoja * probBolaRoja /10000;
probRRA = probBolaRoja * probBolaRoja * probBolaAzul /10000;
probRAA = probBolaRoja * probBolaAzul * probBolaAzul /10000;
probAAA = probBolaAzul * probBolaAzul * probBolaAzul /10000;



//N-N. PROCESO PARA SABER LA PROBABILIDAD DE SACAR UNA BOLA NEGRA-NEGRA-NEGRA/ROJA/AZUL

if (bolaNegraNegraTres === 'Negro' || bolaNegraNegraTres === 'Negra' || bolaNegraNegraTres === 'negro' || bolaNegraNegraTres === 'negra') {

    var bolaNegraNegraNegra = alert('La probabilidad de sacar 3 bolas negras es de ' + probNNN + '%');

} else if (bolaNegraNegraTres === 'Rojo' || bolaNegraNegraTres === 'Roja' || bolaNegraNegraTres === 'rojo' || bolaNegraNegraTres === 'roja') {

    var  bolaNegraNegraRoja = alert('La probabilidad de sacar dos bolas negras y una roja es de ' + probNNR + '%');

} else if (bolaNegraNegraTres === 'Azul' || bolaNegraNegraTres === 'azul') {

    var bolaNegraNegraAzul = alert('La probabilidad de sacar dos bolas negras y una azul es de ' + probNNA + '%');

} else if (typeof bolaNegraNegraTres === 'string') {
    
    alert('Ha habido un error. Por favor, revise los datos introducidos y pruebe de nuevo');
    
}



//N-R. PROCESO PARA SABER LA PROBABILIDAD DE SACAR: NEGRA-ROJA-NEGRA/ROJA/AZUL

if (bolaNegraRojaTres === 'Negro' || bolaNegraRojaTres === 'Negra' || bolaNegraRojaTres === 'negro' || bolaNegraRojaTres === 'negra') {

    var bolaNegraRojaNegra = alert('La probabilidad de sacar 2 bolas negras y una roja es de ' + probNNR + '%');

} else if (bolaNegraRojaTres === 'Rojo' || bolaNegraRojaTres === 'Roja' || bolaNegraRojaTres === 'rojo' || bolaNegraRojaTres === 'roja') {

    var  bolaNegraRojaRoja = alert('La probabilidad de sacar dos bolas rojas y una negra es de ' + probNRR + '%');

} else if (bolaNegraRojaTres === 'Azul' || bolaNegraRojaTres === 'azul') {

    var bolaNegraRojaAzul = alert('La probabilidad de sacar una bola azul, negra y roja es de ' + probNRA + '%');

} else if (typeof bolaNegraRojaTres === 'string') {
    
    alert('Ha habido un error. Por favor, revise los datos introducidos y pruebe de nuevo');
    
}


//N-A. PROCESO PARA SABER LA PROBABILIDAD DE SACAR: NEGRA-AZUL-NEGRA/ROJA/AZUL


if (bolaNegraAzulTres === 'Negro' || bolaNegraAzulTres === 'Negra' || bolaNegraAzulTres === 'negro' || bolaNegraAzulTres === 'negra') {

    var bolaNegraAzulNegra = alert('La probabilidad de sacar 2 bolas negras y una azul es de ' + probNNA + '%');

} else if (bolaNegraAzulTres === 'Rojo' || bolaNegraAzulTres === 'Roja' || bolaNegraAzulTres === 'rojo' || bolaNegraAzulTres === 'roja') {

    var  bolaNegraAzulRoja = alert('La probabilidad de sacar una bola negra, azul y roja es de ' + probNRA + '%');

} else if (bolaNegraAzulTres === 'Azul' || bolaNegraAzulTres === 'azul') {

    var bolaNegraAzulAzul = alert('La probabilidad de sacar dos bolas azules y una negra es de ' + probNAA + '%');

} else if (typeof bolaNegraAzulTres === 'string') {
    
    alert('Ha habido un error. Por favor, revise los datos introducidos y pruebe de nuevo');
    
}

//R-N PROCESO PARA SABER LA PROBABILIDAD DE SACAR: ROJA-NEGRA-NEGRA/ROJA/AZUL

if (bolaRojaNegraTres === 'Negro' || bolaRojaNegraTres === 'Negra' || bolaRojaNegraTres === 'negro' || bolaRojaNegraTres === 'negra') {

    var bolarRojaNegraNegra = alert('La probabilidad de sacar 2 bolas negras y una roja es de ' + probNNR + '%');

} else if (bolaRojaNegraTres === 'Rojo' || bolaRojaNegraTres === 'Roja' || bolaRojaNegraTres === 'rojo' || bolaRojaNegraTres === 'roja') {

    var  bolaRojaNegraRoja = alert('La probabilidad de sacar dos bolas rojas y una negra es de ' + probNNR + '%');

} else if (bolaRojaNegraTres === 'Azul' || bolaRojaNegraTres === 'azul') {

    var bolaRojaNegraAzul = alert('La probabilidad de sacar una bola azul, roja y negra es de ' + probNRA + '%');

} else if (typeof bolaRojaNegraTres === 'string') {
    
    alert('Ha habido un error. Por favor, revise los datos introducidos y pruebe de nuevo');
    
}

//R-R. PROCESO PARA SABER LA PROBABILIDAD DE SACAR: ROJA-ROJA-NEGRA/ROJA/AZUL

if (bolaRojaRojaTres === 'Negro' || bolaRojaRojaTres === 'Negra' || bolaRojaRojaTres === 'negro' || bolaRojaRojaTres === 'negra') {

    var bolarRojaRojaNegra = alert('La probabilidad de sacar 2 bolas rojas y una negra es de ' + probNRR + '%');

} else if (bolaRojaRojaTres === 'Rojo' || bolaRojaRojaTres === 'Roja' || bolaRojaRojaTres === 'rojo' || bolaRojaRojaTres === 'roja') {

    var  bolaRojaRojaRoja = alert('La probabilidad de sacartres bolas rojas es de ' + probRRR + '%');

} else if (bolaRojaRojaTres === 'Azul' || bolaRojaRojaTres === 'azul') {

    var bolaRojaRojaAzul = alert('La probabilidad de sacar dos bolas rojas y una azul es de ' + probRAA + '%');

} else if (typeof bolaRojaRojaTres === 'string') {
    
    alert('Ha habido un error. Por favor, revise los datos introducidos y pruebe de nuevo');
    
}


//R.A. PROCESO PARA SABER LA PROBABILIDAD DE SACAR: ROJA-AZUL-NEGRA/ROJA/AZUL

if (bolaRojaAzulTres === 'Negro' || bolaRojaAzulTres === 'Negra' || bolaRojaAzulTres === 'negro' || bolaRojaAzulTres === 'negra') {

    var bolarRojaAzulNegra = alert('La probabilidad de sacar una bola roja, azul y negra es de ' + probNRA + '%');

} else if (bolaRojaAzulTres === 'Rojo' || bolaRojaAzulTres === 'Roja' || bolaRojaAzulTres === 'rojo' || bolaRojaAzulTres === 'roja') {

    var  bolaRojaAzulRoja = alert('La probabilidad de sacar dos bolas rojas y una azul es de ' + probRRA + '%');

} else if (bolaRojaAzulTres === 'Azul' || bolaRojaAzulTres === 'azul') {

    var bolaRojaAzulAzul = alert('La probabilidad de sacar dos bolas azules y una roja es de ' + probRAA + '%');

} else if (typeof bolaRojaAzulTres === 'string') {
     
    alert('Ha habido un error. Por favor, revise los datos introducidos y pruebe de nuevo');
    
}


//A-N. PROCESO PARA SABER LA PROBABILIDAD DE SACAR: AZUL-NEGRA-NEGRA/ROJA/AZUL

if (bolaAzulNegraTres === 'Negro' || bolaAzulNegraTres === 'Negra' || bolaAzulNegraTres === 'negro' || bolaAzulNegraTres === 'negra') {

    var bolaAzulNegraNegra = alert('La probabilidad de sacar 2 bolas negras y una azul es de ' + probNNA + '%');

} else if (bolaAzulNegraTres === 'Rojo' || bolaAzulNegraTres === 'Roja' || bolaAzulNegraTres === 'rojo' || bolaAzulNegraTres === 'roja') {

    var  bolaAzulNegraRoja = alert('La probabilidad de sacar una bola azul, negra y roja es de ' + probNRA + '%');

} else if (bolaAzulNegraTres === 'Azul' || bolaAzulNegraTres === 'azul') {

    var bolaAzulNegraAzul = alert('La probabilidad de sacardos bolas azules y una negra es de ' + probNAA + '%');

} else if (typeof bolaAzulNegraTres === 'string') {
    
    alert('Ha habido un error. Por favor, revise los datos introducidos y pruebe de nuevo');
    
}



//A-R. PROCESO PARA SABER LA PROBABILIDAD DE SACAR: AZUL-ROJA-NEGRA/ROJA/AZUL

if (bolaAzulRojaTres === 'Negro' || bolaAzulRojaTres === 'Negra' || bolaAzulRojaTres === 'negro' || bolaAzulRojaTres === 'negra') {

    var bolaAzulRojaNegra = alert('La probabilidad de sacar una bola roja, azul y negra es de ' + probNRA + '%');

} else if (bolaAzulRojaTres === 'Rojo' || bolaAzulRojaTres === 'Roja' || bolaAzulRojaTres === 'rojo' || bolaAzulRojaTres === 'roja') {

    var  bolaAzulRojaRoja = alert('La probabilidad de sacar dos bolas rojas y una azul es de ' + probRRA + '%');

} else if (bolaAzulRojaTres === 'Azul' || bolaAzulRojaTres === 'azul') {

    var bolaAzulRojaAzul = alert('La probabilidad de sacardos bolas azules y una roja es de ' + probRAA + '%');

} else if (typeof bolaAzulRojaTres === 'string') {
    
    alert('Ha habido un error. Por favor, revise los datos introducidos y pruebe de nuevo');
    
}


//A-A. PROCESO PARA SABER LA PROBABILIDAD DE SACAR: AZUL-AZUL-NEGRA/ROJA/AZUL

if (bolaAzulAzulTres === 'Negro' || bolaAzulAzulTres === 'Negra' || bolaAzulAzulTres === 'negro' || bolaAzulAzulTres === 'negra') {

    var bolaAzulAzulNegra = alert('La probabilidad de sacar 2 bolas azules y una negra es de ' + probNAA + '%');

} else if (bolaAzulAzulTres === 'Rojo' || bolaAzulAzulTres === 'Roja' || bolaAzulAzulTres === 'rojo' || bolaAzulAzulTres === 'roja') {

    var  bolaAzulAzulRoja = alert('La probabilidad de sacar dos bolas azules y una roja es de ' + probRAA + '%');

} else if (bolaAzulAzulTres === 'Azul' || bolaAzulAzulTres === 'azul') {

    var bolaAzulAzulAzul = alert('La probabilidad de sacar tres bolas azules es de ' + probAAA + '%');

} else if (typeof bolaAzulAzulTres === 'string') {
    
    alert('Ha habido un error. Por favor, revise los datos introducidos y pruebe de nuevo');
    
}


//Functions to calculate the prob. of taking only one ball

calculate_K = function(){

};

calculate_B = function() {

};

calculate_R = function(){

};


//Functions to calculate the prob. of taking two balls

calculate_KK = function(){

};

calculate_KB = function(){

};

calculate_KR = function(){
    
};

calculate_BB = function() {

};

calculate_BR = function() {

};

calculate_RR = function() {

};



//Functions to calculate the prob. of taking three balls

//probNNN, probNNR, probNNA, probNRR, probNRA, probNAA, probRRR, probRRA, probRAA, probAAA;




// calculate_KKK = function() {

// };

// calculate_KKB = function() {

// };

// calculate_KKR = function() {

// };

calculate_KBK = function(){

};

// calculate_KBB = function(){

// };

// calculate_KBR = function(){

// };

calculate_KRK = function(){
    
};

calculate_KRB = function(){
    
};

// calculate_KRR = function(){
    
// };

calculate_BBK = function() {

};

// calculate_BBB = function() {

// };

// calculate_BBR = function() {

// };

calculate_BRK = function() {

};

calculate_BRB = function() {

};

// calculate_BRR = function() {

// };

calculate_RRK = function() {

};

calculate_RRB = function() {

};

// calculate_RRR = function() {

// };




