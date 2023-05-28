import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Producto } from '../model/producto';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private headers : HttpHeaders = new HttpHeaders({'Content-Type' : 'application/json'})

  constructor(private httpClient: HttpClient) { 
    console.log('Servicio http:');
  }

  getUsers() : Observable<Producto[]> {
    return this.httpClient.get<Producto[]>('http://localhost:8080/productos').pipe(
      map(productos => productos as Producto[])
    );
  }

  guardarProducto(producto: Producto) : Observable<Producto> {
    return this.httpClient.post<Producto>('http://localhost:8080/productos', producto, {headers: this.headers});
  }

  actualizarProducto(producto: Producto) : Observable<Producto> {
    return this.httpClient.put<Producto>('http://localhost:8080/productos/update', producto, {headers: this.headers});
  }

  eliminarProducto(id: number) : Observable<void> {
    return this.httpClient.delete<void>(`http://localhost:8080/productos/${id}`);
  }

}
