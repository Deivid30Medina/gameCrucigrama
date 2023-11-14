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

// Asigna las funciones a los eventos de los inputs
AllInputs.forEach((input, index) => {
    input.addEventListener('input', () => handleInput(input, index + 1));
    input.addEventListener('click', () => {
        borrarContenido(input);
    });
    input.addEventListener('focus', () => {
        limpiarCasilla(input);
    });
});

calcularLongitudForm();
