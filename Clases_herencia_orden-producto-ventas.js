class Producto {
    static contadorProducto = 0;

    constructor(nombre, precio) {
        this._idProducto = ++Producto.contadorProducto;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProducto() {
        return this._idProducto; ö
    }
    get nombre() {
        return this._nombre;
    }
    get precio() {
        return this._precio;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    set precio(precio) {
        this._precio = precio;
    }
    toString() {
        return `IdProducto: ${this._idProducto}, Nombre: ${this._nombre}, Precio: $${this._precio}`;
    }
}
caramelo = new Producto('Caramelo', 5);
cocaCola = new Producto('CocaCola', 100);


class Orden {
    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS() {
        return 5;
    }

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }

    get idOrden(){
        return this._idOrden;
    }
    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
            //Esto es lo mismo que hacerlo con el push
            //this._productos[this._contadorProductosAgregados++] = producto;
        }
        else{
            console.log('No se pueden agregar mas productos');
        }
    }
    calcularTotal(){
        let totalVenta = 0;
        for(let producto of this._productos){
            totalVenta += producto.precio;
        }
        return totalVenta;
    }
    mostrarOrden(){
        let productoOrden = '';
        for(let producto of this._productos){
            productoOrden += producto.toString() + '\n';
        }
        console.log(`Orden:  ${this._idOrden} \nTotal: $${this.calcularTotal()} \nProductos:\n${productoOrden}`);
    }
}

console.log(caramelo.toString());
console.log(cocaCola.toString());

let orden1 = new Orden();
orden1.agregarProducto(caramelo);
orden1.agregarProducto(cocaCola);

orden1.mostrarOrden()

let turron = new Producto('turron', 20);
let alfajor = new Producto('Jorgito', 50);
let bonbom = new Producto('Bon o Bon', 20);
let jugo = new Producto('Levite', 50);

let orden2 = new Orden();
orden2.agregarProducto(caramelo);
orden2.agregarProducto(turron);
orden2.agregarProducto(bonbom);
orden2.agregarProducto(jugo);
orden2.agregarProducto(alfajor);

//No se agrega y tira el console.log de que no se pueden agregar mas productos
// Si quisieramos podriamos hacer que tire error, pero de mientras solo le mandamos el console.log
orden2.agregarProducto(cocaCola); 