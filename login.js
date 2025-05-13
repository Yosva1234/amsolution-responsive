document.getElementById('login-form').addEventListener('submit', async function (event) {
  event.preventDefault(); 

  try {
    const usuarioCorrecto = await getelement('/username');
    const contraseñaCorrecta = await getelement('/password');

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === usuarioCorrecto && password === contraseñaCorrecta) {
      window.location.href = "bienvenido.html"; 
    } else {
      alert("Usuario o contraseña incorrectos. Inténtalo de nuevo.");
    }
  } catch (error) {
    console.error('Error al obtener datos:', error);
    alert("Hubo un problema al verificar las credenciales.");
  }
});

async function getelement(element) {
  try {
    const response = await fetch(element);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.valor;
  } catch (error) {
    console.error('Hubo un problema con la solicitud:', error);
  }
}