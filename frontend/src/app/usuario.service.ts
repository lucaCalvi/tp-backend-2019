import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  URL_API = 'http://localhost:3000/api/usuarios';

  constructor(private httpClient: HttpClient) { }

  getUsuarios(): Observable<Object> {
    return this.httpClient.get(this.URL_API);
  }

  getUsuario(id): Observable<Object> {
    return this.httpClient.get(this.URL_API + `/${id}`);
  }

  getTareas(id): Observable<Object> {
    return this.httpClient.get(this.URL_API + `/${id}` + '/tareas');
  }

  getTarea(id, idTarea): Observable<Object> {
    return this.httpClient.get(this.URL_API + `/${id}` + '/tareas' + `/${idTarea}`);
  }
}
