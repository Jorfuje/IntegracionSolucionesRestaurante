package mx.uv.usuarios.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/empleados")
public class EmpleadoController {

    @GetMapping(value = "/greet")
    public String greet(){
        return "Hola empleados";
    }

}