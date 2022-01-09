import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RolService } from 'src/app/Services/rol.service';
import { UsuarioService } from 'src/app/Services/usuario.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  usuarioForm!: FormGroup;
  form: any = {};
  usuarios: any = [];
  roles: any = [];
  constructor(public fb: FormBuilder,
    public usuarioService: UsuarioService,
    public rolService: RolService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.usuarioService.detailUsuario(id).subscribe(data => {
      this.form.id = data.id;
      this.form.nombre = data.nombre;
      this.form.activo = data.activo;
      this.form.rol = data.rol;
      console.log(this.form)
    },
    (err:any)=>{
      this.router.navigate(['/']);
    });

    this.usuarioForm = this.fb.group({
      id: [0],
      nombre: ['', Validators.required],
      activo: ['', Validators.required],
      rol: ['', Validators.required],
    });

    // Roles
    this.rolService.getAllRoles().subscribe(
      (resp) => {
        this.roles = resp;
      },
      error => {
        console.error(error);
      }
    );
  }

  // Editar Usuarios
  editar(): void {
    
    const id = this.activatedRoute.snapshot.params.id;
    console.log(this.form,id);
    this.usuarioService.updateUsuario(this.form).subscribe(data=>{
      this.usuarios = data;
      
      this.toastr.success('Registro Actualizado Correctamente!');
      this.router.navigate(['user']);
    });
  }
  onItemChange(value: any){
    console.log(" Value is : ", value );
 }
}
