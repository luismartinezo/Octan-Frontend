import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/Services/usuario.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usuarioForm!: FormGroup;
  usuarios:any=[];

  constructor(public fb: FormBuilder, public usuarioService: UsuarioService) { }

  ngOnInit() {
    
    // Listar los usuarios
    this.usuarioService.getAllUsuarios().subscribe(resp=>{
      this.usuarios = resp;
      console.log(this.usuarios);
    }, 
    error => { console.error(error) }
    );
  }
// Eliminar usuarios
  eliminar(usuario: { id: any; }){
    this.usuarioService.deleteUsuario(usuario.id).subscribe((resp: boolean)=>{
      if(resp===true){
        this.usuarios.pop(usuario)
      }
      window.location.reload();
    })
  }


}
