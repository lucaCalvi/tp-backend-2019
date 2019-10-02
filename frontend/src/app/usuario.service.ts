import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  URL_API = 'http://localhost:3000/api/usuarios';

  constructor(private httpClient: HttpClient) { }

  getUsuarios() {
    return this.httpClient.get(this.URL_API);
  }

  getUsuario(id) {
    return this.httpClient.get(this.URL_API + `/${id}`);
  }

  getTareas(id) {
    return this.httpClient.get(this.URL_API + `/${id}` + '/tareas');
  }

  getTarea() {
    
  }
}
