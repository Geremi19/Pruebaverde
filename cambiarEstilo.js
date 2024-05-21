document.addEventListener("DOMContentLoaded", function() {
    const standardButton = document.getElementById("btnEstandar");
    const accessibleButton = document.getElementById("btnAccesible");
    const stylesheet = document.getElementById("stylesheet");
    const accessibleStylesheet = document.querySelectorAll('link[href="estilos_accesibles.css"]')[0];

    standardButton.addEventListener("click", function() {
        stylesheet.href = "estilos.css";
        accessibleStylesheet.disabled = true;
    });

    accessibleButton.addEventListener("click", function() {
        stylesheet.href = "estilos_accesibles.css";
        accessibleStylesheet.disabled = false;
    });
});
