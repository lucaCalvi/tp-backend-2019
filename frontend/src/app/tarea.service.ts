import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  URL_API = 'http://localhost:3000/api/tareas';

  constructor(private httpClient: HttpClient) { }

  getTareas(id) {
    return this.httpClient.get(this.URL_API);
  }

  getTarea() {
    
  }
}
