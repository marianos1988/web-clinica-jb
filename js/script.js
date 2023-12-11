const btnInicio = document.querySelector(".btn-inicio");
const btnQuienesSomos = document.querySelector(".btn-quienes-somos");
const btnContacto = document.querySelector(".btn-contacto");
const section = document.querySelector(".container-section");
const containerFooter = document.querySelector(".container-footer");
const containerSection = document.querySelector(".container-section");
const btnConocenosMas = document.querySelector(".boton-conocenos-mas");
const btnReloadVideos = document.querySelector("#btn-reload-videos");
const btnWp = document.querySelector(".float-wp");
var varWP = false;



btnConocenosMas.addEventListener("click",()=>{

  containerSection.innerHTML = ``;
  containerSection.innerHTML = quienesSomos;
  containerFooter.innerHTML = "";
  containerFooter.innerHTML = footer;

});




function abrirCerrarWP() {


  if(varWP) {
    document.querySelector(".group-wp-sucursal").style.display="none";
    varWP = !varWP;
  }
  else if(!varWP) {
    document.querySelector(".group-wp-sucursal").style.display= "inherit";
    varWP = !varWP;
  }
}

btnWp.addEventListener("click",()=>{

  abrirCerrarWP();

});



const index = `
  <article class="container-card-presentacion">
    <div class="card">
      <img src="./img/card-presentacion.jpg" />
      <div>
        <h2>Jorge Oscar Bombicino</h2>
        <h3>Licenciado en terapia física y kinesiología.</h3>
        <p>
          Con una trayectoria de más de 35 años trabajando en la rehabilitación y recuperación de deportistas profesionales, de elite y amateur.
        </p>
        <button class="boton-conocenos-mas">Conocenos mas...</button>
      </div>
    </div>
  </article>
  <div class="container-reload">
    <p>Actualizar Videos</p>
    <div class="background-ico-reload" id="btn-reload-videos">
      <img src="./img/ico-reload.png" alt="Actualizar Videos">
    </div>
  </div>
  <article class="container-video-servicios">
    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide swiper-slide--one" id="slide-1">
          <div class="btn-play-background display-btn-play-1">
            <img id="btn-slide-1" src="./img/ico-play.png" alt="Play Video">
          </div>
          <div class="container-loading-1">
            <div class="spinner"></div>
          </div>
          <div class="btn-pause-background">
            <img id="btn-pause-1" src="./img/ico-pausa.png" alt="Pausar Video">
          </div>
          <video id="video-1" disablefullscreen loop>
            <source src="./videos/video-1.mp4" type="video/mp4">
            Tu navegador no admite la reproducción de videos.
          </video>
          <div>
            <h2>Sucursal Pilar</h2>
          </div>
        </div>
        <div class="swiper-slide swiper-slide--two" id="slide-2">
          <div class="btn-play-background display-btn-play-2">
            <img id="btn-slide-2" src="./img/ico-play.png" alt="Play Video">
          </div>
          <div class="container-loading-2">
            <div class="spinner"></div>
          </div>
          <div class="btn-pause-background">
            <img id="btn-pause-2" src="./img/ico-pausa.png" alt="Pausar Video">
          </div>
          <video id="video-2" disablefullscreen loop>
            <source src="./videos/video-2.mp4" type="video/mp4">
            Tu navegador no admite la reproducción de videos.
          </video>
          <div>
            <h2>Sucursal C.A.B.A.</h2>
          </div>
        </div>
        <div class="swiper-slide swiper-slide--three" id="slide-3">
          <div class="btn-play-background display-btn-play-3">
            <img id="btn-slide-3" src="./img/ico-play.png" alt="Play Video">
          </div>
          <div class="container-loading-3">
            <div class="spinner"></div>
          </div>
          <div class="btn-pause-background">
            <img id="btn-pause-3" src="./img/ico-pausa.png" alt="Pausar Video">
          </div>
          <video id="video-3" disablefullscreen loop>
            <source src="./videos/video-3.mp4" type="video/mp4">
            Tu navegador no admite la reproducción de videos.
          </video>
          <div>
            <h2>Entrenamiento Grupal</h2>
          </div>
        </div>
        <div class="swiper-slide swiper-slide--four" id="slide-4">
          <div class="btn-play-background display-btn-play-4">
            <img id="btn-slide-4" src="./img/ico-play.png" alt="Play Video">
          </div>
          <div class="container-loading-4">
            <div class="spinner"></div>
          </div>
          <div class="btn-pause-background">
            <img id="btn-pause-4" src="./img/ico-pausa.png" alt="Pausar Video">
          </div>
          <video id="video-4" disablefullscreen loop>
            <source src="./videos/video-4.mp4" type="video/mp4">
            Tu navegador no admite la reproducción de videos.
          </video>
          <div>
            <h2>Trabajo en equipo</h2>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </article>  
  <article class="container-cards-servicios">
    <div class="card-service">
      <div class="card-img-shadow"><img src="./img/servicios-kinesiologia.png" alt="wanda"></div>
      <div class="card-content">
        <h2>Kinesiología</h2>
        <p>
          Todos los kinesiologos del staff de ambos centros fueron formados con un mismo protocolo de tratamientos con el fin de alcanzar una pronta vuelta al campo de juego y mejorar su rendimiento deportivo.
        </p>
      </div>
    </div>

    <div class="card-service">
      <div class="card-img-shadow"><img src="./img/servicios-traumatologia.png" alt="wanda"></div>
      <div class="card-content">
        <h2>Traumatología</h2>
        <p>
          El equipo de médicos esta conformado por profesionales especializados en deporte y con amplia trayectoria en Clubes de Primera división del Fútbol Argentino, Selección Nacional (AFA), Boxeo, Basquet, entre otros deportes.
        </p>
      </div>
    </div>

    <div class="card-service">
      <div class="card-img-shadow"><img src="./img/servicios-nutricion.png" alt="wanda"></div>
      <div class="card-content">
        <h2>Nutrición Deportiva</h2>
        <p>
          Area cargo de la Lic. Fiorella Bombicino. El objetivo es optimizar y mejorar el rendimiento deportivo, como también acompañar los procesos de recuperación. Trabajamos realizando educación alimentaria, antropometría y el plan de alimentación personalizado.
        </p>
      </div>
    </div>

    <div class="card-service">
      <div class="card-img-shadow"><img src="./img/servicios-entrenamientoPersonalizado.JPG" alt="wanda"></div>
      <div class="card-content">
        <h2>Osteopatía y RPG</h2>
        <p>
          De la mano de profesionales del staff brindamos el servicio de Reducacion Postural Global (RPG) y osteopatia, con el objetivo de lograr un abordaje integral a la patologia del paciente como también trabajar en la prevención de futuras lesiones.
        </p>
      </div>
    </div>

    <div class="card-service">
      <div class="card-img-shadow"><img src="./img/servicios-entrenamientoPersonalizado.JPG" alt="wanda"></div>
      <div class="card-content">
        <h2>Programa para deportistas profesionales</h2>
        <p>
          A cargo del Lic. Franco Bombicino, el programa incluye desde la rehabilitación, prevención y puesta a punto -off season- realizando trabajo de campo y de consultorio. 
          Este plan se realiza también de forma internacional ofreciendo al atleta que el profesional viaje al destino donde se encuentra y trabajar desde allí en conjunto.
        </p>
      </div>
    </div>

    <div class="card-service">
      <div class="card-img-shadow"><img src="./img/servicios-entrenamientoPersonalizado.JPG" alt="wanda"></div>
      <div class="card-content">
        <h2>Otras Especialidades</h2>
        <p>
          En el centro trabajamos con otras especialidades como: ortopedia, clínica médica, cardiología. 
          Para lograr un trabajo interdisciplinario total también trabajamos de forma estrecha y con vínculo directo con psicólogos , dermatólogos y especialistas en diagnóstico por imagen.
        </p>
      </div>
    </div>
  </article>

`;

const quienesSomos = `
  <article class="container-carrousel">
    <ul class="slider">
      <li class="slide s1"></li>
      <li class="slide s2"></li>
      <li class="slide s3"></li>
      <li class="slide s4"></li>
      <li class="slide s5"></li>
    </ul>
  </article>
  <article class="container-quienes-somos">
    <h2>Quienes Somos...</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eaque a ex est commodi aspernatur culpa aliquid consectetur tempora suscipit quis earum repudiandae asperiores, tenetur, labore dolorum. Exercitationem, praesentium totam.
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem iste incidunt in unde quisquam ipsa autem amet impedit fuga adipisci, nulla hic necessitatibus excepturi, pariatur minima. Eaque magnam incidunt tenetur?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab placeat inventore eius alias quae reprehenderit nihil, veniam aperiam delectus iure aut nesciunt exercitationem laboriosam. Tempore asperiores aliquid architecto impedit corporis!
      lorem
    </p>
  </article>
`;

const contacto = `
  <article class="container-contact">
    <div class="container-sucursales-contacto">
      <div class="columna-sucursal">
        <h3>Suc. Villa Urquiza - C.A.B.A.</h3>
        <div class="container-img">
          <img class="img-suc-incas" src="./img/sede-incas.jpg" alt="">
        </div>
        <div class="item-sucursal-contacto">
          <div class="ico-contacto"><a href="https://goo.gl/maps/uyJ6ZJUCHnYfCskS6" target="_blank"><img src="./img/location-ico.png" alt="Domicilio"></a></div>
          <div class="texto-direccion-contacto">
            <p>Av. Los Incas 5150, 5to Piso - C1427</p>
          </div>
        </div>
        <div class="item-sucursal-contacto">
          <div class="ico-contacto"><a href="tel:+5401145226668"><img src="./img/phone-ico.png" alt="Telefono"></a></div>   
          <p>011 4522-6668</p>
        </div>
        <div class="item-sucursal-contacto">
          <div class="ico-contacto"><a href="mailto:tfbombicino@gmail.com"><img src="./img/email.png" alt="Email"></a></div>
          <p>tfbombicino@gmail.com</p>
        </div>
      </div>

      <div class="columna-sucursal">
        <h3>Suc. Pilar - Buenos Aires</h3>
        <div class="container-img">
          <img class="img-suc-pilar" src="./img/sede-pilar.jpg" alt="">
        </div>
        <div class="item-sucursal-contacto">
          <div class="ico-contacto"><a href="https://maps.app.goo.gl/BvuG9Tg7AVk2VVUj7" target="_blank"><img src="./img/location-ico.png" alt="Domocilio"></a></div>
          <div class="texto-direccion-contacto">
            <p>
              Los Crisantemos 392 - Skyglass 3 Oficinas 103/104</p>
          </div>
        </div>
        <div class="item-sucursal-contacto">
          <div class="ico-contacto"><a href="tel:+5401139867300"><img src="./img/phone-ico.png" alt="Telefono"></a></div>   
          <p>011 3986-7300</p>
        </div>
        <div class="item-sucursal-contacto">
          <div class="ico-contacto"><a href="mailto:tfbombicino@gmail.com"><img src="./img/email.png" alt="Email"></a></div>
          <p>tfbombicino@gmail.com</p>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="item-instagram">
        <h3>Podes encontrarnos en:</h3>
        <div>
          <div class="ico-footer"><a href="https://www.instagram.com/terapia_fisica_bombicino/"  target="_blank"><img src="./img/instagram-ico.png" alt="Instagram"></a></div>
          <p>Instagram</p>
        </div>
      </div>
    </div>
  </article>
`;

const footer = `
  <div class="group-sucursales-footer">
    <div class="sucursal-footer">
      <h3>Suc. Villa Urquiza - C.A.B.A.</h3>
      <div class="item-footer">
        <div class="ico-footer"><a href="https://goo.gl/maps/uyJ6ZJUCHnYfCskS6" target="_blank"><img src="./img/location-ico.png" alt="Domocilio"></a></div>
        <div class="texto-direccion">
          <p>Av. Los Incas 5150, 5to Piso - C1427</p>
        </div>
      </div>
      <div class="item-footer">
        <div class="ico-footer"><a href="tel:+5401145226668"><img src="./img/phone-ico.png" alt="Telefono"></a></div>   
        <p>011 4522-6668</p>
      </div>
      <div class="item-footer">
        <div class="ico-footer"><a href="mailto:tfbombicino@gmail.com"><img src="./img/email.png" alt="Email"></a></div>
        <p>tfbombicino@gmail.com</p>
      </div>
    </div>

    <div class="sucursal-footer">
      <h3>Suc. Pilar - Buenos Aires</h3>
      <div class="item-footer">
        <div class="ico-footer"><a href="https://maps.app.goo.gl/BvuG9Tg7AVk2VVUj7" target="_blank"><img src="./img/location-ico.png" alt="Domicilio"></a></div>
        <div class="texto-direccion">
          <p>Los Crisantemos 392 - Skyglass 3 Oficinas 103/104</p>
        </div>
      </div>
      <div class="item-footer">
        <div class="ico-footer"><a href="tel:+5401139867300"><img src="./img/phone-ico.png" alt="Telefono"></a></div>   
        <p>011 3986-7300</p>
      </div>
      <div class="item-footer">
        <div class="ico-footer"><a href="mailto:tfbombicino@gmail.com"><img src="./img/email.png" alt="Email"></a></div>
        <p>tfbombicino@gmail.com</p>
      </div>
    </div>
  </div> 
`;


btnInicio.addEventListener("click",()=>{
  containerSection.innerHTML = ``;
  containerSection.innerHTML = index;
  containerFooter.innerHTML = "";
  containerFooter.innerHTML = footer;

  const btnConocenosMas = document.querySelector(".boton-conocenos-mas");
  const btnReloadVideos = document.querySelector("#btn-reload-videos");

  btnConocenosMas.addEventListener("click",()=>{

    containerSection.innerHTML = ``;
    containerSection.innerHTML = quienesSomos;
    containerFooter.innerHTML = "";
    containerFooter.innerHTML = footer;
  
  });

videosParaMostrar();

btnReloadVideos.addEventListener("click", ()=>{

  recargarVideos();

})


});

function recargarVideos() {

  containerSection.innerHTML = ``;
  containerSection.innerHTML = index;
  const btnConocenosMas = document.querySelector(".boton-conocenos-mas");
  const btnReloadVideos = document.querySelector("#btn-reload-videos");

  btnConocenosMas.addEventListener("click",()=>{

    containerSection.innerHTML = ``;
    containerSection.innerHTML = quienesSomos;
    containerFooter.innerHTML = "";
    containerFooter.innerHTML = footer;
  
  });

  videosParaMostrar();

  btnReloadVideos.addEventListener("click", ()=>{

    recargarVideos();
  
  })
}

btnReloadVideos.addEventListener("click", ()=>{

  recargarVideos();

})

btnQuienesSomos.addEventListener("click",()=>{
  containerSection.innerHTML = ``;
  containerSection.innerHTML = quienesSomos;
  containerFooter.innerHTML = "";
  containerFooter.innerHTML = footer;


});



btnContacto.addEventListener("click",()=>{
  containerSection.innerHTML = "";
  containerSection.innerHTML = contacto;
  containerFooter.innerHTML = "";
  

});

// Presentacion Videos




// Reproducir el video
function reproducirVideo(video) {
  document.querySelector(`#${video}`).play();
}

// Pausar el video
function pausarVideo(video) {
  document.querySelector(`#${video}`).pause();
}

// Detener el video y volver al inicio
function detenerVideo(video) {
  document.querySelector(`#${video}`).pause();
  document.querySelector(`#${video}`).currentTime = 0;
}

function actualizarVideos() {
  document.getElementById("video-1").addEventListener("loadedmetadata", ()=> {

    document.querySelector(".container-loading-1").style.display= "none";
    document.querySelector(".display-btn-play-1").style.display= `inherit`;
    descargoVideo1 = true;
  });

  document.getElementById("video-2").addEventListener("loadedmetadata", ()=> {

    document.querySelector(".container-loading-2").style.display = "none";
    document.querySelector(".display-btn-play-2").style.display=`inherit`;
    descargoVideo2 = true;
    
  });

  document.getElementById("video-3").addEventListener("loadedmetadata", ()=> {

    document.querySelector(".container-loading-3").style.display = "none";
    document.querySelector(".display-btn-play-3").style.display=`inherit`;
    descargoVideo3 = true;

  });

  document.getElementById("video-4").addEventListener("loadedmetadata", ()=> {

    document.querySelector(".container-loading-4").style.display = "none";
    document.querySelector(".display-btn-play-4").style.display=`inherit`;
    descargoVideo4 = true;

  });
}


function videosParaMostrar() {

  
  const slidePlay1 = document.getElementById("btn-slide-1");
  const slidePlay2 = document.getElementById("btn-slide-2");
  const slidePlay3 = document.getElementById("btn-slide-3");
  const slidePlay4 = document.getElementById("btn-slide-4");
  const slidePause1 = document.getElementById("btn-pause-1");
  const slidePause2 = document.getElementById("btn-pause-2");
  const slidePause3 = document.getElementById("btn-pause-3");
  const slidePause4 = document.getElementById("btn-pause-4");

  actualizarVideos();


  var swiper = new Swiper(".swiper", {

    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 2,
    speed: 600,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 3,
      slideShadows: true,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: false,
    },
  });
  
  
  slidePlay1.addEventListener("click",()=>{
      reproducirVideo("video-1");
      detenerVideo("video-2");
      slidePause2.style.display="none";
      slidePlay2.style.display="inherit";
      detenerVideo("video-3");
      slidePlay3.style.display="inherit";
      slidePause3.style.display="none";
      detenerVideo("video-4");
      slidePause4.style.display="none";
      slidePlay4.style.display="inherit";
      slidePause2.style.display="none";
      slidePause1.style.display="inherit";
      slidePlay1.style.display="none";

  });
  
  slidePause1.addEventListener("click",()=>{
    pausarVideo("video-1");
    slidePlay1.style.display="inherit";
    slidePause1.style.display="none";
  });
  
  
  slidePlay2.addEventListener("click",()=>{

      reproducirVideo("video-2");
      detenerVideo("video-1");
      slidePause1.style.display="none";
      slidePlay1.style.display="inherit";
      detenerVideo("video-3");
      slidePause3.style.display="none";
      slidePlay3.style.display="inherit";
      detenerVideo("video-4");
      slidePause4.style.display="none";
      slidePlay4.style.display="inherit";
      slidePause2.style.display="inherit";
      slidePlay2.style.display="none";
  });

  slidePause2.addEventListener("click",()=>{
    pausarVideo("video-2");
    slidePlay2.style.display="inherit";
    slidePause2.style.display="none";
  });
  
  slidePlay3.addEventListener("click",()=>{

      reproducirVideo("video-3");
      detenerVideo("video-1");
      slidePause1.style.display="none";
      slidePlay1.style.display="inherit";
      detenerVideo("video-2");
      slidePause2.style.display="none";
      slidePlay2.style.display="inherit";
      detenerVideo("video-4");
      slidePause4.style.display="none";
      slidePlay4.style.display="inherit";
      slidePause3.style.display="inherit";
      slidePlay3.style.display="none";
  })

  slidePause3.addEventListener("click",()=>{
    pausarVideo("video-3");
    slidePlay3.style.display="inherit";
    slidePause3.style.display="none";
  });
    
  
  slidePlay4.addEventListener("click",()=>{

      reproducirVideo("video-4");
      detenerVideo("video-1");
      slidePause1.style.display="none";
      slidePlay1.style.display="inherit";
      detenerVideo("video-2");
      slidePause2.style.display="none";
      slidePlay2.style.display="inherit";
      detenerVideo("video-3");
      slidePause3.style.display="none";
      slidePlay3.style.display="inherit";
      slidePause4.style.display="inherit";
      slidePlay4.style.display="none";
  })

  slidePause4.addEventListener("click",()=>{
    pausarVideo("video-4");
    slidePlay4.style.display="inherit";
    slidePause4.style.display="none";
  });

  
}

videosParaMostrar();
