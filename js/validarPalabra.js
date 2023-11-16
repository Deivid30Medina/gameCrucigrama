// Objeto que almacenará la información de cada formulario
const formularios = {};
const palabrasValidar = ["ACCO","COMUICCION","DIVUGR","CORR","UTOIZAR","GESTONAR","EISRA"];

// Función para manejar el campo de texto
function manejarCampoTexto(indiceFormulario, indiceCampo) {
    // Obtiene el formulario específico
    const formulario = formularios[indiceFormulario] || {};
    // Actualiza el valor del campo en el objeto del formulario
    formulario[indiceCampo] = document.querySelector(`.classForm.columna${indiceFormulario + 1} .classLetra:nth-child(${indiceCampo})`).value;
    validarPalabrFinal(formulario,indiceFormulario);
}

function validarPalabrFinal(arrayLetras, indice){
    let valores = Object.values(arrayLetras);
    let valoresLimpios = valores.filter(valor => valor != "");

    let palabraFormada = valoresLimpios.join("");

    let nombresPosiciones = Object.getOwnPropertyNames(arrayLetras);
    
    if(palabraFormada.length === palabrasValidar[indice].length){
        console.log("Entro true");
        if(palabraFormada === palabrasValidar[indice]){
            quitarClase(nombresPosiciones,indice,"classDespintar");
            quitarClase(nombresPosiciones,indice,"classIncorrecta");
            pintarPalabra(nombresPosiciones,indice,"classCorrecta");
        }else{
            quitarClase(nombresPosiciones,indice,"classDespintar");
            quitarClase(nombresPosiciones,indice,"classCorrecta");
            pintarPalabra(nombresPosiciones,indice,"classIncorrecta");
        }
    }else{
        console.log("Entro false");
        quitarClase(nombresPosiciones,indice,"classIncorrecta");
        quitarClase(nombresPosiciones,indice,"classCorrecta");
        pintarPalabra(nombresPosiciones,indice,"classDespintar");
    }
}

function pintarPalabra(nombresPosiciones,indiceFormulario,claseAgregar){
    nombresPosiciones.forEach(function(posicion){
        let elementoInput = document.querySelector(`.classForm.columna${indiceFormulario + 1} .classLetra:nth-child(${posicion})`);
        elementoInput.classList.add(claseAgregar);
    })
}

function quitarClase(nombresPosiciones,indiceFormulario,classRemover){
    nombresPosiciones.forEach(function(posicion){
        let elementoInput = document.querySelector(`.classForm.columna${indiceFormulario + 1} .classLetra:nth-child(${posicion})`);
        elementoInput.classList.remove(classRemover);
    })
}


function validarTexto(){
    // Asigna las funciones a los eventos de los inputs de cada formulario
    for (let i = 0; i < 7; i++) {
        const camposTexto = document.querySelectorAll(`.classForm.columna${i+1} .classLetra`);
        formularios[i ] = {}; // Inicializa el objeto del formulario
        camposTexto.forEach((campo, index) => {
            campo.addEventListener('input', () => manejarCampoTexto(i , index + 1));
            campo.addEventListener('click', () => manejarCampoTexto(i , index + 1));
        });
    }
}

export{
    validarTexto
}


