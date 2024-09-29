// Function to show the selected page and hide others
function mostrarPagina(numero) {
    var paginas = document.getElementsByClassName("pagina");

    // Hide all pages
    for (var i = 0; i < paginas.length; i++) {
        paginas[i].style.display = "none";
    }

    // Show the selected page
    var paginaActual = document.getElementById("pagina" + numero);
    if (paginaActual) {
        paginaActual.style.display = "block";
    }
}

// Add event listeners to each button
document.querySelectorAll('#botones-paginacion button').forEach(function(button) {
    button.addEventListener('click', function() {
        var pageNumber = this.getAttribute('data-page');
        mostrarPagina(pageNumber);
    });
});