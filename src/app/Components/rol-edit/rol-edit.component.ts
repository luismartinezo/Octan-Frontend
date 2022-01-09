import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RolService } from 'src/app/Services/rol.service';

@Component({
  selector: 'app-rol-edit',
  templateUrl: './rol-edit.component.html',
  styleUrls: ['./rol-edit.component.css']
})
export class RolEditComponent implements OnInit {
  rolForm!: FormGroup;
  form: any = {};
  roles: any = [];
  constructor(public fb: FormBuilder,
    public rolService: RolService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.rolService.detailRol(id).subscribe(data => {
      this.form.id = data.id;
      this.form.nombre = data.nombre;
      console.log(this.form)
    },
    (err:any)=>{
      this.router.navigate(['/']);
    });

    this.rolForm = this.fb.group({
      id: [0],
      nombre: ['', Validators.required]
    });
  }

  // Editar Roles
  editar(): void {
    const id = this.activatedRoute.snapshot.params.id;
    console.log(this.form,id);
    this.rolService.updateRol(this.form).subscribe(data=>{
      this.roles = data;
      this.toastr.success('Registro Actualizado Correctamente!');
      this.router.navigate(['role']);
    });
}
}
