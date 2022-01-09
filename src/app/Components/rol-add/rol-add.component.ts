import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RolService } from 'src/app/Services/rol.service';

@Component({
  selector: 'app-rol-add',
  templateUrl: './rol-add.component.html',
  styleUrls: ['./rol-add.component.css']
})
export class RolAddComponent implements OnInit {
  rolForm!: FormGroup;
  roles: any = [];
  constructor(public fb: FormBuilder,
    public rolService: RolService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.rolForm = this.fb.group({
      id: [0],
      nombre: ['', Validators.required]
    });
  }

  // Guardar Role
  guardar(){
    this.rolService.saveRol(this.rolForm.value).subscribe(
      (resp) => {
        this.rolForm.reset();
        this.roles = this.roles.filter(
          (rol: { id: any }) => resp.id !== rol.id
        );
        this.roles.push(resp);
        this.router.navigate(['role']);
        this.toastr.success("Rol Creado con exito!")
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
