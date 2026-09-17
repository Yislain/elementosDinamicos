document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. Mostrar / Ocultar Elementos
    // ==========================================
    const btnToggle = document.getElementById('btn-toggle');
    const cajaInfo = document.getElementById('caja-info');

    btnToggle.addEventListener('click', () => {
        // classList.toggle añade la clase si no la tiene, y se la quita si ya la tiene
        cajaInfo.classList.toggle('oculto');
        
        // Cambiamos el texto del botón dinámicamente
        if (cajaInfo.classList.contains('oculto')) {
            btnToggle.textContent = 'Ver detalles del proyecto';
        } else {
            btnToggle.textContent = 'Ocultar detalles';
        }
    });


    // ==========================================
    // 2. Eventos del Mouse
    // ==========================================
    const tarjetaMouse = document.getElementById('tarjeta-mouse');

    // Cuando el cursor entra en el área del elemento
    tarjetaMouse.addEventListener('mouseenter', () => {
        tarjetaMouse.style.transform = 'scale(1.05) translateY(-5px)';
        tarjetaMouse.style.boxShadow = '0 15px 25px rgba(0,0,0,0.2)';
        tarjetaMouse.style.backgroundColor = '#8e44ad'; // Un tono más oscuro
        tarjetaMouse.querySelector('p').textContent = '¡Gracias por pasar el cursor!';
    });

    // Cuando el cursor sale del área del elemento
    tarjetaMouse.addEventListener('mouseleave', () => {
        tarjetaMouse.style.transform = 'scale(1) translateY(0)';
        tarjetaMouse.style.boxShadow = 'none';
        tarjetaMouse.style.backgroundColor = '#9b59b6'; // Vuelve al color original
        tarjetaMouse.querySelector('p').textContent = 'Pasa el cursor sobre mí';
    });


    // ==========================================
    // 3. Transiciones en Carrusel de Imágenes
    // ==========================================
    const tiraCarrusel = document.getElementById('tira-carrusel');
    const itemsCarrusel = document.querySelectorAll('.carrusel-item');
    let indiceActual = 0;

    function rotarCarrusel() {
        // Calculamos el siguiente índice. El operador módulo (%) hace que vuelva a 0 al llegar al final
        indiceActual = (indiceActual + 1) % itemsCarrusel.length;
        
        // Movemos la tira completa hacia la izquierda usando porcentajes
        const desplazamiento = -(indiceActual * 100);
        tiraCarrusel.style.transform = `translateX(${desplazamiento}%)`;
    }

    // Ejecutamos la función cada 3000 milisegundos (3 segundos)
    setInterval(rotarCarrusel, 3000);


    // ==========================================
    // 4. Eventos de Scroll (Intersection Observer)
    // ==========================================
    // Esta es la forma más moderna y optimizada de detectar el scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Si el elemento entra en la pantalla, añadimos la clase que lo muestra
                entry.target.classList.add('mostrar-scroll');
            } else {
                // Opcional: si quieres que la animación se repita al subir y bajar, quitas la clase
                entry.target.classList.remove('mostrar-scroll');
            }
        });
    }, { 
        threshold: 0.5 // Se activa cuando al menos el 50% del elemento es visible en pantalla
    });

    // Seleccionamos todos los elementos que queramos animar con scroll y los observamos
    const elementosOcultos = document.querySelectorAll('.oculto-scroll');
    elementosOcultos.forEach(el => observer.observe(el));

});