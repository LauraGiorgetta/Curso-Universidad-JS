let laura = {
    nombre: 'Laura',
    apellido: 'Giorgetta',
    email : 'laura.gisela.g@gmail.com',
    contacto: function(){
        return this.nombre + ' ' + this.apellido + ': ' + this.email;
    }
}

let amiga = {
    nombre: 'Sofia',
    apellido: 'Gonzalez',
    email: 'No aplica'
}

// LLama al metodo de otro objeto en un objeto que no lo tiene
// En este caso estamos llamando el metodo contacto de laura para que la amiga pueda utilizarlo
console.log(laura.contacto.call(amiga));


laura.contacto =  function(tel, email = this.email){
    return this.nombre + ' ' + this.apellido + ': \n\tMail: ' + email + '\n\tTel: ' + tel;
}

console.log(laura.contacto('11 2258-0709'));

//llamando call con parametros
console.log(laura.contacto.call(amiga, 'No tengo :c', 'sofigonzalez@gmail.com'));

//apply es lo mismo que call solo que los parametros se los pasa en un array
console.log(laura.contacto.apply(amiga, ['No tengo :c', 'sofigonzalez@gmail.com']));