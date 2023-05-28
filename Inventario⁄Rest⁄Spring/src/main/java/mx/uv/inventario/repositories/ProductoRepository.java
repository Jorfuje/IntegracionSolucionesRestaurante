package mx.uv.inventario.repositories;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import mx.uv.inventario.models.ProductoModel;

@Repository
public interface ProductoRepository extends CrudRepository<ProductoModel, Integer> {

    public abstract ArrayList <ProductoModel> findByCategoria(String categoria);

    public abstract ArrayList <ProductoModel> findByNombre(String nombre);

    public abstract ArrayList <ProductoModel> findByCantidad(Integer cantidad);
}
