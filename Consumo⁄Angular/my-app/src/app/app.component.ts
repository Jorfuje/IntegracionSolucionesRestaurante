import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModalRef, ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { Producto } from './model/producto';
import { UsersService } from './services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  page = 1;
  pageSize = 10;
  collectionSize = 0;
  closeResult = '';

  public productos: Producto[] = [];

  public producto: Producto = new Producto();

  public tituloModal: string = 'Agregar Producto';

  constructor(private userService: UsersService) {  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers()
      .subscribe(response => {
        console.log(response);
        this.collectionSize = response.length;
        this.productos = response.map((producto, i) => ({ id: i + 1, ...producto }))
          .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
      });
  }

}

  /*ventanaConfirmar(producto : Producto){

  }

  guardarProducto(data) {
    this.spinnerService.show();
    if (this.producto.id>0){

    } else {
      this.producto = new Producto();
      this.producto.nombre = data.nombre;
      this.producto.cantidad = data.cantidad;

      this.userService.guardarProducto(this.producto).subscribe(response =>{
        this.spinnerService.hide;
        this.modalReference?.close;
        this.getUsers();

        Swal.fire(
          'Exitoso!',
          'El producto ${this.anime.nombre} ha sido guardado exitosamente',
          'success'
        );
      });
      this.inicializarComponentes();
    }
  }

  cargarProducto(productoSelecionado: Producto){
    console.log(productoSelecionado);
    this.producto = productoSelecionado;
    this.tituloModal = 'Editar Producto';
  }

  inicializarComponentes(){
    this.producto = new Producto();
    this.tituloModal = 'Agregar Producto';  
  }

 /* open(content: any){
    this.modalReference=this.modalService.open(content,{ariaLabelledBy:'modal-basic-title'});
    this.modalReference.result.then((result) =>{
      this.closeResult=`Closed with: ${result}`;

    }, (reason)=>{
      this.closeResult=`Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string{
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;

    }
  }
*/
  /*title = 'consumirApi';
  userList: any = [];
  formulario!: FormGroup;

  constructor(private userService: UsersService, private fb: FormBuilder) {
    console.log('El componente se ha creado');
  }



  ngOnInit(): void {
    console.log('El componente se ha inicializado');
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
/*
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
    this.userService.modify(id)
      .subscribe(() => {
        this.getUsers();
      })
      this.getUsers();
  } */

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
   } 
*/

