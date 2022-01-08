import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/Services/usuario.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  handleSearch(value: string): void {
    // console.log(value);
    this.filtro_valor = value;
  }

  usuarioForm!: FormGroup;
  usuarios: any = [];
  roles: any = {};
  filtro_valor = '';
  constructor(
    public fb: FormBuilder,
    public usuarioService: UsuarioService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    // Listar los usuarios
    this.usuarioService.getAllUsuarios().subscribe(
      (resp) => {
        this.usuarios = resp;
        this.roles.rol = resp.rol;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  // Eliminar usuarios
  eliminar(usuario: { id: any }) {
    confirm(`Esta seguro que quiere eliminar?`);
    this.usuarioService.deleteUsuario(usuario.id).subscribe((resp: boolean) => {
      if (resp === true) {
        this.usuarios.pop(usuario);
      } else {
      }
      window.location.reload();
    });
  }
}
