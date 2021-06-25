//Copiamos clase Persona

class Persona { // CLase padre
    static contador = 0; //Un atributo static pertenece solo a la clase
    static MAX_PERSONAS = 5; // Ddefinimos un numero maximo de personas para crear
    constructor(nombre, apellido, edad) {
        //Poner el _ significa que estas propiedades deberian ser privadas
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        //el this no funciona con las variables estaticas, hay que poner el nombre propio de la clase
        //Incrementa la variable id cada vez que se llama al constructor
        //Utilizamos el preincremento para que el id de la personas creadas empiece por 1
        this._id = ++Persona.contador;


        //Se puede poner codigo en cuarquier parte, como este if

        if (Persona.contador > Persona.MAX_PERSONAS) {
            throw 'Se ha definido el numero maximo de personas a ' + Persona.MAX_PERSONAS + '. No se puede crear mas personas';
        }
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get apellido() {
        return this._apellido;
    }
    set apellido(apellido) {
        this._apellido = apellido;
    }
    get id() {
        return this._id;
    }
    // Sobreescribimos el method toString() que traeria [object Object]
    //Es un method preestablecido por js, pero lo podemos modificar
    //Como lo aplicamos al padre esto tambien se hereda
    toString() {
        return `Persona: ${this._nombre} ${this._apellido}`;
    }

}



class Empleado extends Persona {
    constructor(nombre, apellido, edad, depto) {
        super(nombre, apellido, edad)
        this._depto = depto;
    }
    get depto() {
        return this._depto;
    }
    set depto(depto) {
        this._depto = depto;
    }
    toString() {
        return `Empleado: ${super.toString()}, depto ${this._depto}`;
    }
}

class Gerente extends Empleado {
    constructor(nombre, apellido, edad, depto, antiguedad) {
        super(nombre, apellido, edad, depto)
        this._antiguedad = antiguedad;
    }

    toString() {
        return `Gerente: ${super.toString()}, antigüedad: ${this._antiguedad}`;
    }
}


function obtenerDetalles(object) {
    if (object instanceof Persona || object instanceof Empleado || object instanceof Gerente) {
        console.log(object.toString());
    }
    if (object instanceof Gerente) {
        console.log(object.nombre + ' es de tipo Gerente');
    } else if (object instanceof Empleado) {
        console.log(object.nombre + ' es de tipo Empleado');
    } else if (object instanceof Persona) {
        console.log(object.nombre + ' es de tipo Persona');
    }
}
let sofi = new Persona('Sofia', 'Gonzalez', 25);
let laura = new Gerente('Laura', 'Giorgetta', 22, '1A', 3);
let felipe = new Persona('Felipe', 'Garcia', 24);
let carlos = new Gerente('Carlos', 'Giorgetta', 67, 'Oficina', 50);
let norma = new Empleado('Norma', 'Sosa', 55, 'Ventas');

obtenerDetalles(laura);
obtenerDetalles(sofi);
obtenerDetalles(felipe);
obtenerDetalles(carlos);
obtenerDetalles(norma);



