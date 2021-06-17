function Persona(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let laura = new Persona('Laura', 'Giorgetta');

let amiga = new Persona('Sofia', 'Gonzalez');

console.log(laura.nombreCompleto());
console.log(amiga.nombreCompleto());

console.log(laura);
console.log(amiga);

//Prototype agrega una propiedad al methodo Persona
Persona.prototype.email = 'No registrado';

laura.email = 'laura.gisela.g@gmail.com';

console.log(laura.email);
console.log(amiga.email);
