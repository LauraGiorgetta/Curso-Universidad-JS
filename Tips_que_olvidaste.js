let persona = {
    nombre: 'Laura',
    apellido: 'Giorgetta'
}

console.log(persona.nombre);
//Se lo puede llamar como un array asociativo, pero son objetos
console.log(persona['nombre']);


//Operador Ternario (if)
persona.nombre == 'Laura' ? console.log('Hola Laura') : console.log('No eres Laura');


//!DEPRECATED --> Labels (GOTO)

inicio:
for (let i = 0; i > 10; i++) {
    if (i % 2 == 0)
        continue inicio;
}

//*  Self invoking (Una funcion que se invoca sola)
(
    () => console.log('Hola mundo')
)() // Si no tiene los () a lo ultimo no se autoinvoca

//* Numero infinito de argumentos
//* Solo funciona con FUNCTION, arrow no acepta arguments
function sumar(){
    let suma = 0;
    for (let i = 0; i < arguments.length; i++) {
        suma += arguments[i];
    }
    return suma;
}


console.log(sumar(2,2,4,8,16));

//* Delete propiedad de un objeto
persona.email = 'laura.gisela.g@gmail.com';
console.log(persona.email);
delete persona.email;
console.log(persona.email);



