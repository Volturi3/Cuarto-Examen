
let Nombre = document.getElementById("Nombre");
let colo = document.getElementById("colo");
let radio1 = document.getElementById("radio");

let guardar_btn = document.getElementById("guardar-btn");

let lista = document.getElementById("lista");

let datos = [];

const guardar = () => {
    if(Nombre.value && colo.value && radio.value) {
        datos.push({
            Nombre: Nombre.value,
            colo: colo.value,
            radio: radio.value,
        });
        localStorage.setItem("datos" , JSON.stringify(datos));
        Nombre.value = "";
        colo.value = "";
        radio.value = "";
        pintar_datos();
    }
    else {
        alert("Completa los campos");
    }
    forEach(obtenerdatos()) 
	{
		var Nombre = document.getElementById('Nombre').value;
		var edad = parseFloat(document.getElementById('edad').value);

		document.registro.nombreobtenido.value = Nombre;
		document.registro.edadobtenida.value = edad;

	}
};
guardar_btn.addEventListener("click", ()=>{guardar()});