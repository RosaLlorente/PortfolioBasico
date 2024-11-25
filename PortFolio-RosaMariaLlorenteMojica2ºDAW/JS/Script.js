window.onload = () => {
    //CIRCULOS DE PROGRESO
    // Animación del circulo de progreso
    function animateProgress(circle, targetPercentage, duration) {
        let start = 0; 
        const stepTime = Math.abs(Math.floor(duration / targetPercentage)); 

        const interval = setInterval(() => {
            if (start >= targetPercentage) {
                clearInterval(interval); 
            } else {
                start++;
                circle.style.background = `conic-gradient(#563004 ${start}%, #3b2f21 0%)`;
                circle.setAttribute('data-progress', start);
            }
        }, stepTime);
    }

    // Función para animar el progreso
    function startAnimations() 
    {
        const progressCircles = document.querySelectorAll('.circulo-progreso');
        progressCircles.forEach(circle => {
            const progressPercentage = parseInt(circle.getAttribute('data-progress'), 10);
            const animationDuration = 2000;
            animateProgress(circle, progressPercentage, animationDuration);
        });
    }

    // Configuración
    const observer = new IntersectionObserver((entries) => 
    {
        entries.forEach(entry => 
        {
            if (entry.isIntersecting) 
            {
                startAnimations();
                observer.disconnect(); 
            }
        });
    }, { threshold: 0.5 }); 

    const habilidadesSection = document.getElementById('Habilidades');
    observer.observe(habilidadesSection);

    //--------------------------------------
    //PASAR DE UNA SECCIÓN A OTRA DE FORMA HORIZONTAL
    document.getElementById('boton').addEventListener('click', function() {
        const apartadoProfesional = document.getElementById('ApartadoProfesional');
        const apartadoArtistico = document.getElementById('ApartadoArtistico');
        
        if (apartadoProfesional.style.display === 'none') {
            apartadoProfesional.style.display = 'flex';  
            apartadoArtistico.style.display = 'none';
        } else {
            apartadoProfesional.style.display = 'none'; 
            apartadoArtistico.style.display = 'flex';
        }
    });
    //----------------------------------------
    //ENVIAR SIN RECARGAR WEB
    document.getElementById("miFormulario").addEventListener("submit", function(event) {
        event.preventDefault(); 
        
        alert("Formulario enviado correctamente.");
    });
};
