// Objeto que almacenará la información de cada formulario
const formularios = {};
const palabrasValidar = ["ACCO","COMUICCION","DIVUGR","CORR","UTOIZAR","GESTONAR","EISRA"];
let ganaste = [false,false,false,false,false,false,false];

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
    quitarClase(nombresPosiciones,indice);
    if(palabraFormada.length === palabrasValidar[indice].length){
        if(palabraFormada === palabrasValidar[indice]){
            pintarPalabra(nombresPosiciones,indice, "classCorrecta");
            validarLetraEspecificas(indice,"classCorrecta");
            validarCondicionGanar("restar", indice);
        }else{
            pintarPalabra(nombresPosiciones,indice,"classIncorrecta");
            validarLetraEspecificas(indice,"classDespintar");
            validarCondicionGanar("sumar", indice);
        }
    }else{
        pintarPalabra(nombresPosiciones,indice,"classDespintar");
        validarLetraEspecificas(indice,"classDespintar");
        validarCondicionGanar("sumar", indice);
    }
}

function validarCondicionGanar(condicionValidar, indice){
    if(condicionValidar == "restar"){
        restarGanaste(indice);
        if(!ganaste.includes(false)){
            alert("Ganaste, felicidades")
        }
    }else{
        sumarGanaste(indice);
    }
    console.log(ganaste);
}

function sumarGanaste(indice){
    ganaste[indice] = false;
}

function restarGanaste(indice){
    ganaste[indice] = true;
}

function pintarPalabra(nombresPosiciones,indiceFormulario,claseAgregar){
    nombresPosiciones.forEach(function(posicion){
        let elementoInput = document.querySelector(`.classForm.columna${indiceFormulario + 1} .classLetra:nth-child(${posicion})`);
        elementoInput.classList.add(claseAgregar);
    })
}

function quitarClase(nombresPosiciones,indiceFormulario){
    Object.entries(nombresPosiciones).forEach(([key, value]) => {
        let elementoInput = document.querySelector(`.classForm.columna${indiceFormulario + 1} .classLetra:nth-child(${value})`);
        elementoInput.classList.remove("classRemover");
        elementoInput.classList.remove("classCorrecta");
        elementoInput.classList.remove("classDespintar");
    });
}

function validarLetraEspecificas(indiceFormulario,claseAgregar){
    let posiciones = [5,6,8,4,2,0,3];
    if(indiceFormulario != 5){
        let elementoInput = document.querySelector(`.classForm.columna${indiceFormulario + 1} .classLetra:nth-child(${posiciones[indiceFormulario]})`);
        elementoInput.classList.remove("classRemover");
        elementoInput.classList.remove("classCorrecta");
        elementoInput.classList.remove("classDespintar");   
        elementoInput.classList.add(claseAgregar);
    }
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


