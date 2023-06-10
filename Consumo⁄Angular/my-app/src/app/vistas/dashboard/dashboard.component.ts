import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';
import { Router } from '@angular/router';

import { ListaproductosI } from 'src/app/modelos/listaproductos.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  productos: ListaproductosI[] | undefined;

  constructor(private api: ApiService, private router:Router){}

  ngOnInit(): void {
      this.api.getAllClientes().subscribe(data =>{
        this.productos= data;
      })
  }

  editarProducto(id: any){
    this.router.navigate(['editar', id])
  }

  nuevoProducto() {
    this.router.navigate(['nuevo']);
  }

}
