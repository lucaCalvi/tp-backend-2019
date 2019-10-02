import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalle-tarea',
  templateUrl: './detalle-tarea.component.html',
  styleUrls: ['./detalle-tarea.component.css']
})
export class DetalleTareaComponent implements OnInit {

  tarea = null;
  asignador = null;

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.getTarea();
  }

  getTarea() {
    const id = this.route.snapshot.paramMap.get('id');
    const idTarea = this.route.snapshot.paramMap.get('idTarea');
    this.usuarioService.getTarea(id, idTarea)
      .subscribe(res => {
        this.tarea = res;
        this.getAsignador(id);
      },
      err => {
        console.log('Error ', err);
      });
  }

  getAsignador(id) {
    this.usuarioService.getUsuario(id)
      .subscribe(res => {
        this.asignador = res;
      },
      err => {
        console.log('Error', err);
      });
  }

  goBack() {
    this.location.back();
  }

}
