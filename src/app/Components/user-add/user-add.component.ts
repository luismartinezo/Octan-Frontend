import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RolService } from 'src/app/Services/rol.service';
import { UsuarioService } from 'src/app/Services/usuario.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css'],
})
export class UserAddComponent implements OnInit {
  usuarioForm!: FormGroup;
  usuarios: any = [];
  roles: any = [];

  constructor(
    public fb: FormBuilder,
    public usuarioService: UsuarioService,
    public rolService: RolService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService
  ) {}

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

  // Guardar Usuario
  guardar(): void {
    this.usuarioService.saveUsuario(this.usuarioForm.value).subscribe(
      (resp) => {
        this.usuarioForm.reset();
        this.usuarios = this.usuarios.filter(
          (usuario: { id: any }) => resp.id !== usuario.id
        );
        this.usuarios.push(resp);
        this.router.navigate(['']);
        this.toastr.success("Usuario Creado!")
      },
      (error) => {
        console.error(error);
      }
    );
    // console.log(this.usuarioForm.value);
  }
}
