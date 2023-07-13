import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonantesComponent } from './components/donantes/donantes.component';
import { HomeComponent } from './components/home/home.component';
import { ReceptoresComponent } from './components/receptores/receptores.component';
import { DonacionesComponent } from './components/donaciones/donaciones.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';
import { MensajesComponent } from './components/mensajes/mensajes.component';
import { TestimoniosComponent } from './components/testimonios/testimonios.component';
import { TransaccionesComponent } from './components/transacciones/transacciones.component';
import { VoluntariosComponent } from './components/voluntarios/voluntarios.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { PatrocinadoresComponent } from './components/patrocinadores/patrocinadores.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Donantes', component: DonantesComponent },
  { path: 'Receptores', component: ReceptoresComponent },
  { path: 'Donaciones', component: DonacionesComponent },
  { path: 'Proyectos', component: ProyectosComponent },
  { path: 'Comentarios', component: ComentariosComponent },
  { path: 'Mensajes', component: MensajesComponent },
  { path: 'Testimonios', component: TestimoniosComponent },
  { path: 'Transacciones', component: TransaccionesComponent },
  { path: 'Voluntarios', component: VoluntariosComponent },
  { path: 'Eventos', component: EventosComponent  },
  { path: 'Patrocinadores', component: PatrocinadoresComponent  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}