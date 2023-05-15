package mx.uv.inventario.services;

import java.util.ArrayList;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import mx.uv.inventario.models.ProductoModel;
import mx.uv.inventario.repositories.ProductoRepository;

@Service
public class ProductoService {

    @Autowired
    ProductoRepository productoRepository;

    public ArrayList<ProductoModel> obtenerProductos() {
        return (ArrayList<ProductoModel>) productoRepository.findAll();
    }

    public ProductoModel guardarProducto(ProductoModel producto) {
        return productoRepository.save(producto);
    }

    public Optional<ProductoModel> obtenerPorId(Integer id) {
        return productoRepository.findById(id);
    }

    public ArrayList<ProductoModel> obtenerPorNombre(String nombre) {
        return productoRepository.findByNombre(nombre);
    }

    public ArrayList<ProductoModel> obtenerPorCategoria(String categoria) {
        return productoRepository.findByCategoria(categoria);
    }

    public ArrayList<ProductoModel> obtenerPorCantidad(Integer cantidad) {
        return productoRepository.findByCantidad(cantidad);
    }

    public boolean eliminarProducto(Integer id) {
        try {
            productoRepository.deleteById(id);
            return true;
        } catch (Exception err) {
            return false;
        }
    }

}
