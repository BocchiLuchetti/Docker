const express = require('express');
const port = 5000;
const app = express();
var path = require('path');

app.set('view engines', 'ejs');
app.set('views', __dirname + '/templates')

app.get('/', (req, res) => {
    res.render(path.join(__dirname,'/templates/index.ejs'))
});

app.get('/clientes', (req, res) => {
    const clientes = [
        {nombre: "Enrique", edad: "20", direccion: "Av. Huaroichiri", correo: "willenrique@gmail.com"},
        {nombre: "Axel", edad: "19", direccion: "Av. Rosales", correo: "achacon@gmail.com"},
        {nombre: "Baltazar", edad: "19", direccion: "AA.HH. San Juan", correo: "baluis@gmail.com"},
        {nombre: "Tiza", edad: "18", direccion: "Esquina Cucardas", correo: "tizajuantp@gmail.com"},
        {nombre: "Lesa", edad: "21", direccion: "Volteando Tecsup", correo: "otakudecloset@gmail.com"},
    ]
    res.render(path.join(__dirname,'/templates/clientes.ejs'), {clientes: clientes})
});

app.get('/productos', (req,res) => {
    const productos = [
        {nombre: "gtx 1060", precio: "800", stock: "50", tipo: "Tarjeta"},
        {nombre: "redragon rgb", precio: "250", stock: "10", tipo: "Periferico"},
        {nombre: "smart tv", precio: "5000", stock: "20", tipo: "Electrodomestico"},
        {nombre: "razer seiren", precio: "190", stock: "15", tipo: "MIcrofono"},
        {nombre: "gtp", precio: "200", stock: "400", tipo: "Visual Novel"},

    ]
    res.render(path.join(__dirname,'/templates/productos.ejs'), {productos: productos})
});

app.listen(port)
console.log(`Server on port ${port} `)