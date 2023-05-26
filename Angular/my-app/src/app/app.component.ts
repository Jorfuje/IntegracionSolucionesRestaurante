import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from './services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'consumirApi';
  userList: any = [];
  formulario!: FormGroup;

  constructor(private userService: UsersService, private fb: FormBuilder) {
    console.log('El componente se ha creado');
  }

  ngOnInit(): void {
    console.log('El componente se h inicializado');
    this.formulario = this.fb.group({
      nombre: [, [Validators.required, Validators.minLength(3)]],
      categoria: [, [Validators.required, Validators.minLength(3)]],
      cantidad: [, [Validators.required, Validators.minLength(1)]]
    })

    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers()
      .subscribe((response: any) => this.userList = response);
  }

  create() {
    this.userService.create(this.formulario.value)
      .subscribe(() => {
        this.getUsers();
      })
  }

  deleteUser(id: number) {
    this.userService.delete(id)
      .subscribe(() => {
        this.getUsers();
      });
      this.getUsers();
  }

   modifyUser(id: number) {
    this.userService.modify(id, this.formulario.value)
      .subscribe(() => {
        this.getUsers();
      })
      this.getUsers();
  } 

 /*  modifyUser(id: number, formulario: any) {
    let user = this.userList.find(u => u.id == id);
    if (user) {
      this.formulario.patchValue({
        id: user.id,
        nombre: user.nombre,
        categoria: user.categoria,
        cantidad: user.cantidad
      });
    }
  } */

}
