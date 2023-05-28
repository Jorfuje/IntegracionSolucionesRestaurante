package mx.uv.inventario.controllers;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import mx.uv.inventario.models.ProductoModel;
import mx.uv.inventario.services.ProductoService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/productos")
public class ProductoController {
    
    @Autowired
    ProductoService productoService;

    @GetMapping()
    public ArrayList<ProductoModel> obtenerProductos(){
        return productoService.obtenerProductos();
    }

    @PostMapping()
    public ProductoModel guardarProducto(@RequestBody ProductoModel producto){
        return this.productoService.guardarProducto(producto);
    }

    @PutMapping("update")
    public ProductoModel modificarProducto(@RequestBody ProductoModel request){
        return this.productoService.modificarProducto(request);
    }

    @GetMapping(path = "/{id}")
    public Optional<ProductoModel> obtenerProductoPorId(@PathVariable("id") Integer id){
        return this.productoService.obtenerPorId(id);
    }

    @GetMapping("/querynombre")
    public ArrayList<ProductoModel> obtenerProductoPorNombre(@RequestParam("nombre") String nombre){
        return this.productoService.obtenerPorNombre(nombre);
    }

    @GetMapping("/querycategoria")
    public ArrayList<ProductoModel> obtenerProductoPorCategoria(@RequestParam("categoria") String categoria){
        return this.productoService.obtenerPorCategoria(categoria);
    }

    @GetMapping("/querycantidad")
    public ArrayList<ProductoModel> obtenerProductoPorCantidad(@RequestParam("cantidad") Integer cantidad){
        return this.productoService.obtenerPorCantidad(cantidad);
    }

    @DeleteMapping( path = "/{id}")
    public String eliminarPorId(@PathVariable("id") Integer id){
        boolean ok = this.productoService.eliminarProducto(id);
        if(ok){
            return "Se elimino el producto con id " + id;
        } else {
            return "No se pudo eliminar el producto con id " + id;
        }
    }
}
