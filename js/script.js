const btnInicio = document.querySelector(".btn-inicio");
const btnQuienesSomos = document.querySelector(".btn-quienes-somos");
const btnContacto = document.querySelector(".btn-contacto");
const section = document.querySelector(".container-section");
const containerFooter = document.querySelector(".container-footer");
const containerSection = document.querySelector(".container-section");
const btnConocenosMas = document.querySelector(".boton-conocenos-mas");
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
        <h3>Especialista atletas de alto rendimiento</h3>
        <p>
          Nuestra clinica se especializa a tratar a pacientes deportistas bla bla bla
        </p>
        <button class="boton-conocenos-mas">Conocenos mas...</button>
      </div>
    </div>
  </article>
  <article class="container-video-servicios">
    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide swiper-slide--one" id="slide-1">
          <video id="video-1">
            <source src="./videos/video-1.mp4" type="video/mp4">
            Tu navegador no admite la reproducción de videos.
          </video>
          <div>
            <h2>Sucursal Pilar</h2>
          </div>
        </div>
        <div class="swiper-slide swiper-slide--two" id="slide-2">
          <video id="video-2">
            <source src="./videos/video-2.mp4" type="video/mp4">
            Tu navegador no admite la reproducción de videos.
          </video>
          <div>
            <h2>Sucursal C.A.B.A.</h2>
          </div>
        </div>
        <div class="swiper-slide swiper-slide--three" id="slide-3">
          <video id="video-3">
            <source src="./videos/video-3.mp4" type="video/mp4">
            Tu navegador no admite la reproducción de videos.
          </video>
          <div>
            <h2>Entrenamiento Grupal</h2>
          </div>
        </div>
        <div class="swiper-slide swiper-slide--four" id="slide-4">
          <video id="video-4">
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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam rerum consectetur commodi, ducimus ipsam tenetur tempore?</p>
      </div>
    </div>

    <div class="card-service">
      <div class="card-img-shadow"><img src="./img/servicios-nutricion.png" alt="wanda"></div>
      <div class="card-content">
        <h2>Nutrición</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam rerum consectetur commodi, ducimus ipsam tenetur tempore?</p>
      </div>
    </div>

    <div class="card-service">
      <div class="card-img-shadow"><img src="./img/servicios-consultasmedicas.png" alt="wanda"></div>
      <div class="card-content">
        <h2>Consultas Medicas</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam rerum consectetur commodi, ducimus ipsam tenetur tempore?</p>
      </div>
    </div>

    <div class="card-service">
      <div class="card-img-shadow"><img src="./img/servicios-entrenamientoPersonalizado.JPG" alt="wanda"></div>
      <div class="card-content">
        <h2>Entrenamiento Personalizado</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam rerum consectetur commodi, ducimus ipsam tenetur tempore?</p>
      </div>
    </div>

    <div class="card-service">
      <div class="card-img-shadow"><img src="./img/servicios-entrenamientoPersonalizado.JPG" alt="wanda"></div>
      <div class="card-content">
        <h2>Entrenamiento Personalizado</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam rerum consectetur commodi, ducimus ipsam tenetur tempore?</p>
      </div>
    </div>

    <div class="card-service">
      <div class="card-img-shadow"><img src="./img/servicios-entrenamientoPersonalizado.JPG" alt="wanda"></div>
      <div class="card-content">
        <h2>Entrenamiento Personalizado</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam rerum consectetur commodi, ducimus ipsam tenetur tempore?</p>
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
        <h3>Villa Urquiza - C.A.B.A.</h3>
        <img class="img-suc-incas" src="./img/sede-incas.jpg" alt="">
        <div class="item-sucursal-contacto">
          <div class="ico-contacto"><a href="https://goo.gl/maps/uyJ6ZJUCHnYfCskS6" target="_blank"><img src="./img/location-ico.png" alt="Domocilio"></a></div>
          <div class="texto-direccion-contacto">
            <p>Av. De Los Incas 5150 - C1427</p>
          </div>
        </div>
        <div class="item-sucursal-contacto">
          <div class="ico-contacto"><a href="tel:+12341234"><img src="./img/phone-ico.png" alt="Telefono"></a></div>   
          <p>011 1234-1234</p>
        </div>
        <div class="item-sucursal-contacto">
          <div class="ico-contacto"><a href="mailto:correo@example.com"><img src="./img/email.png" alt="Email"></a></div>
          <p>scaba@gmail.com</p>
        </div>
      </div>

      <div class="columna-sucursal">
        <h3>Pilar - Buenos Aires</h3>
        <img class="img-suc-pilar" src="./img/sede-pilar.jpg" alt="">
        <div class="item-sucursal-contacto">
          <div class="ico-contacto"><a href="https://goo.gl/maps/uyJ6ZJUCHnYfCskS6" target="_blank"><img src="./img/location-ico.png" alt="Domocilio"></a></div>
          <div class="texto-direccion-contacto">
            <p>Av. Moreno 560 - C1520</p>
          </div>
        </div>
        <div class="item-sucursal-contacto">
          <div class="ico-contacto"><a href="tel:+12341234"><img src="./img/phone-ico.png" alt="Telefono"></a></div>   
          <p>011 4444-5555</p>
        </div>
        <div class="item-sucursal-contacto">
          <div class="ico-contacto"><a href="mailto:correo@example.com"><img src="./img/email.png" alt="Email"></a></div>
          <p>pilar@gmail.com</p>
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
      <h3>Villa Urquiza - C.A.B.A.</h3>
      <div class="item-footer">
        <div class="ico-footer"><a href="https://goo.gl/maps/uyJ6ZJUCHnYfCskS6" target="_blank"><img src="./img/location-ico.png" alt="Domocilio"></a></div>
        <div class="texto-direccion">
          <p>Av. De Los Incas 5150 - C1427</p>
        </div>
      </div>
      <div class="item-footer">
        <div class="ico-footer"><a href="tel:+12341234"><img src="./img/phone-ico.png" alt="Telefono"></a></div>   
        <p>011 1234-1234</p>
      </div>
      <div class="item-footer">
        <div class="ico-footer"><a href="mailto:correo@example.com"><img src="./img/email.png" alt="Email"></a></div>
        <p>scaba@gmail.com</p>
      </div>
    </div>

    <div class="sucursal-footer">
      <h3>Pilar - Buenos Aires</h3>
      <div class="item-footer">
        <div class="ico-footer"><a href="https://goo.gl/maps/uyJ6ZJUCHnYfCskS6" target="_blank"><img src="./img/location-ico.png" alt="Domocilio"></a></div>
        <div class="texto-direccion">
          <p>Av. Moreno 560 - C1520</p>
        </div>
      </div>
      <div class="item-footer">
        <div class="ico-footer"><a href="tel:+12341234"><img src="./img/phone-ico.png" alt="Telefono"></a></div>   
        <p>011 4444-5555</p>
      </div>
      <div class="item-footer">
        <div class="ico-footer"><a href="mailto:correo@example.com"><img src="./img/email.png" alt="Email"></a></div>
        <p>pilar@gmail.com</p>
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

  btnConocenosMas.addEventListener("click",()=>{

    containerSection.innerHTML = ``;
    containerSection.innerHTML = quienesSomos;
    containerFooter.innerHTML = "";
    containerFooter.innerHTML = footer;
  
  });

videosParaMostrar();

});

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

function videosParaMostrar() {

  const slide1 = document.getElementById("slide-1");
  const slide2 = document.getElementById("slide-2");
  const slide3 = document.getElementById("slide-3");
  const slide4 = document.getElementById("slide-4");
  var estadoVideo1 = false;
  var estadoVideo2 = false;
  var estadoVideo3 = false;
  var estadoVideo4 = false;

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
  
  
  slide1.addEventListener("click",()=>{
    if(estadoVideo1) {
      detenerVideo("video-1");
      estadoVideo1 = false;
    } 
    else {
      reproducirVideo("video-1");
      estadoVideo1 = true;
    } 
  })
  
  
  slide2.addEventListener("click",()=>{
    if(estadoVideo2) {
      detenerVideo("video-2");
      estadoVideo2 = false;
    } 
    else {
      reproducirVideo("video-2");
      estadoVideo2 = true;
    } 
  });
  
  slide3.addEventListener("click",()=>{
    if(estadoVideo3) {
      detenerVideo("video-3");
      estadoVideo3 = false;
    } 
    else {
      reproducirVideo("video-3");
      estadoVideo3 = true;
    } 
  })
    
  
  slide4.addEventListener("click",()=>{
    if(estadoVideo4) {
      detenerVideo("video-4");
      estadoVideo4 = false;
    } 
    else {
      reproducirVideo("video-4");
      estadoVideo4 = true;
    } 
  })

  
}

videosParaMostrar();
