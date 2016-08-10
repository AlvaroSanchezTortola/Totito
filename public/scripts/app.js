var viewport = document.getElementById("viewport");
var dato = document.getElementById("dato");
//----------Variables---------------------------------
var tablero = [" "," "," "," "," "," "," "," "," "];
var jugador = "X";
var exitos = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[6,4,2]];
//----------------------------------------------------
function render(tabl, jug, exit){
	dato.innerHTML = jug;
	
	var html = "";
	html += '<div class="tablero">';
	for (let n=0; n<9; n++){
		html += '<button id="c'+n+'"></button>';
	}
	html += '</div>';

	return html;
}

viewport.innerHTML = render(tablero, jugador, exitos);
//--------Botones------------------------------------
var bot = new Array();
for (let i=0; i<9; i++){
	bot[i] = document.getElementById("c"+i);
}
var bot_restart = document.getElementById("restart");

//--------listener de los botones--------------------
for (let k=0; k<9; k++){
	bot[k].addEventListener("click", function(){toqueteo(bot[k], k)});
}

bot_restart.addEventListener("click", function(){
	tablero = [" "," "," "," "," "," "," "," "," "];
	jugador = "X";	
	limpiarTablero();
});


function toqueteo(boton, pos){
	if(tablero[pos]===" "){
		boton.innerHTML = jugador; 
		tablero[pos] = jugador; 
		verificarCasilla(); 
		cambiarJugador();
	}
}

function cambiarJugador(){
	if (jugador === "X"){
		jugador = "O";
	}
	else{
		jugador = "X";
	}
	dato.innerHTML = jugador;
};

function verificarCasilla(){
	for (let j=0; j<exitos.length; j++){
		if (tablero[exitos[j][0]] != " " && tablero[exitos[j][0]] == tablero[exitos[j][1]]
			&& tablero[exitos[j][0]] == tablero[exitos[j][2]]){
			alert("Ha ganado "+jugador);
		} 
	}
}

function limpiarTablero(){
	for (let m=0; m<9; m++){
		bot[m].innerHTML = tablero[m];
	}
	dato.innerHTML = jugador;
};

