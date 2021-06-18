class Persona{ // CLase padre
    static contador = 0; //Un atributo static pertenece solo a la clase
    static MAX_PERSONAS = 5; // Ddefinimos un numero maximo de personas para crear
    constructor(nombre, apellido, edad){
        //Poner el _ significa que estas propiedades deberian ser privadas
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        //el this no funciona con las variables estaticas, hay que poner el nombre propio de la clase
        //Incrementa la variable id cada vez que se llama al constructor
        //Utilizamos el preincremento para que el id de la personas creadas empiece por 1
        this._id = ++Persona.contador; 


        //Se puede poner codigo en cuarquier parte, como este if

        if(Persona.contador > Persona.MAX_PERSONAS){
            throw 'Se ha definido el numero maximo de personas a ' + Persona.MAX_PERSONAS + '. No se puede crear mas personas';
        }
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    get id(){
        return this._id;
    }
    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }
    // Sobreescribimos el method toString() que traeria [object Object]
    //Es un method preestablecido por js, pero lo podemos modificar
    //Como lo aplicamos al padre esto tambien se hereda
    toString(){
        return this.nombreCompleto();
    }
    static saludar(){
        return 'Hola mundo';
    }
    static saludar2(persona){
        return 'Hola ' + persona.nombre;
    }
}
// Extends hace que tome las propiedades de Persona y se vuelva su hija
// todas las propiedades y metodos se heredan
class Alumno extends Persona{ // Clase hija de Persona
    static contador = 0; //Para que no tome todas las personas sobreescribimos la propiedad id
    constructor(nombre, apellido, edad, curso){
        //El super hace que tome las propiedades que estaban preestalecidas en el padre
        super(nombre, apellido, edad);
        this._curso = curso;
        // Volvemos a incrementar el id cada vez que creamos un alumno
        Alumno.contador++;
    }
    get curso(){
        return this._curso;
    }
    set curso(curso){
        this._curso = curso;
    }
    // Creamos directamente un get, pero no tiene la propiedad id
    // De esta forma estamos creando una constante, porque no hay propiedad ni setter para cambiar el valor
    get idAlumno(){
        return Alumno.contador;
    }
    //Sobreescribimos method nombreCompleto()
    nombreCompleto(){
        //con el super llamamos el method de la clase padre
        return super.nombreCompleto() + ', curso: ' + this._curso; 
    }
}

// Creamos dos objetos de nuestra clase padre e hija
let laura = new Alumno('Laura', 'Giorgetta', 22, 'Universidad JS');
let sofi = new Persona('Sofia', 'Gonzalez', 25);

console.log(laura);
console.log(sofi);
console.log(laura.nombreCompleto());

console.log(laura.toString());
console.log(sofi.toString());


// Los method estatic solo se pueden llamar desde la clase, no desde los objetos
console.log(Persona.saludar());
// laura.saludar() no existe

console.log(Persona.saludar2(laura));

// Preguntamos cuantas veces se llamo al constructor
console.log(Persona.contador);
console.log(Alumno.contador); 

// NO estamos cambiando el id de Alumno, por lo que toma la propiedad del padre, que seria Persona.
// Este seria el id de Persona
console.log(laura.id)
console.log(sofi.id)

// Este es un nuevo Method de la clase Alumno para determinar el id del Alumno
console.log(laura.idAlumno)

let felipe = new Persona('Felipe', 'Giorgetta', 24);
let norma = new Persona('Norma', 'Sosa', 55);
let carlos = new Persona('Carlos', 'Giorgetta', 67);
console.log(Persona.contador);
// Tira el error que pusimos en la clase Persona
// let camila = new Persona('Camila', 'Giorgetta', 25); 



