import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RolService } from 'src/app/Services/rol.service';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.css']
})
export class RolComponent implements OnInit {
  handleSearch(value: string): void {
    // console.log(value);
    this.filtro_valor = value;
  }
  roles: any = [];
  filtro_valor = '';
  constructor(
    public fb: FormBuilder,
    public rolService: RolService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.rolService.getAllRoles().subscribe(
      (resp) => {
        this.roles = resp;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  // Eliminar rols
  eliminar(rol: { id: any }) {
    confirm(`Esta seguro que quiere eliminar?`);
    this.rolService.deleteRol(rol.id).subscribe((resp: boolean) => {
      console.log(resp);
      if (resp === true) {
        this.roles.pop(rol);
      } 
      window.location.reload();
    },
    (error) => {
      console.error(error.error.message);
      this.toastr.error("Error: No es posible borrar el Rol, debe estar relacionado con un usuario!");
    });
  }
}
