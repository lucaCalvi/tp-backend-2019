import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';
import { MenuComponent } from './menu/menu.component';
import { ListadoTareasAsignadasComponent } from './listado-tareas-asignadas/listado-tareas-asignadas.component';

const routes: Routes = [
  { path: '', redirectTo: '/api/usuarios', pathMatch: 'full' },
  { path: 'api/usuarios', component: ListadoUsuariosComponent },
  { path: 'api/usuarios/:id', component: DetalleUsuarioComponent },
  { path: 'api/usuarios/:id/tareas', component: ListadoTareasAsignadasComponent }
  //{ path: 'api/usuarios/:id/tareas/:idTarea', component: }
  //{ path: 'menu', component: MenuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
