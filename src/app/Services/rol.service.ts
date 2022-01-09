import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RolService {
  private API_SERVER = 'http://localhost:8090/api/v1/roles/';

  constructor(private httpClient: HttpClient) {}

  public getAllRoles(): Observable<any> {
    return this.httpClient.get(this.API_SERVER);
  }

  public saveRol(rol: any): Observable<any> {
    return this.httpClient.post(this.API_SERVER + 'create', rol);
  }

  public deleteRol(id: any): Observable<any> {
    return this.httpClient.delete(this.API_SERVER + 'delete/' + id);
  }
  // Actualizar
  public updateRol(rol: any): Observable<any> {
    return this.httpClient.post(this.API_SERVER + 'update/', rol);
  }

  // Detalle por ID
  public detailRol(id: any): Observable<any> {
    return this.httpClient.get(this.API_SERVER + 'detail/' + id);
  }
}
