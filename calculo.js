var productos = {
    "salami": 20,
    "queso": 30,
    "manzana": 5,
    "pimienta": 13
};
for (var clave in productos) {
    // console.log(clave +":"+productos[clave]);
    console.log("el producto(".concat(clave, ")tiene un valor de: ").concat(productos[clave], ", y el descuento del 15% es : ").concat(productos[clave] * 0.15));
}
