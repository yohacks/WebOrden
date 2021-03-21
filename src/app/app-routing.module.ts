import { AordenesComponent } from './components/aordenes/aordenes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CordenesComponent } from './components/cordenes/cordenes.component';
import { LordenesComponent } from './components/lordenes/lordenes.component';
import { MenuComponent } from './components/menu/menu.component';
import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent}, //TODO: only users auth
  { path: 'crearOrden', component: CordenesComponent }, //TODO: only users auth
  { path: 'listarOrdenes', component: LordenesComponent }, //TODO: only users auth
  { path: 'crearOrdenMasiva', component: AordenesComponent }, //TODO: only users auth
  { path: '**', component: Page404Component }, //TODO: only users auth
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
