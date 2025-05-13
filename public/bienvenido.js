document.addEventListener('DOMContentLoaded', () => {
    const platosContainer = document.getElementById('platos-container');
     
    // Función para cargar las bebidas
    function cargarBebidas() {
      fetch('/productos') // Hacer una solicitud GET a la ruta /bebidas
        .then((response) => response.json())
        .then((data) => {
          platosContainer.innerHTML = ''; // Limpiar el contenedor
          data.forEach((productos) => {
            const platoElement = document.createElement('div');
            platoElement.classList.add('plato');
            platoElement.innerHTML = `
              <h3>${productos.nombre}</h3>
              <button onclick="eliminarBebida(${productos.id})">Eliminar</button>
            `;
            platosContainer.appendChild(platoElement);
          });
        })
        .catch((error) => console.error('Error al cargar las bebidas:', error));
    }
  
    // Función para eliminar una bebida
    window.eliminarBebida = (id) => {
      fetch(`/productos/${id}`, {
        method: 'DELETE', // Enviar una solicitud DELETE
      })
        .then((response) => response.json())
        .then(() => {
          cargarBebidas(); // Recargar las bebidas después de eliminar
        })
        .catch((error) => console.error('Error al eliminar la bebida:', error));
    };
  
    // Cargar las bebidas al iniciar la página
    cargarBebidas();
  });