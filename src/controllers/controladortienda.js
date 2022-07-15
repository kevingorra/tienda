import {productosBD} from "../helpers/baseDatos.js";
console.log(productosBD)

import{pintarProductos} from'./controladorPintar.js';
pintarProductos(productosBD)

import { buscarProductos } from "./controladorBuscar.js";
buscarProductos()