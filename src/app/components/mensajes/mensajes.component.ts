import { Component, OnInit } from '@angular/core';
import { MensajeService } from '../../services/mensaje.service';
import { Mensaje } from '../../models/mensaje';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css'],
})
export class MensajesComponent implements OnInit {
  mensajes: Mensaje[] = [];

  constructor(private mensajeService: MensajeService) {}

  ngOnInit(): void {
    this.obtenerMensajes();
  }

  obtenerMensajes() {
    this.mensajeService.getMensajes().subscribe((mensajes: Mensaje[]) => {
      this.mensajes = mensajes;
    });
  }

  obtenerNombreEmisor(mensaje: Mensaje): string {
    // Lógica para obtener el nombre del emisor según su tipo (donante o voluntario)
    return mensaje.idDonanteEmisor ? 'Donante' : 'Voluntario';
  }
}