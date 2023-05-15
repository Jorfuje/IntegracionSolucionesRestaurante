package mx.uv.usuarios.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import mx.uv.usuarios.dto.PostDTO;
import mx.uv.usuarios.services.UsuariosService;

@RestController
@RequestMapping(value = "/productos")
public class ProductoController {

    @Autowired
    private UsuariosService service;

    @GetMapping(value = "/greet")
    public String greet(){
        return "Hola";
    }

    @GetMapping(value = "/list")
    public ResponseEntity list(){
        return new ResponseEntity(service.List(), HttpStatus.OK);
    }

    @PostMapping(value = "/add")
    public ResponseEntity add(@RequestBody PostDTO post){
        return new ResponseEntity(service.add(post), HttpStatus.OK);
    }

    @PutMapping(value = "/{id}/update")
    public ResponseEntity edit(@PathVariable(value = "id") String id, @RequestBody PostDTO post){
        return new ResponseEntity(service.edit(id, post), HttpStatus.OK);
    }
    
    @DeleteMapping(value = "/{id}/delete")
    public ResponseEntity delete(@PathVariable(value = "id") String id){
        return new ResponseEntity(service.delete(id), HttpStatus.OK);
    }

}
