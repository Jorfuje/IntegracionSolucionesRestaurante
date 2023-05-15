package mx.uv.usuarios.services;

import java.util.*;

import mx.uv.usuarios.dto.*;

public interface UsuariosService {
    List<PostDTO> List();

    Boolean add(PostDTO post);

    Boolean edit(String id, PostDTO post);

    Boolean delete(String id);

}
