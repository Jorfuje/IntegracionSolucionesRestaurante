package mx.uv.usuarios.services.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ExecutionException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.CollectionReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.QuerySnapshot;
import com.google.cloud.firestore.WriteResult;

import mx.uv.usuarios.dto.PostDTO;
import mx.uv.usuarios.firebase.FirebaseInitializer;
import mx.uv.usuarios.services.UsuariosService;

@Service
public class UsuarioServeceImpl implements UsuariosService{

    @Autowired
    private FirebaseInitializer firebase;

    @Override
    public java.util.List<PostDTO> List() {
        java.util.List<PostDTO> response = new ArrayList<>();
        PostDTO post;

        ApiFuture<QuerySnapshot> querySnapshotApiFuture = getCollection().get();
        try {
            for (DocumentSnapshot doc : querySnapshotApiFuture.get().getDocuments()) {
                post = doc.toObject(PostDTO.class);
                post.setId(doc.getId());  
                response.add(post);
            }
            return response;
        } catch (Exception e) {
            // TODO Auto-generated catch block
            return null;
        }
        
    }

    @Override
    public Boolean add(PostDTO post) {
        Map<String, Object> docData = getDocData(post);

        ApiFuture<WriteResult> writeResultApiFuture = getCollection().document().create(docData);
        
        try {
            if(null != writeResultApiFuture.get()){
                return Boolean.TRUE;
            }
            return Boolean.FALSE;
        } catch (Exception e) {
            return Boolean.FALSE;
        }

    }

    @Override
    public Boolean edit(String id, PostDTO post) {
        Map<String, Object> docData = getDocData(post);
        ApiFuture<WriteResult> writeResultApiFuture = getCollection().document(id).set(docData);

        try {
            if(null != writeResultApiFuture.get()){
                return Boolean.TRUE;
            }
            return Boolean.FALSE;
        } catch (Exception e) {
            return Boolean.FALSE;
        }

    }

    @Override
    public Boolean delete(String id) {
        ApiFuture<WriteResult> writeResultApiFuture = getCollection().document(id).delete();

        try {
            if(null != writeResultApiFuture.get()){
                return Boolean.TRUE;
            }
            return Boolean.FALSE;
        } catch (Exception e) {
            return Boolean.FALSE;
        }
    }

    private CollectionReference getCollection() {
        return firebase.getFirestore().collection("post");
    }

    private Map<String, Object> getDocData(PostDTO post) {
        Map<String, Object> docData = new HashMap<>();
        docData.put("nombre", post.getNombre());
        docData.put("categoria", post.getCategoria());
        docData.put("cantidad", post.getCantidad());
        return docData;
    }
    
}
