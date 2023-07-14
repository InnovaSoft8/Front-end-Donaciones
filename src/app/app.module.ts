import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DonantesComponent } from './components/donantes/donantes.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './components/home/home.component';
import { ReceptoresComponent } from './components/receptores/receptores.component';
import { DonacionesComponent } from './components/donaciones/donaciones.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';
import { MensajesComponent } from './components/mensajes/mensajes.component';
import { TestimoniosComponent } from './components/testimonios/testimonios.component';
import { TransaccionesComponent } from './components/transacciones/transacciones.component';
import { VoluntariosComponent } from './components/voluntarios/voluntarios.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { PatrocinadoresComponent } from './components/patrocinadores/patrocinadores.component';
import { RouterModule, Routes } from '@angular/router';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar'; // Import MatToolbarModule
import { CommonModule } from '@angular/common';

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
  declarations: [
    AppComponent,
    DonantesComponent,
    HomeComponent,
    ReceptoresComponent,
    DonacionesComponent,
    ComentariosComponent,
    MensajesComponent,
    TestimoniosComponent,
    TransaccionesComponent,
    VoluntariosComponent,
    EventosComponent,
    PatrocinadoresComponent,
    ProyectosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatListModule,
    FormsModule,
    MatToolbarModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
