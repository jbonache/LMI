class Tasca {
    //Recomanació: de declarar atributs
    
    //TO-DO
}


class GestorTasques {
    //Recomanació: de declarar atributs
    
    constructor() {
        this.tasques = [];
    }

    afegirTasca(text) {
        // TO-DO
    }

    obtindrePendents() {
        let pendents = [];

        //TO-DO

        return pendents;
    }

    obtindreCompletades() {
        let completades = [];

        //TO-DO

        return completades;
    }

    eliminarTasca(index) {
       //TO-DO
    }
}


function afegirTasca() {
    
}


function mostrarPendents() {
    var pendents = gestor.obtindrePendents();

   
}


function mostrarCompletades() {
    var completades = gestor.obtindreCompletades();

    
}


function eliminarTasca() {
    if (gestor.tasques.length === 0) {
        alert("No hi ha tasques per eliminar");
        return;
    }

}


// Inici d'execució de l'script JS

var gestor = new GestorTasques();


