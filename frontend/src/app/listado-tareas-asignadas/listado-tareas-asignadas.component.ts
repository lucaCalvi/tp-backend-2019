import { Component, OnInit, Input } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listado-tareas-asignadas',
  templateUrl: './listado-tareas-asignadas.component.html',
  styleUrls: ['./listado-tareas-asignadas.component.css']
})
export class ListadoTareasAsignadasComponent implements OnInit {

  tareas = null;

  constructor(private UsuarioService: UsuarioService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getTareas();
  }

  getTareas() {
    const id = this.route.snapshot.paramMap.get('id');
    this.UsuarioService.getTareas(id)
      .subscribe(res => {
        this.tareas = res;
      },
      err => {
        console.log('Error ', err);
      });
  }

}
