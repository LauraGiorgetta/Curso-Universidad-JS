class Persona {
    static contadorPersonas = 0;
    constructor(nombre, apellido, edad) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._idPersona = ++Persona.contadorPersonas;
    }
    get idPersona() {
        return this._idPersona;
    }
    get nombre() {
        return this._nombre;
    }
    get apellido() {
        return this._apellido;
    }
    get edad() {
        return this._edad;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    set apellido(apellido) {
        this._apellido = apellido;
    }
    set edad(edad) {
        this._edad = edad;
    }
    toString() {
        return 'idPersona: ' + this._idPersona + ', nombre: ' 
        + this._nombre + ', apellido: ' + this._apellido + ', edad: ' + this._edad;
    }
}

class Empleado extends Persona{
    static contadorEmpleados = 0;
    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._sueldo = sueldo;
        this._idEmpleado = ++Empleado.contadorEmpleados;
    }

    get sueldo(){
        return this._sueldo;
    }
    get idEmpleado(){
        return this._idEmpleado;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }
    toString(){
        return super.toString() + ', sueldo: ' + this._sueldo;
    }
}

class Cliente extends Persona{
    static contadorClientes = 0;
    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre,apellido, edad);
        this._fechaRegistro = fechaRegistro;
        this._idCliente = ++Cliente.contadorClientes;
    }
    get fechaRegistro(){
        return this._fechaRegistro;
    }
    get idCliente(){
        return this._idCliente;
    }
    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }
    toString(){
        return super.toString() + ', fechaRegistro: ' + this._fechaRegistro;
    }
}

cliente1 = new Cliente('Marcelo', 'Gomez', 44, new Date());
console.log(cliente1.toString());

