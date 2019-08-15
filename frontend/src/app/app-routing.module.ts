import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';

const routes: Routes = [
  { path: '', redirectTo: '/listado-usuarios', pathMatch: 'full' },
  { path: 'listado-usuarios', component: ListadoUsuariosComponent },
  { path: 'detalle-usuario/:id', component: DetalleUsuarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
