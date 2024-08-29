document.addEventListener('DOMContentLoaded', function () {
    const menuCheckbox = document.getElementById('menu_hamburguesa');
    const botonesDiv = document.getElementById('botones');
    const ulLinks = document.querySelector('.ul_links');

    menuCheckbox.addEventListener('change', function () {
        if (menuCheckbox.checked) {
            ulLinks.style.height = '10vh';  // Cambiado a 20vh
            botonesDiv.style.transform = 'translateY(10vh)';  // Cambiado a 20vh
        } else {
            ulLinks.style.height = '0';
            botonesDiv.style.transform = 'translateY(0)';
        }
    });
});
