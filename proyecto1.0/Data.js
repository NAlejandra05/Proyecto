var dataCarros = [
    { 
      id:1,
      imagen: './img/1.jpg',
      marca: 'Nissan',
      modelo: 'March',
      año: '2022',  
      transmisión:'Manual',
      consumo:'15 km/l',
      características:'Aire acondicionado,Radio reproductor MP3, usb, Bluetooth y 4 parlantes',
      seguridad:'ABS,Airbags',
      tarifa: '$80.000',
      kilometraje:'Iimitado',

    },
    { 
      id:2,
      imagen: './img/2.jpg',
      marca:'Toyota',
      modelo:'Corolla',
      año: '2021',  
      transmisión:'Automática',
      consumo:'18 km/l',
      características:'Sistema de navegación, Asientos de cuero, Cámara de retroceso',
      seguridad:'Control de estabilidad, Airbags',
      tarifa:'$120.000',
      kilometraje:'Iimitado'
    },
    { 
        id:3,
        imagen: './img/3.jpg',
        marca: 'Ford',
        modelo: 'Fiesta', 
        año: 2020,
        transmisión:'Manual',
        consumo:'16 km/l',
        características:'Sistema entretenimiento,Asientos plegables,Bluetooth',
        seguridad:'Frenos ABS, Airbags laterales',
        tarifa:'$95.000',
        kilometraje:'Iimitado',
        
    },
    { 
        id:4,
        imagen: './img/4.jpg',
        marca: 'Honda',
        modelo: 'Civic', 
        año: 2023,
        transmisión:'Automática',
        consumo:'20 km/l',
        características:'Techo solar, Pantalla táctil, Control de crucero',
        seguridad:'Asistente de frenado, Cámara de visión trasera',
        tarifa:'$115.000',
        kilometraje:'Iimitado',
    },
    { 
        id:5,
        imagen: './img/5.jpg',
        marca: 'Chevrolet',
        modelo: 'Spark', 
        año: 2021,
        transmisión:'Manual',
        consumo:'14 km/l',
        características:'Aire acondicionado,x',
        seguridad:'Bolsas de aire frontales, Frenos ABS',
        tarifa:'$85.000',
        kilometraje:'Iimitado',
    },
    { 
        id:6,
        imagen: './img/6.avif',
        marca: 'Volkswagen',
        modelo: 'Golf', 
        año: 2022,
        transmisión:'Automática',
        consumo:'17 km/l',
        características:'Sistema de infoentretenimiento, Asientos deportivos, Conexión Bluetooth',
        seguridad:'Control de tracción, Airbags frontales y laterales',
        tarifa:'$123.000',
        kilometraje:'Iimitado',
    },
    { 
        id:7,
        imagen: './img/7.jpg',
        marca: 'Hyundai',
        modelo: 'Accent', 
        año:  2020,
        transmisión:'Manual',
        consumo:'16.5 km/l',
        características:'Pantalla táctil, Sistema de sonido premium, Conexión USB',
        seguridad:'Sistema de frenos asistidos, Bolsas de aire',
        tarifa:'$380.000',
        kilometraje:'Iimitado',
    },
    { 
        id:8,
        imagen: './img/8.jpg',
        marca: 'Kia',
        modelo: 'Rio', 
        año: 2023 ,
        transmisión:'Automática',
        consumo:'19 km/l',
        características:'Asientos calefactados, Navegación por satélite, Conexión Bluetooth',
        seguridad:'Asistente de mantenimiento de carril, Bolsas de aire laterales',
        tarifa:'$126.000',
        kilometraje:'Iimitado',
    },
    { 
        id:9,
        imagen: './img/9.jpg',
        marca: 'Subaru',
        modelo: 'Impreza', 
        año: 2021 ,
        transmisión:'Manual',
        consumo:' 15.5 km/l',
        características:'Tracción en las cuatro ruedas, Sistema de audio Harman Kardon, Techo corredizo',
        seguridad:'Sistema de monitoreo de punto ciego, Control de estabilidad',
        tarifa:'$200.000',
        kilometraje:'Iimitado',
    },
    { 
        id:10,
        imagen: './img/10.jpg',
        marca: 'Mazda',
        modelo: 'Mazda3', 
        año: 2022 ,
        transmisión:'Automática',
        consumo:'18.5 km/l',
        características:' Sistema de sonido Bose, Pantalla táctil, Conexión USB',
        seguridad:'Frenos antibloqueo, Bolsas de aire laterales y de cortina',
        tarifa:'$320.000',
        kilometraje:'Iimitado',
    },
    { 
        id:11,
        imagen: './img/11.jpg',
        marca: 'Mercedes-Benz',
        modelo: 'A-Class', 
        año: 2020,
        transmisión:'Automática',
        consumo:'16 km/l',
        características:'Asientos de cuero, Sistema de navegación, Techo panorámico',
        seguridad:' Sistema de frenado de emergencia, Control de crucero adaptativo',
        tarifa:'$290.000',
        kilometraje:'Iimitado',
    },
    { 
        id:12,
        imagen: './img/12.jpg',
        marca: 'BMW',
        modelo: '3 Series', 
        año:  2023,
        transmisión:'Automática',
        consumo:'17.5 km/l',
        características:'Sistema de infoentretenimiento iDrive, Asientos deportivos, Conexión Bluetooth',
        seguridad:'Control de tracción, Bolsas de aire frontales y laterales',
        tarifa:'$360.000',
        kilometraje:'Iimitado',
    },
    { 
        id:13,
        imagen: './img/13.webp',
        marca: 'Audi',
        modelo: ' A4', 
        año: 2021 ,
        transmisión:'Manual',
        consumo:'16.8 km/l',
        características:'Sistema de sonido Bang & Olufsen, Pantalla táctil, Conexión USB',
        seguridad:' Asistente de cambio de carril, Frenos ABS',
        tarifa:'$245.000',
        kilometraje:'Iimitado',
    },
    { 
        id:14,
        imagen: './img/14.jpg',
        marca: 'Jaguar',
        modelo: ' XE', 
        año: 2022,
        transmisión:'Automática',
        consumo:'15.2 km/l',
        características:' Asientos eléctricos, Sistema de sonido Meridian, Conexión Bluetooth',
        seguridad:'Sistema de monitoreo de punto ciego, Bolsas de aire laterales',
        tarifa:'$336.000',
        kilometraje:'Iimitado',
    },
    { 
        id:15,
        imagen: './img/15.webp',
        marca: 'Land Rover',
        modelo: 'Range Rover Evoque', 
        año:  2020,
        transmisión:'Automática',
        consumo:'14.5 km/l',
        características:'Asientos de piel, Sistema de navegación, Techo panorámico',
        seguridad:'Control de estabilidad, Bolsas de aire frontales y laterales',
        tarifa:'$200.000',
        kilometraje:'Iimitado',
    },
    { 
        id:16,
        imagen: './img/16.jpg',
        marca: 'Volvo',
        modelo: 'S60', 
        año: 2023,
        transmisión:'Manual',
        consumo:'17.3 km/l',
        características:'Sistema de audio premium, Pantalla táctil, Conexión USB',
        seguridad:'Frenos antibloqueo, Bolsas de aire laterales',
        tarifa:'$190.000',
        kilometraje:'Iimitado',
    },
    { 
        id:17,
        imagen: './img/17.avif',
        marca: 'Tesla',
        modelo: 'Model 3', 
        año:  2021,
        transmisión:' Automática',
        consumo:' 22 km/l',
        características:'Autopilot, Pantalla táctil de 15 pulgadas, Techo de vidrio panorámico',
        seguridad:'Sistema de conducción autónoma, Bolsas de aire frontales y laterales',
        tarifa:'$270.000',
        kilometraje:'Iimitado',
    },
    { 
        id:18,
        imagen: './img/18.jpg',
        marca: 'Fiat',
        modelo: '500', 
        año:   2022,
        transmisión:' Manual',
        consumo:'14.8 km/l',
        características:'Techo corredizo, Sistema de sonido Beats, Conexión Bluetooth',
        seguridad:'Frenos ABS, Bolsas de aire frontales',
        tarifa:'$145.000',
        kilometraje:'Iimitado',
    },
    { 
        id:19,
        imagen: './img/19.jpg',
        marca: 'Alfa Romeo',
        modelo: 'Giulia', 
        año:2020,
        transmisión:'Automática',
        consumo:'15.5 km/l',
        características:'Asientos deportivos, Sistema de infoentretenimiento, Conexión USB',
        seguridad:'Control de estabilidad, Bolsas de aire laterales',
        tarifa:'$260.000',
        kilometraje:'Iimitado',
    },
    { 
        id:20,
        imagen: './img/20.jpeg',
        marca: 'Maserati',
        modelo: 'Ghibli', 
        año:2023,
        transmisión:' Automática',
        consumo:'13.5 km/l',
        características:'Asientos de cuero, Sistema de sonido Bowers & Wilkins, Navegación por satélite',
        seguridad:'Sistema de frenado autónomo, Bolsas de aire frontales y laterales',
        tarifa:'$150.000',
        kilometraje:'Iimitado',
    },
    { 
        id:21,
        imagen: './img/21.jpg',
        marca: 'Porsche',
        modelo: '911', 
        año: 2021,
        transmisión:'Manual',
        consumo:'12.5 km/l',
        características:'Asientos deportivos, Sistema de infoentretenimiento, Conexión Bluetooth',
        seguridad:'Control de tracción, Bolsas de aire frontales y laterales',
        tarifa:'$200.000',
        kilometraje:'Iimitado',
    },
    { 
        id:22,
        imagen: './img/22.jpeg',
        marca: 'Lexus',
        modelo: 'IS', 
        año: 2022,
        transmisión:'Automática',
        consumo:'16.5 km/l',
        características:'Asientos eléctricos, Sistema de navegación, Conexión USB',
        seguridad:'Asistente de cambio de carril, Bolsas de aire laterales',
        tarifa:'$280.000',
        kilometraje:'Iimitado',
    },
    { 
        id:23,
        imagen: './img/23.jpg',
        marca: 'Infiniti',
        modelo: 'Q50', 
        año: 2020,
        transmisión:'Manual',
        consumo:'15 km/l',
        características:' Techo solar, Sistema de sonido Bose, Conexión Bluetooth',
        seguridad:'Control de estabilidad, Bolsas de aire frontales y laterales',
        tarifa:'$300.000',
        kilometraje:'Iimitado',
    },
    { 
        id:24,
        imagen: './img/24.jpeg',
        marca: 'Buick',
        modelo: 'Verano', 
        año:2023,
        transmisión:'Automática',
        consumo:'17 km/l',
        características:'Asientos de cuero, Sistema de infoentretenimiento, Conexión USB',
        seguridad:'Sistema de monitoreo de punto ciego, Bolsas de aire laterales',
        tarifa:'$200.000',
        kilometraje:'Iimitado',
    },
    { 
        id:25,
        imagen: './img/1.jpg',
        marca:'Rolls-Royce',
        modelo: 'Ghost', 
        año:2021,
        transmisión:'Automática',
        consumo:'10 km/l',
        características:'Asientos reclinables, Sistema de sonido premium, Techo de estrellas',
        seguridad:' Sistema de frenado autónomo, Bolsas de aire frontales y laterales',
        tarifa:'$380.000',
        kilometraje:'Iimitado',
    },
    { 
        id:26,
        imagen: './img/26.jpeg',
        marca:'Fiat',
        modelo:'Tipo', 
        año:2022,
        transmisión:'Manual',
        consumo:'16 km/l',
        características:'Pantalla táctil, Conexión Bluetooth, Control de crucero',
        seguridad:'Frenos ABS, Airbags',
        tarifa:'$250.000',
        kilometraje:'Iimitado',
    },
    { 
        id:27,
        imagen: './img/27.jpg',
        marca:'Peugeot',
        modelo:'208', 
        año:2021,
        transmisión:'Automática',
        consumo:'14.5 km/l',
        características:'Techo panorámico, Sistema de infoentretenimiento, Conexión USB',
        seguridad:'Control de estabilidad, Bolsas de aire laterales',
        tarifa:'$190.000',
        kilometraje:'Iimitado',
    },
    { 
        id:28,
        imagen: './img/28.jpg',
        marca:'Mini',
        modelo:'Cooper', 
        año:2023,
        transmisión:'Manual',
        consumo:'15.8 km/l',
        características:'Asientos deportivos, Sistema de sonido Harman Kardon, Conexión Bluetooth',
        seguridad:'Sistema de frenado de emergencia, Bolsas de aire frontales y laterales',
        tarifa:'$390.000',
        kilometraje:'Iimitado',
    },
    { 
        id:29,
        imagen: './img/29.jpg',
        marca:'GMC',
        modelo:'Terrain', 
        año:2020,
        transmisión:'Automática',
        consumo:' 13 km/l',
        características:'Asientos de cuero, Sistema de infoentretenimiento, Cámara de retroceso',
        seguridad:'Control de tracción, Airbags',
        tarifa:'$380.000',
        kilometraje:'Iimitado',
    },
    { 
        id:30,
        imagen: './img/30.png',
        marca:'Ram',
        modelo:'1500', 
        año:2022,
        transmisión:'Automática',
        consumo:'11 km/l',
        características:'Sistema de navegación, Asientos eléctricos, Conexión USB',
        seguridad:'Asistente de frenado, Bolsas de aire laterales',
        tarifa:'$250.000',
        kilometraje:'Iimitado',
    },
    { 
        id:31,
        imagen: './img/31.webp',
        marca:'Suzuki',
        modelo:'Swift', 
        año:2021,
        transmisión:'Manual',
        consumo:'17.5 km/l',
        características:'Sistema de sonido premium, Pantalla táctil, Conexión Bluetooth',
        seguridad:' Control de estabilidad, Bolsas de aire frontales y laterales',
        tarifa:'$150.000',
        kilometraje:'Iimitado',
    },
    { 
        id:32,
        imagen: './img/32.webp',
        marca:'Acura',
        modelo:' ILX', 
        año:2023,
        transmisión:'Automática',
        consumo:' 16.2 km/l',
        características:'Asientos de cuero, Sistema de infoentretenimiento, Navegación por satélite',
        seguridad:'Asistente de cambio de carril, Bolsas de aire laterales',
        tarifa:'$280.000',
        kilometraje:'Iimitado',
    },
    { 
        id:33,
        imagen: './img/33.jpg',
        marca:'Mitsubishi',
        modelo:'Outlander', 
        año:2020,
        transmisión:' Automática',
        consumo:'14.3 km/l',
        características:'Tercera fila de asientos, Sistema de sonido Rockford Fosgate, Cámara de retroceso',
        seguridad:'Control de tracción, Airbags',
        tarifa:'$300.000',
        kilometraje:'Iimitado',
    },
    { 
        id:34,
        imagen: './img/34.jpg',
        marca:'Jaguar',
        modelo:'F-Pace', 
        año:2022,
        transmisión:'Automática',
        consumo:'12.8 km/l',
        características:'Asientos eléctricos, Sistema de sonido Meridian, Techo panorámico',
        seguridad:'Sistema de frenado autónomo, Bolsas de aire laterales',
        tarifa:'$380.000',
        kilometraje:'Iimitado',
    },
    { 
        id:35,
        imagen: './img/35.jpg',
        marca:'Genesis',
        modelo:'G80', 
        año:2021,
        transmisión:'Manual',
        consumo:'16.5 km/l',
        características:'Pantalla táctil, Asientos de cuero, Conexión USB',
        seguridad:'Control de estabilidad, Bolsas de aire frontales y laterales',
        tarifa:'$270.000',
        kilometraje:'Iimitado',
    },
    { 
        id:36,
        imagen: './img/36.jpg',
        marca:' Chrysler',
        modelo:'Pacifica', 
        año:2023,
        transmisión:'Automática',
        consumo:'10.5 km/l',
        características:'Pantalla para entretenimiento trasero, Asientos plegables, Conexión Bluetooth',
        seguridad:'Frenos ABS, Bolsas de aire laterales',
        tarifa:'$150.000',
        kilometraje:'Iimitado',
    },
    { 
        id:37,
        imagen: './img/37.jpg',
        marca:' Subaru',
        modelo:'Forester', 
        año: 2020,
        transmisión:'Manual',
        consumo:' 15.2 km/l',
        características:'Sistema de tracción en las cuatro ruedas, Techo corredizo, Conexión USB',
        seguridad:' Control de tracción, Bolsas de aire laterales',
        tarifa:'$250.000',
        kilometraje:'Iimitado',
    },
    { 
        id:38,
        imagen: './img/38.jpg',
        marca:'Cadillac',
        modelo:'XT5', 
        año: 2022,
        transmisión:'Automática',
        consumo:'13.7 km/l',
        características:'Asientos de cuero, Sistema de infoentretenimiento, Cámara de retroceso',
        seguridad:'Sistema de frenado de emergencia, Bolsas de aire frontales y laterales',
        tarifa:'$350.000',
        kilometraje:'Iimitado',
    },
    { 
        id:39,
        imagen: './img/39.avif',
        marca:'Lincoln',
        modelo:'Nautilus', 
        año: 2021,
        transmisión:'Manual',
        consumo:' 14.8 km/l',
        características:'Sistema de sonido Revel, Asientos eléctricos, Conexión Bluetooth',
        seguridad:'Asistente de cambio de carril, Bolsas de aire laterales',
        tarifa:'$185.000',
        kilometraje:'Iimitado',
    },
    { 
        id:40,
        imagen: './img/40.jpg',
        marca:'Jeep',
        modelo:'Cherokee', 
        año:2023,
        transmisión:'Automática',
        consumo:'12.5 km/l',
        características:'Sistema de tracción en las cuatro ruedas, Pantalla táctil, Conexión USB',
        seguridad:'Control de estabilidad, Bolsas de aire laterales',
        tarifa:'$250.000',
        kilometraje:'Iimitado',
    },
    { 
        id:41,
        imagen: './img/41.jpg',
        marca:'Buick',
        modelo:'Encore', 
        año:2020,
        transmisión:'Manual',
        consumo:'16.5 km/l',
        características:'Sistema de infoentretenimiento, Asientos plegables, Conexión Bluetooth',
        seguridad:'Frenos ABS, Bolsas de aire frontales y laterales',
        tarifa:'$145.000',
        kilometraje:'Iimitado',
    },
    { 
        id:42,
        imagen: './img/42.jpeg',
        marca:'Volkswagen',
        modelo:'Tiguan', 
        año:2022,
        transmisión:'Automática',
        consumo:' 15.5 km/l',
        características:' Techo panorámico, Sistema de sonido premium, Conexión USB',
        seguridad:'Control de tracción, Bolsas de aire laterales',
        tarifa:'$248.000',
        kilometraje:'Iimitado',
    },
    { 
        id:43,
        imagen: './img/43.jpeg',
        marca:'Land Rover',
        modelo:'Discovery', 
        año:2021,
        transmisión:'Manual',
        consumo:'13.8 km/l',
        características:'Tercera fila de asientos, Sistema de navegación, Cámara de retroceso',
        seguridad:'Control de estabilidad, Bolsas de aire frontales y laterales',
        tarifa:'$127.000',
        kilometraje:'Iimitado',
    },
    { 
        id:44,
        imagen: './img/44.jpg',
        marca:'Volvo',
        modelo:'XC60', 
        año:2023,
        transmisión:'Automática',
        consumo:'16.7 km/l',
        características:' Asientos de cuero, Pantalla táctil, Conexión Bluetooth',
        seguridad:'Asistente de frenado, Bolsas de aire laterales',
        tarifa:'$347.000',
        kilometraje:'Iimitado',
    },
    { 
        id:45,
        imagen: './img/45.jpeg',
        marca:'Subaru',
        modelo:'Crosstrek', 
        año:2020,
        transmisión:'Manual',
        consumo:'14.5 km/l',
        características:'Sistema de tracción en las cuatro ruedas, Techo corredizo, Conexión USB',
        seguridad:'Control de tracción, Bolsas de aire laterales',
        tarifa:'$168.000',
        kilometraje:'Iimitado',
    },
    { 
        id:46,
        imagen: './img/46.avif',
        marca:'Hyundai',
        modelo:'Kona', 
        año:2022,
        transmisión:'Automática',
        consumo:'17.2 km/l',
        características:'Sistema de infoentretenimiento, Asientos plegables, Conexión Bluetooth',
        seguridad:'Frenos ABS, Bolsas de aire frontales y laterales',
        tarifa:'$256.000',
        kilometraje:'Iimitado',
    },
    { 
        id:47,
        imagen: './img/47.jpeg',
        marca:'Ford',
        modelo:'Escape', 
        año:2021,
        transmisión:'Manual',
        consumo:'12.5 km/l',
        características:'Sistema de navegación, Asientos eléctricos, Conexión USB',
        seguridad:'Control de estabilidad, Bolsas de aire laterales',
        tarifa:'$387.000',
        kilometraje:'Iimitado',
    },
    { 
        id:48,
        imagen: './img/48.jpg',
        marca:'Audi',
        modelo:'Q5', 
        año:2023,
        transmisión:'Automática',
        consumo:'15.3 km/l',
        características:'Asientos de cuero, Sistema de sonido Bang & Olufsen, Conexión Bluetooth',
        seguridad:'Asistente de cambio de carril, Bolsas de aire laterales',
        tarifa:'$246.000',
        kilometraje:'Iimitado',
    },
    { 
        id:49,
        imagen: './img/49.jpeg',
        marca:'Nissan',
        modelo:'Rogue', 
        año:2020,
        transmisión:'Manual',
        consumo:'14.2 km/l',
        características:'Sistema de infoentretenimiento, Techo panorámico, Cámara de retroceso',
        seguridad:'Frenos ABS, Bolsas de aire frontales y laterales',
        tarifa:'$189.000',
        kilometraje:'Iimitado',
    },
    { 
        id:50,
        imagen: './img/50.jpg',
        marca:'Toyota',
        modelo:'RAV4', 
        año:2022,
        transmisión:'Automática',
        consumo:'16.5 km/l',
        características:'Pantalla táctil, Sistema de sonido JBL, Conexión USB',
        seguridad:'Control de tracción, Bolsas de aire laterales',
        tarifa:'$382.000',
        kilometraje:'Ilimitado',
    },
  ];

  // Número de elementos por página
var elementosPorPagina = 10;

 // Funcion para mostrar una pagina específica
 function mostrarPagina(pagina) {
  var inicio = (pagina - 1) * elementosPorPagina;
  var fin = inicio + elementosPorPagina;
  var carrosPagina = dataCarros.slice(inicio, fin);

  // Limpiar el contenedor antes de agregar nuevos elementos
  contenedorCarros.innerHTML = '';

  // Recorrer los carros de la página actual y crear las cajas
  carrosPagina.forEach(function (carro) {
    var cajaCarro = document.createElement('div');
    cajaCarro.classList.add('box');

    var imagen = document.createElement('img');
    imagen.src = carro.imagen;
    cajaCarro.appendChild(imagen);

    // Crear elementos para la información del carro
    var marcaElement = document.createElement('h3');
    marcaElement.textContent = 'Marca :' + carro.marca;
    cajaCarro.appendChild(marcaElement);

    var modeloElement = document.createElement('h3');
    modeloElement.textContent = 'Modelo :' + carro.modelo;
    cajaCarro.appendChild(modeloElement);

    var añoElement = document.createElement('p');
    añoElement.textContent = 'Año :' + carro.año;
    cajaCarro.appendChild(añoElement);

    var tarifaElement = document.createElement('p');
    tarifaElement.textContent = 'Tarifa: ' + carro.tarifa;
    cajaCarro.appendChild(tarifaElement);

    // Agregar el botón "Ver Oferta"
    var verOfertaBtn = document.createElement('a');
    verOfertaBtn.href = '#';
    verOfertaBtn.className = 'btn';
    verOfertaBtn.textContent = 'Ver Oferta';
    verOfertaBtn.addEventListener('click', function (event) {
        event.preventDefault();
        mostrarPopup(carro);
      });

    cajaCarro.appendChild(verOfertaBtn);

    // Agrega la caja al contenedor principal
    contenedorCarros.appendChild(cajaCarro);
  });
}

// Función para mostrar la ventana emergente
function mostrarPopup(carro) {
    var popup = document.createElement('div');
    popup.classList.add('popup');
  
    // Crear la tabla dentro del popup
  var tablaPopup = document.createElement('table');
  tablaPopup.classList.add('popup-table');
  tablaPopup.style.width = '100%';
  
    // Agregar una fila para la imagen del carro
  var filaImagen = document.createElement('tr');
  var imagenCelda = document.createElement('td');
  var imagen = document.createElement('img');
  imagen.src = carro.imagen; 
  imagenCelda.appendChild(imagen);
  filaImagen.appendChild(imagenCelda);
  tablaPopup.appendChild(filaImagen);
  
    // Crear filas y celdas para la información del carro
    var detallesCarro = [
      { label: 'Marca', value: carro.marca },
      { label: 'Modelo', value: carro.modelo },
      { label: 'Año', value: carro.año },
      { label: 'Transmisión', value: carro.transmisión },
      { label: 'Consumo', value: carro.consumo },
      { label: 'Características', value: carro.características },
      { label: 'Seguridad', value: carro.seguridad },
      { label: 'Tarifa', value: carro.tarifa },
      { label: 'Kilometraje', value: carro.kilometraje }
    ];
  
    detallesCarro.forEach(function (detalle) {
      var fila = document.createElement('tr');
  
      var labelCelda = document.createElement('td');
      labelCelda.textContent = detalle.label;
      fila.appendChild(labelCelda);
  
      var valueCelda = document.createElement('td');
      valueCelda.textContent = detalle.value;
      fila.appendChild(valueCelda);
  
      tablaPopup.appendChild(fila);
    });
  
    // Agregar la tabla al popup
    popup.appendChild(tablaPopup);
  
    // Agregar el popup al body
    document.body.appendChild(popup);
    
    // Agregar un botón de cierre al popup
  var cerrarBtn = document.createElement('button');
  cerrarBtn.textContent = 'Cerrar';
  cerrarBtn.addEventListener('click', function () {
    document.body.removeChild(popup);
  });

  popup.appendChild(cerrarBtn);
}
  

// Función para generar la paginación
function generarPaginacion() {
  var totalPaginas = Math.ceil(dataCarros.length / elementosPorPagina);
  var paginacion = document.getElementById('paginacion');

  // Limpiar la paginación antes de generarla de nuevo
  paginacion.innerHTML = '';

  // Crear elementos de la paginación
  for (var i = 1; i <= totalPaginas; i++) {
    var paginaItem = document.createElement('li');
    paginaItem.textContent = i;
    paginaItem.addEventListener('click', function () {
      mostrarPagina(parseInt(this.textContent));
    });
    paginacion.appendChild(paginaItem);
  }
}

// Mostrar la primera página por defecto
mostrarPagina(1);

// Generar la paginación
generarPaginacion();