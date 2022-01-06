import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RolService } from 'src/app/Services/rol.service';
import { UsuarioService } from 'src/app/Services/usuario.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  usuarioForm!: FormGroup;
  usuarios: any = [];
  roles: any = [];
  constructor(public fb: FormBuilder,
    public usuarioService: UsuarioService,
    public rolService: RolService,
    private router: Router,
    private activatedRoute: ActivatedRoute,) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
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
  editar(usuario: { id: any; nombre: any; activo: any; rol: any; }){
    this.usuarioForm.setValue({
      id:usuario.id,
      nombre: usuario.nombre ,
      activo: usuario.activo ,
      rol: usuario.rol,
    })
    window.location.reload();
  }
}
