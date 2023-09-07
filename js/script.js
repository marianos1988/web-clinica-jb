const btnInicio = document.querySelector(".btn-inicio");
const btnQuienesSomos = document.querySelector(".btn-quienes-somos");
const btnContacto = document.querySelector(".btn-contacto");
const section = document.querySelector(".container-section");
const containerFooter = document.querySelector(".container-footer");
const containerSection = document.querySelector(".container-section");
const btnConocenosMas = document.querySelector(".boton-conocenos-mas");

//mover icono whatsapp
const desplazarIconoWP = () =>{

  const verificarVisibilidad  = (entrada)=> {
    
    if(entrada[0].isIntersecting){
      
      document.querySelector(".float-wp").style.bottom = "160px";
      document.querySelector(".float-wp").style.transition= "bottom .5s ease";

    } else {

      document.querySelector(".float-wp").style.bottom = "60px";
      document.querySelector(".float-wp").style.transition= "bottom .5s ease";
    }
  }
  
  const observer = new IntersectionObserver(verificarVisibilidad)

  observer.observe(document.querySelector(".group-items-footer")); 
}

desplazarIconoWP();

btnConocenosMas.addEventListener("click",()=>{

  containerSection.innerHTML = ``;
  containerSection.innerHTML = quienesSomos;
  containerFooter.innerHTML = "";
  containerFooter.innerHTML = footer;

});

const index = `

    <div class="division-titulo quienes-somos">
      <div class="fondo-division-titulo">
        <img class="logo-1" src="./img/jb.jpg" alt="Logo">
        <h1>Bienvenido</h1>
        <img class="logo-2" src="./img/jb.jpg" alt="Logo">
      </div>
    </div>
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
    <div class="division-titulo">
      <div class="fondo-division-titulo">
        <img class="logo-3" src="./img/jb.jpg" alt="Logo">
        <h1>Servicios</h1>
        <img class="logo-4" src="./img/jb.jpg" alt="Logo">
      </div>
    </div>
    <article class="container-galeria-servicios">
      <div class="grid">
        <div class="item">
          <p>Kinesiologia</p>
          <div class="img-wrapper">
            <img class="img-servicios" src="./img/servicios-kinesiologia.png" alt='Kinesiologia'>
          </div>
        </div>
        <div class="item">
          <p>Nutricion</p>
          <div class="img-wrapper">
            <img class="img-servicios" src='./img/servicios-nutricion.png' alt='Nutricion'>
          </div>
        </div>
        <div class="item">
          <p>Consultas Medicas</p>
          <div class="img-wrapper">
            <img class="img-servicios" src='./img/servicios-consultasmedicas.png' alt='Consultas Medicas'>
          </div>
        </div>
        <div class="item">
          <p>Entrenamiento Personalizado</p>
          <div class="img-wrapper">
            <img class="img-servicios" src='./img/servicios-entrenamientoPersonalizado.JPG' alt="Entrenamiento Personalizado">
          </div>
        </div>
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
    <div class="content">
      <h2>Contacto</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem numquam id reprehenderit, sunt laudantium enim possimus repellat debitis et quis!</p>
    </div>
    <div class="container">
      <div class="contactInfo">
        <div class="box">
          <div class="ico-footer"><a href="https://goo.gl/maps/uyJ6ZJUCHnYfCskS6" target="_blank"><img src="./img/location-ico.png" alt="Domocilio"></a></div>
          <div class="text">
            <h3>Domicilio</h3>
            <p>Av. De Los Incas 5150<br>Ciudad Autonoma de Buenos Aires<br>C1427</p>
          </div>
        </div>
        <div class="box">
          <div class="ico-footer"><a href="tel:+12341234"><img src="./img/phone-ico.png" alt="Telefono"></a></div>
          <div class="text">
            <h3>Telefono</h3>
            <p>000-000-0000</p>
          </div>
        </div>
        <div class="box">
          <div class="ico-footer"><a href="mailto:correo@example.com"><img src="./img/email.png" alt="Email"></a></div>
          <div class="text">
            <h3>Email</h3>
            <p>wrub7d78i0e@temporary-mail</p>
          </div>
        </div>
        <div class="box">
          <div class="group-redes-sociales">
            <h3>Redes Sociales</h3>
            <div class="item-footer redes-sociales-footer">
                <div class="item-red-social">
                  <div class="ico-footer"><a href="https://www.instagram.com/terapia_fisica_bombicino/"  target="_blank"><img src="./img/instagram-ico.png" alt="Instagram"></a></div>
                  <p>Instagram</p>
                </div>
                <div class="item-red-social">
                  <div class="ico-footer"><a href="https://www.facebook.com/clinicajorgebombicino" target="_blank"><img src="./img/facebook-ico.png" alt="Facebook"></a></div>
                  <p>Facebook</p>
                </div>
            </div>
          </div>
      </div>
    </div>
  </article>
`;

const footer = `
  <div class="group-items-footer">
    <div class="item-footer">
      <div class="ico-footer"><a href="https://goo.gl/maps/uyJ6ZJUCHnYfCskS6" target="_blank"><img src="./img/location-ico.png" alt="Domocilio"></a></div>
      <div class="texto-direccion">
        <p>Av. De Los Incas 5150</p>
        <p>Ciudad Autonoma de Buenos Aires</p>
        <p>C1427</p>
      </div>
    </div>
    <div class="item-footer">
      <div class="group-tel-email">
        <div class="item-tel-email">
          <div class="ico-footer"><a href="tel:+12341234"><img src="./img/phone-ico.png" alt="Telefono"></a></div>   
          <p>011 1234-1234</p>
        </div>
        <div class="item-tel-email">
          <div class="ico-footer"><a href="mailto:correo@example.com"><img src="./img/email.png" alt="Email"></a></div>
          <p>sarasa@gmail.com</p>
        </div>
      </div>
    </div>
    <div class="item-footer redes-sociales-footer">
      <div class="group-redes-sociales-footer">
        <div class="item-red-social">
          <div class="ico-footer"><a href="https://www.instagram.com/terapia_fisica_bombicino/"  target="_blank"><img src="./img/instagram-ico.png" alt="Instagram"></a></div>
          <p>Instagram</p>
        </div>
        <div class="item-red-social">
          <div class="ico-footer"><a href="https://www.facebook.com/clinicajorgebombicino" target="_blank"><img src="./img/facebook-ico.png" alt="Facebook"></a></div>
          <p>Facebook</p>
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

  //Muestra fotos del responsive servicios
  mostrarServiciosResponsive();
  desplazarIconoWP();

});

btnQuienesSomos.addEventListener("click",()=>{
  containerSection.innerHTML = ``;
  containerSection.innerHTML = quienesSomos;
  containerFooter.innerHTML = "";
  containerFooter.innerHTML = footer;
  desplazarIconoWP();

});



btnContacto.addEventListener("click",()=>{
  containerSection.innerHTML = "";
  containerSection.innerHTML = contacto;
  containerFooter.innerHTML = "";
  


});


// REsponsive Servicios
const mostrarServiciosResponsive = () => {
  const grid = document.querySelector('.grid')
  const items = document.querySelectorAll('.item')
  
  items.forEach((item) => {
    item.addEventListener('mouseenter', () => {
      gsap.to(grid, {
        '--track': '2fr',
        duration: 0.3,
      })
      gsap.to(item, {
        '--innerTrack': '1fr',
        duration: 0.3,
      })
    })
  
    item.addEventListener('mouseleave', () => {
      gsap.to(grid, {
        '--track': '1fr',
        duration: 0.3,
      })
      gsap.to(item, {
        '--innerTrack': '0fr',
        duration: 0.3,
      })
    })
  })
}


