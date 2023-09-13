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
  <article class="container-galeria-servicios">
    <div class="grid">
      <div class="item" id="video-1">
        <p>Pilar</p>
        <div class="img-wrapper video-1">
        </div>
      </div>
      <div class="item" id="video-2">
        <p>Capital Federal</p>
        <div class="img-wrapper video-2">
        </div>
      </div>
      <div class="item" id="video-3">
        <p>Consultas Medicas</p>
        <div class="img-wrapper video-3">
        </div>
      </div>
      <div class="item" id="video-4">
        <p>Entrenamiento Personalizado</p>
        <div class="img-wrapper video-4">
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
    <div class="content">
      <h2>Contacto</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem numquam id reprehenderit, sunt laudantium enim possimus repellat debitis et quis!</p>
      <div class="item-instagram">
        <h3>Podes encontrarnos en:</h3>
        <div>
          <div class="ico-footer"><a href="https://www.instagram.com/terapia_fisica_bombicino/"  target="_blank"><img src="./img/instagram-ico.png" alt="Instagram"></a></div>
          <p>Instagram</p>
        </div>
      </div>
    </div>
    <div class="container-sucursales-contacto">
      <div class="columna-sucursal">
        <h3>Villa Urquiza - C.A.B.A.</h3>
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

  //Muestra fotos del responsive servicios
  mostrarServiciosResponsive();


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
      if(item.id === `video-1`) {
        document.querySelector(`.${item.id}`).innerHTML = `
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/dSHgRZGIznU?autoplay=1&controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        `;
      }
      else if(item.id === `video-2`) {
        document.querySelector(`.${item.id}`).innerHTML = `
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/9sqbAadwIm0?autoplay=1&controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        `;
      }
      else if(item.id === `video-3`) {
        document.querySelector(`.${item.id}`).innerHTML = `
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Vc41jG_84cQ?autoplay=1&controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        `;
      }
      else if(item.id === `video-4`) {
        document.querySelector(`.${item.id}`).innerHTML = `
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/kymMZhvyTXo?autoplay=1&controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        `;
      }
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
      if(item.id === `video-1`) {
        document.querySelector(`.${item.id}`).innerHTML = `
  
        `;
      }
      else if(item.id === `video-2`) {
        document.querySelector(`.${item.id}`).innerHTML = `
  
        `;
      }
      else if(item.id === `video-3`) {
        document.querySelector(`.${item.id}`).innerHTML = `
  
        `;
      }
      else if(item.id === `video-4`) {
        document.querySelector(`.${item.id}`).innerHTML = `
  
        `;
      }
    })
  })
}


