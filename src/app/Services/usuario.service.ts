import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

private API_SERVER = "http://localhost:8090/api/v1/usuarios/";

  constructor(private httpClient: HttpClient) { }


// Listar
  public getAllUsuarios(): Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }
// Guardar
  public saveUsuario (usuario:any): Observable<any>{
    return this.httpClient.post(this.API_SERVER + "create",usuario);
  }
  
  // Eliminar
  public deleteUsuario(id: any):Observable<any>{
    return this.httpClient.delete(this.API_SERVER + "delete/"+id);
  }

  // Actualizar
  public updateUsuario(usuario: any): Observable<any>{
    return this.httpClient.post(this.API_SERVER + "update/", usuario)
  }

  // Detalle por ID 
  public detailUsuario(id: any): Observable<any>{
    return this.httpClient.get(this.API_SERVER + "detail/"+id)
  }
}
