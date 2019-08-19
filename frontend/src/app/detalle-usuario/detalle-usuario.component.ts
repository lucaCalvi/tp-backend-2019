import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { ActivatedRoute } from '@angular/router';
import {Location } from '@angular/common';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.css']
})
export class DetalleUsuarioComponent implements OnInit {

  usuario = null;

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getUsuario();
  }

  getUsuario() {
    const id = this.route.snapshot.paramMap.get('id');
    this.usuarioService.getUsuario(id)
      .subscribe(res => {
        this.usuario = res;
      },
      err => {
        console.log('Error ', err);
      });
  }

  goBack() {
    this.location.back();
  }

}