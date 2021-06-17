persona = {
    nombre: 'Laura',
    apellido: 'Giorgetta',
    mail: 'laura.gisela.g@gmail.com',
    edad: 25,
    idioma: 'es',
    nombreCompleto : function(){ //arrow no tiene this
        return this.nombre + ' ' + this.apellido;
    },
    get nombreCompleto2(){ //method get -> se define una funcion y se llama como si fuera atributo
        return this.nombre + ' ' + this.apellido + ' :D';
    },
    get lang(){ //Get no funciona sin return
        return lang.toUpperCase();
    },
    set lang(lang){ //Set no funciona si no tiene al menos 1 parametro
        this.idioma = lang.toUpperCase();
    }
}

console.log(persona.nombreCompleto());
console.log(persona.nombreCompleto2);