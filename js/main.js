const imagenes = document.querySelectorAll('.zoomable-img');

imagenes.forEach(img => {
    img.addEventListener('click', function(e) {
        if (this.classList.contains('zoom')) {
            this.classList.remove('zoom');
        } else {
            imagenes.forEach(i => i.classList.remove('zoom'));
            this.classList.add('zoom');
        }
        e.stopPropagation();
    });
});

document.addEventListener('click', () => {
    imagenes.forEach(i => i.classList.remove('zoom'));
});