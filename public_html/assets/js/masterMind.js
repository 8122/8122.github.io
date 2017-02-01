function MasterMind(){
    var filaActiva = 0;
    var combinacion = [-1,-1,-1,-1];
}

MasterMind.prototype.fichas = ["rojo","verde","azul","amarillo","marron","naranja","rosa","violeta"];
MasterMind.prototype.filas = ["fila0","fila1","fila2","fila3","fila4","fila5","fila6","fila7"];

MasterMind.prototype.generarCombinacion = function(){

    for(var i=0; i<this.combinacion.length; i++){
        var num = Math.floor(Math.random() * 5);
        var estaRepetido = false;
        for(var j=0; j<i; j++){
            if(this.combinacion[j]===num){
                estaRepetido = true;
            }
        }
        if(!estaRepetido){
            this.combinacion[i] = num;
        }
    }

};

MasterMind.prototype.activarFila = function(){
    var idFila = filas[this.filaActiva];
    var divs = document.getElementById(idFila).getElementsByTagName("div");
    alert(divs.length);
    for(var i=0; i<4; i++){
        var atributo1 = document.createAttribute("ondrop");
        atributo1.value = "drop(event)";
        var atributo2 = document.createAttribute("ondragover");
        atributo1.value = "allowDrop(event)";
        divs[i].setAttributeNode(atributo1);
        divs[i].setAttributeNode(atributo2);
    }
    filaActiva++;
};

function cargarJuego(){
    miMasterMind = new MasterMind();
    miMasterMind.activarFila();
    alert("juego iniciado");
}


