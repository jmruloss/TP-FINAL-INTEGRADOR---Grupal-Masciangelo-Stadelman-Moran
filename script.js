class Cliente{
    constructor(nombre, apellido, telefono){
        this.nombre = nombre
        this.apellido = apellido
        this.telefono = telefono
    }
    getNombre(){ 
        return this.nombre
    }
    getApellido(){ 
        return this.apellido
    }
    getTelefono(){
        return this.telefono
    }
}

class Turno{
    constructor(cliente, dia, hora, telefono){
        this.cliente = cliente
        this.dia = dia
        this.hora = hora
        this.telefono = telefono
    }
    getCliente(){ 
        return this.cliente
    }
    getDia(){ 
        return this.dia
    }
    getHora(){ 
        return this.hora
    }
    getTelefono(){
        return this.telefono
    }
}

class Peluqueria{
    constructor(){
        this.listaTurnos = []
    }
    agregarTurno(turno){
        this.listaTurnos.push(turno)
    }
    obtenerTurnos(){
        return this.listaTurnos
    }
    buscarPorDia(dia){
        var lista = []
        for (var i = 0; i < this.listaTurnos.length; i++){
            if (this.listaTurnos[i].getDia() === dia){
                lista.push(this.listaTurnos[i])
            }
        }
        return lista;
    }
    buscarPorNombre(nombre){
        var lista = []
        for (var i = 0; i < this.listaTurnos.length; i++){
            if (this.listaTurnos[i].getCliente().getNombre() == nombre){
                lista.push(this.listaTurnos[i])  
            }
        }
        return lista
    }
}

var peluqueria = new Peluqueria()

function mostrarCrear(){
    document.getElementById("crear").style.display = "block";
    document.getElementById("listar").style.display = "none";
    document.getElementById("buscar").style.display = "none";
}

function mostrarListar(){
    document.getElementById("crear").style.display = "none";
    document.getElementById("listar").style.display = "block";
    document.getElementById("buscar").style.display = "none";
}

function mostrarBuscar(){
    document.getElementById("crear").style.display = "none";
    document.getElementById("listar").style.display = "none";
    document.getElementById("buscar").style.display = "block";
}

function guardarTurno(){
    var nombre = document.getElementById("nombre").value
    var apellido = document.getElementById("apellido").value
    var dia = document.getElementById("dia").value
    var hora = document.getElementById("hora").value
    var telefono= document.getElementById("telefono").value
    var cliente = new Cliente(nombre, apellido, telefono)
    
    var turno = new Turno(cliente, dia, hora, telefono)

    peluqueria.agregarTurno(turno)
    alert("Turno guardado")
}

function listarTodos(){
    var turnos = peluqueria.obtenerTurnos()
    var div = document.getElementById("listado")

    div.innerHTML = ""

    if (turnos.length > 0){
        for (var i = 0; i < turnos.length; i++){
            var tur = turnos[i]
            div.innerHTML += 
                tur.getCliente().getNombre() + " " +
                tur.getCliente().getApellido() + " " +
                "Día: " + tur.getDia() + " " +
                "Hora: " + tur.getHora() + " " +
                "Tel: " + tur.getTelefono()
        }
    } 
    else{
        div.innerHTML = "No hay turnos cargados"
    }
}

function listarPorDia(){
    var dia = document.getElementById("diaBuscar").value
    var lista = peluqueria.buscarPorDia(dia)
    var div = document.getElementById("listado")

    div.innerHTML = ""

    if (lista.length > 0){
        for (var i = 0; i < lista.length; i++){
            var tur = lista[i]
            div.innerHTML += 
                tur.getCliente().getNombre() + " " +
                tur.getCliente().getApellido() +
                " Día: " + tur.getDia() +
                " Hora: " + tur.getHora() +
                " Tel: " + tur.getTelefono() 
        }
    } 
    else{
        div.innerHTML = "No hay turnos ese dia"
    }
}

function buscarPorNombre(){
    var nombre = document.getElementById("buscarNombre").value
    var lista = peluqueria.buscarPorNombre(nombre)
    var div = document.getElementById("resultadoBusqueda")

    div.innerHTML = ""

    if (lista.length > 0){
        for (var i = 0; i < lista.length; i++){
            var tur = lista[i]
            div.innerHTML += 
                tur.getCliente().getNombre() + " " +
                tur.getCliente().getApellido() +
                " Día: " + tur.getDia() +
                " Hora: " + tur.getHora() +
                " Tel: " + tur.getTelefono() 
        }
    }
    else{
        div.innerHTML = "no se encontro turno con ese nombre"
    }
}



