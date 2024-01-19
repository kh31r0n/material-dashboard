
// Espera a que se cargue completamente el contenido del DOM antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function () {
    // Selecciona elementos del DOM por sus ID
    const menuAnimationOne = document.getElementById("menu-animation-one");
    const menuAnimationOneIntro = document.getElementById("menu-animation-one-intro");
    const menuAnimationOneArquelao = document.getElementById("menu-animation-one-arquelao");
    const menuAnimationOneHerodes = document.getElementById("menu-animation-one-herodes");
    const mapElements = document.querySelectorAll("[class^='map-']");
    const menuAnimationTwo = document.getElementById("menu-animation-two");
    const buttonStop = document.getElementById("button-stop");
    const image  = document.getElementById("image");
    
    // Crea un array de elementos de audio
    var audioPlayers = [document.getElementById('audio1'), document.getElementById('audio2'), document.getElementById('audio3')];
    
    // Selecciona elementos del DOM por sus ID
    var statusText = document.getElementById('statusText');
    var statusImage = document.getElementById('statusImage');
    
    // Variable para almacenar el video que se está reproduciendo
    var currentPlayingVideo = null;
    
    // Array de elementos animados
    var animatedElements = [
        //document.querySelector('.status-image-israel'),
        document.querySelector('.status-image-arquelao'),
        document.querySelector('.status-image-herodes'),
        document.querySelector('.map-judea'),
        document.querySelector('.map-samaria'),
        document.querySelector('.map-idumea'),
        document.querySelector('.map-galilea'),
        document.querySelector('.map-perea'),
        document.querySelector('.status-text-1')
  ];

        // Función para hacer scroll suave
        function scrollSmoothly() {
          const initialPosition = window.pageYOffset;
          const targetPosition = window.innerHeight;
          const distance = targetPosition - initialPosition;
          const duration = 2000; // Duración en milisegundos (2 segundos)
          let start;

          function step(timestamp) {
              if (!start) start = timestamp;
              const progress = timestamp - start;
              window.scrollTo(0, initialPosition + ease(progress, 0, distance, duration));
              if (progress < duration) {
                  window.requestAnimationFrame(step);
              }
          }

          function ease(t, b, c, d) {
              t /= d / 2;
              if (t < 1) return c / 2 * t * t + b;
              t--;
              return -c / 2 * (t * (t - 2) - 1) + b;
          }

          window.requestAnimationFrame(step);
      }

      // Llama a la función después de 5 segundos (5000 milisegundos)
      setTimeout(scrollSmoothly, 5000);
  
    // Función para reproducir audio según el índice proporcionado   
    function playAudio(playerIndex) {
        if (playerIndex === 1) {
            audio1.play();
        } else if (playerIndex === 2) {
            audio2.play();
        }
        else if (playerIndex === 3) {
            audio3.play();
        }
    }


    // Función para iniciar la animación de Arquelao
    function startAnimationOneArquelao(callback = () => {}) {
        // Reproducir el audio al iniciar la animación
        playAudio(3); // You can change this to play audio1 or audio2 as needed.
        for (var i = 0; i < animatedElements.length; i++) {
            hideElement(animatedElements[i]);
        }
        changeOpacity(document.getElementById("menu-animation-one-intro"))
        changeOpacity(document.getElementById("menu-animation-one-herodes"))
        changeOpacity(document.getElementById("menu-animation-one-primeros"))
        setTimeout(function () {showElementAnimated(document.querySelector('.status-text-1'));;
        }, 1*1000); // Mostrar la imagen después de 4 segundos (4000 ms)
        setTimeout(function () {showElement(document.querySelector('.status-image-arquelao'));;
        }, 80*1000); // Mostrar la imagen después de 1:20 segundos (4000 ms)
        setTimeout(function () {showElement(document.querySelector('.map-judea'));;
        }, 81*1000); // Mostrar la imagen después de 1:20 segundos (4000 ms)
        setTimeout(function () {showElement(document.querySelector('.map-samaria'));;
        }, 81.5*1000); // Mostrar la imagen después de  1:20 segundos (4000 ms)
        setTimeout(function () {showElement(document.querySelector('.map-idumea'));;
        }, 82*1000); // Mostrar la imagen después de  1:20 segundos (4000 ms)
        setTimeout(function () {hideElement(document.querySelector(".status-image-arquelao"));;
        }, 124*1000); // Mostrar la imagen después de 4 segundos (4000 ms)        
        setTimeout(function () {hideElement(document.querySelector(".map-judea"));;
        }, 124*1000); // Mostrar la imagen después de 4 segundos (4000 ms)     
        setTimeout(function () {hideElement(document.querySelector(".map-samaria"));;
        }, 124*1000); // Mostrar la imagen después de 4 segundos (4000 ms)    
        setTimeout(function () {hideElement(document.querySelector(".map-idumea"));;
        }, 124*1000); // Mostrar la imagen después de 4 segundos (4000 ms)     
        setTimeout(function () {hideElement(document.querySelector('.status-text-1'));;
        }, 124*1000); // Mostrar la imagen después de 4 segundos (4000 ms)         
        setTimeout(function () {showElement(document.querySelector('.status-image-herodes'));;
        }, 125*1000); // Mostrar la imagen después de 1:20 segundos (4000 ms)
        setTimeout(function () {showElement(document.querySelector('.map-judea'));;
        }, 125*1000); // Mostrar la imagen después de 1:20 segundos (4000 ms)
        setTimeout(function () {showElement(document.querySelector('.map-galilea'));;
        }, 125.5*1000); // Mostrar la imagen después de  1:20 segundos (4000 ms)
        setTimeout(function () {showElement(document.querySelector('.map-perea'));;
        }, 126*1000); // Mostrar la imagen después de  1:20 segundos (4000 ms)
    // Siguiente
        setTimeout(function () {hideElement(document.querySelector('.status-image-herodes'));;}, 4*1000); // Mostrar la imagen después de 4 segundos (4000 ms) 
        callback();
    }
    // Función para iniciar la animación de Herodes
    function startAnimationOneHerodes(callback = () => {}) {
        // Reproducir el audio al iniciar la animación
        playAudio(2); // You can change this to play audio1 or audio2 as needed.
        for (var i = 0; i < animatedElements.length; i++) {
            hideElement(animatedElements[i]);
        }
        setTimeout(function () {
            showElementAnimated(document.querySelector('.status-text-1'));
        }, (1 - 80 + 25) * 1000); // Restar 80 segundos y sumar 25 segundos (25,000 ms) al tiempo original
        setTimeout(function () {
            showElement(document.querySelector('.status-image-arquelao'));
        }, (80 - 80 + 25) * 1000); // Restar 80 segundos y sumar 25 segundos (25,000 ms) al tiempo original
        setTimeout(function () {
            showElement(document.querySelector('.map-judea'));
        }, (81 - 80 + 25) * 1000); // Restar 80 segundos y sumar 25 segundos (25,000 ms) al tiempo original
        setTimeout(function () {
            showElement(document.querySelector('.map-samaria'));
        }, (81.5 - 80 + 25) * 1000); // Restar 80 segundos y sumar 25 segundos (25,000 ms) al tiempo original
        setTimeout(function () {
            showElement(document.querySelector('.map-idumea'));
        }, (82 - 80 + 25) * 1000); // Restar 80 segundos y sumar 25 segundos (25,000 ms) al tiempo original
        setTimeout(function () {
            hideElement(document.querySelector(".status-image-arquelao"));
        }, (124 - 80 + 25) * 1000); // Restar 80 segundos y sumar 25 segundos (25,000 ms) al tiempo original
        setTimeout(function () {
            hideElement(document.querySelector('.status-text-1'));
        }, (124 - 80 + 25) * 1000); // Restar 80 segundos y sumar 25 segundos (25,000 ms) al tiempo original
        setTimeout(function () {
            showElement(document.querySelector('.status-image-herodes'));
            showElement(document.querySelector('.map-judea'));
        }, (125 - 80 + 25) * 1000); // Restar 80 segundos y sumar 25 segundos (25,000 ms) al tiempo original
        setTimeout(function () {
            showElement(document.querySelector('.map-galilea'));
        }, (125.5 - 80 + 25) * 1000); // Restar 80 segundos y sumar 25 segundos (25,000 ms) al tiempo original
        setTimeout(function () {
            showElement(document.querySelector('.map-perea'));
        }, (126 - 80 + 25) * 1000); // Restar 80 segundos y sumar 25 segundos (25,000 ms) al tiempo original
        // Siguiente
        setTimeout(function () {
            hideElement(document.querySelector('.status-image-herodes'));
        }, (4 - 80 + 25) * 1000); // Restar 80 segundos y sumar 25 segundos (25,000 ms) al tiempo original
        callback();
    }

    // Función para pausar todos los elementos de audio y resetear las animaciones
    function pauseAllAudio() {
        audioPlayers.forEach(function (player) {
            if (!player.paused) {
                player.pause();
            }
        });
        // Restablecer todas las animaciones al pausar el audio
        resetAllAnimations();
    }
     
    // Función para detener todos los elementos de audio y resetear las animaciones
    function stopAllAudio() {
        audioPlayers.forEach(function (player) {
            if (player) {
                player.pause();
                player.currentTime = 0;
            }
        });
        // Restablecer todas las animaciones al detener el audio
        resetAllAnimations();
    }
    // Función para mostrar un elemento con animación
    function showElement(imageElement) {
        imageElement.style.opacity = '0';  // Establece la opacidad inicial en 0 para ocultar la imagen
        imageElement.style.display = 'block';

        // Utiliza requestAnimationFrame para realizar la animación
        requestAnimationFrame(function () {
            imageElement.style.transition = 'opacity 0.5s ease, transform 0.5s ease';  // Establece una transición suave
            imageElement.style.opacity = '1';  // Establece la opacidad en 1 para hacer aparecer la imagen
            imageElement.style.transform = 'translateY(0)';  // Restaura la posición original de la imagen
        });
    }

    function showElementAnimated(imageElement) {
        imageElement.style.opacity = '0';  // Establece la opacidad inicial en 0 para ocultar la imagen
        imageElement.style.transform = 'translateY(-20px)';  // Mueve la imagen hacia arriba para ocultarla inicialmente
        imageElement.style.display = 'block';

        // Utiliza requestAnimationFrame para realizar la animación
        requestAnimationFrame(function () {menuAnimationOneArquelao
            imageElement.style.transition = 'opacity 0.5s ease, transform 0.5s ease';  // Establece una transición suave
            imageElement.style.opacity = '1';  // Establece la opacidad en 1 para hacer aparecer la imagen
            imageElement.style.transform = 'translateY(0)';  // Restaura la posición original de la imagen
        });
    }
    // Función para resetear todas las animaciones
    function resetAllAnimations() {
        animatedElements.forEach(function (element) {
        resetAnimation(element);
    });
    }
    
    // Función para resetear una animación específica
    function resetAnimation(element) {
        element.style.transition = 'none';
        element.style.opacity = '1';
        element.style.display = 'none';
    }
    
    // Función para ocultar un elemento
    function hideElement(elementToHide) {
        elementToHide.style.display = 'none';
    }
    // Función para cambiar la opacidad de un elemento
    function changeOpacity(elementToHide) {
        elementToHide.style.opacity = '0.4';

    }
    
    // Asigna eventos de clic a los elementos del menú y al botón de detener
    //menuAnimationOne.addEventListener("click", function() {
    //    startAnimationOneArquelao(function() {
    //        startAnimationOneHerodes();
    //    });
    //});
    //menuAnimationOneIntro.addEventListener("click", function() {
    //    startAnimationOneIntro();
    //});
    //menuAnimationOneArquelao.addEventListener("click", function() {
    //    startAnimationOneArquelao();
    //});
    //menuAnimationOneHerodes.addEventListener("click", function() {
    //    startAnimationOneHerodes();
    //});
    mapElements.forEach(function (element) {
        element.addEventListener("click", startAnimationOneHerodes);
    });
    buttonStop.addEventListener("click", function() {
        stopAllAudio();
    });
}); 