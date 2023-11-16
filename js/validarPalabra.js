// Objeto que almacenará la información de cada formulario
const formularios = {};
const palabrasValidar = ["HOLA","HOLAAAAAA2","HOLA3","HOLA4","HOLA5","HOLA6","HOLA7"];

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
    if(palabraFormada.length === palabrasValidar[indice].length){
        let nombresPosiciones = Object.getOwnPropertyNames(arrayLetras);
        console.log(palabraFormada);
        console.log(palabrasValidar[indice]);
        console.log(nombresPosiciones);
        if(palabraFormada === palabrasValidar[indice]){
            quitarClase(nombresPosiciones,indice,"classIncorrecta");
            pintarPalabra(nombresPosiciones,indice,"classCorrecta");
        }else{
            quitarClase(nombresPosiciones,indice,"classCorrecta");
            pintarPalabra(nombresPosiciones,indice,"classIncorrecta");
        }
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
    for (let i = 0; i < 2; i++) {
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


