document.addEventListener('DOMContentLoaded', function () {
    var accordionBodies = document.querySelectorAll('.accordion-collapse');

    // Agregar listeners de clic a los botones de acordeón para evitar que se cierre cuando se hace clic en ellos
    var accordionButtons = document.querySelectorAll('.accordion-button');
    accordionButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.stopPropagation(); // Detener la propagación del evento clic para evitar que se cierre el acordeón
        });
    });

    // Agregar listener de clic a todo el documento para cerrar las tarjetas de preguntas frecuentes cuando se hace clic fuera de ellas
    document.addEventListener('click', function (event) {
        var isAccordionBody = event.target.matches('.accordion-body');
        if (!isAccordionBody) {
            accordionBodies.forEach(function (body) {
                body.classList.remove('show');
            });
        }
    });
});