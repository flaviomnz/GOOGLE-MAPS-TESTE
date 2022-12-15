
// CONSUMO DA API 
let popupUniversidades;


async function fetchApi(){
  const universidades = await fetch('https://deno-api-fake.deno.dev/api/universidade').then((res) => res.json());
  
  let map = L.map('map').setView([51.505, -0.09], 13);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  
   
  //LOOP INFO API
  for (let i = 0; i < universidades.length; i++) {
    popupUniversidades = `<a href="#${universidades[i].nome}"><h2>${universidades[i].nome}</h2></a>`;

    let marker = L.marker([universidades[i].lat, universidades[i].lon]).bindPopup(popupUniversidades);
    L.marker([universidades[i].lat, universidades[i].lon]).addTo(map)
    .bindPopup(popupUniversidades)
    .openPopup();
   
  }
  }

  fetchApi()
