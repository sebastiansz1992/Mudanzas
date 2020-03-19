import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuditarViajesComponent } from './components/auditar-viajes/auditar-viajes.component';


const routes: Routes = [
  { path: '', redirectTo: '/mudanzas', pathMatch: 'full'},
  { path: 'mudanzas', component: AuditarViajesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
