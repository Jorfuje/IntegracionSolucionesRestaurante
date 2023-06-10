import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductoI } from 'src/app/modelos/producto.interface';
import { ApiService } from 'src/app/servicios/api/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})

export class EditarComponent implements OnInit {

  editarForm = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl(''),
    categoria: new FormControl(''),
    cantidad: new FormControl(''),
  });

  datosProducto!: ProductoI;

  constructor(private activerouter: ActivatedRoute, private router: Router, private api: ApiService) { }

  ngOnInit(): void {
    let productoid = this.activerouter.snapshot.paramMap.get('id');
    this.api.getSingleProducto(productoid).subscribe(data => {
      this.datosProducto = data;
      this.editarForm.setValue({
        id: this.datosProducto.id,
        nombre: this.datosProducto.nombre,
        categoria: this.datosProducto.categoria,
        cantidad: this.datosProducto.cantidad
      });
    });
  }

  postForm(formValue: any) {
    const updatedProduct: Partial<ProductoI> = {
      id: this.datosProducto?.id,
      ...formValue
    };

    this.api.putProducto(updatedProduct).subscribe(data => {
      console.log(updatedProduct);
    });
  }

}
