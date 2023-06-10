import { Injectable } from '@angular/core';
import { ResponseI } from 'src/app/modelos/response.interface';
import { ListaproductosI } from 'src/app/modelos/listaproductos.interface';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductoI } from 'src/app/modelos/producto.interface';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = 'http://localhost:8080/';

  constructor(private http:HttpClient) { }

  getAllClientes():Observable<ListaproductosI[]>{
    let direccion = this.url + "productos";
    return this.http.get<ListaproductosI[]>(direccion);
  }

  getSingleProducto(id:any): Observable<ProductoI>{
    let direccion = this.url + "productos/" + id;
    return this.http.get<ProductoI>(direccion);
  }

  putProducto(form:ProductoI):Observable<ResponseI>{
    let direccion = this.url + "productos";
    return this.http.post<ResponseI>(direccion, form);
  }
  
}
