import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { 
    console.log('Servicio http:');
  }

  getUsers(): any {
    return this.http.get('http://localhost:8080/productos/list');
  }

  create(data: any) {
    return this.http.post('http://localhost:8080/productos/add', data);
  }

}
