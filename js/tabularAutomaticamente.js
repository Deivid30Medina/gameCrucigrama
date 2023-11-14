let longitudMaxima = 0;
let AllInputs = document.querySelectorAll('.classText');

function calcularLongitudForm() {
    let inputs = document.querySelectorAll('.classText');
    longitudMaxima = inputs.length;
}

function handleInput(currentInput, nextInputIndex) {
    const inputValue = currentInput.value;

    if (inputValue.length > 1) {
        // Borrar el contenido si hay más de una letra ingresada
        limpiarCasilla(currentInput);
    }

    if (inputValue.length === 1) {
        // Convertir a mayúsculas antes de colocar la letra en el label
        convertirAMayuscula(currentInput);
        
        if (nextInputIndex < longitudMaxima) {
            AllInputs[nextInputIndex].focus();
        }
    }
}

function borrarContenido(currentInput) {
    currentInput.value = ''; // Borrar el contenido al hacer clic
}

function limpiarCasilla(contenido) {
    if (contenido.value.length > 0) {
        contenido.value = ''; // Borrar el contenido solo si hay texto
    }
}

function convertirAMayuscula(input) {
    input.value = input.value.toUpperCase(); // Convierte a mayúsculas
}

// Asigna las funciones a los eventos de los inputs
AllInputs.forEach((input, index) => {
    input.addEventListener('input', () => handleInput(input, index + 1));
    input.addEventListener('click', () => {
        borrarContenido(input);
    });
});

calcularLongitudForm();
