var geo = navigator.geolocation;
var opciones = {}

function geo_error(){
	console.log("No sabemos tu ubucación");
}

function geo_exito(posicion){
	console.log(posicion);
}

geo.getCurrentPosicion(geo_exito, geo_error, opciones);