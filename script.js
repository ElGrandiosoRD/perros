function showSection(sectionId) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('.section-content');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Mostrar la sección seleccionada
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }
}

// Al cargar la página, mostrar la primera sección
document.addEventListener('DOMContentLoaded', function() {
    showSection('inicio');
});

async function getDogImage() {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      document.getElementById('dogImage').src = data.message;
    } catch (error) {
      console.error('Error al obtener la imagen:', error);
    }
  }

  async function cargarImagenes() {
    const galeria = document.getElementById("galeria2");
    const loader = document.getElementById("loader");

    galeria.innerHTML = "";
    loader.classList.remove("hidden");

    try {
      const res = await fetch("https://dog.ceo/api/breeds/image/random/12");
      const data = await res.json();

      if (data.status === "success") {
        data.message.forEach(url => {
          const div = document.createElement("div");
          div.className = "marco2";

          const img = document.createElement("img");
          img.src = url;
          img.alt = "Perro aleatorio";

          div.appendChild(img);
          galeria.appendChild(div);
          var ga = document.getElementById("Galer");
          
          
          /*galeria.style.marginTop = "650px";*/
          var x = window.matchMedia("(max-width: 700px)")
          myFunction(x);
          x.addEventListener("change", function() {
            myFunction(x);
          });
          function myFunction(x) {
            if (x.matches) { 
                ga.style.marginTop = "3200px";
            } else {
                ga.style.marginTop = "600px";
            }
          }
          
        });
      }
    } catch (error) {
      console.error("Error al cargar imágenes:", error);
    } finally {
      loader.classList.add("hidden");
    }
  }

  // Cargar al iniciar
  cargarImagenes();

  async function getDogImage3() {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      document.getElementById('dogImage3').src = data.message;
    } catch (error) {
      console.error('Error al obtener la imagen:', error);
    }
  }
  // Cargar una imagen al iniciar la página
  window.onload = getDogImage;
  //window.onload = getDogImage2;
  //window.onload = getDogImage3;
  
