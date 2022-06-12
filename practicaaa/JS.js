
async function validate() {
	var username = dsocument.getElementById("username").value;
	var password = document.getElementById("password").value;
	if (username == "Admin" && password == "admin123") {
		Swal.fire({
			title: 'Bienvenido admin'
		})
		} else {
			Swal.fire({
				title: 'Error al iniciar sesion'
			})
	}
}
