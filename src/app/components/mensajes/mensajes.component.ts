import { Component, OnInit } from '@angular/core';
import { MensajeService } from '../../services/mensaje.service';
import { Mensaje } from '../../models/mensaje';
import { Donante } from '../../models/donante';
import { Receptor } from '../../models/receptor';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css'],
})
export class MensajesComponent implements OnInit {
  mensajes: Mensaje[] = [];
  donantes: Donante[] = [];
  receptores: Receptor[] = [];
  error: string = '';

  nuevoMensaje: Mensaje = {
    idMensaje: 0,
    idDonante: 0,
    idReceptor: 0,
    fechaHoraMensaje: new Date(),
    contenidoMensaje: '',
    estadoMensaje: '',
  };

  constructor(private mensajeService: MensajeService) {}

  ngOnInit(): void {
    this.obtenerMensajes();
    this.obtenerDonantes();
    this.obtenerReceptores();
  }

  obtenerMensajes() {
    this.mensajeService.getMensajes().subscribe((mensajes: Mensaje[]) => {
      this.mensajes = mensajes;
    });
  }

  obtenerDonantes() {
    this.mensajeService.getDonante().subscribe((donantes: Donante[]) => {
      this.donantes = donantes;
    });
  }

  obtenerReceptores() {
    this.mensajeService.getReceptor().subscribe((receptores: Receptor[]) => {
      this.receptores = receptores;
    });
  }

  obtenerNombreEmisor(idDonante: number): string {
    const donante = this.donantes.find((d) => d.idDonante === idDonante);
    return donante ? donante.nombre : '';
  }

  obtenerNombreReceptor(idReceptor: number): string {
    const receptor = this.receptores.find((r) => r.idReceptor === idReceptor);
    return receptor ? receptor.nombre : '';
  }

  registrarMensaje() {
    // Validar que todos los campos estén completos
    if (
      this.nuevoMensaje.idDonante &&
      this.nuevoMensaje.idReceptor &&
      this.nuevoMensaje.contenidoMensaje
    ) {
      this.mensajeService.registrarMensaje(this.nuevoMensaje).subscribe(
        () => {
          this.nuevoMensaje = {
            idMensaje: 0,
            idDonante: 0,
            idReceptor: 0,
            fechaHoraMensaje: new Date(),
            contenidoMensaje: '',
            estadoMensaje: '',
          };
          this.obtenerMensajes();
        },
        (error) => {
          this.error = 'Error al registrar el mensaje';
          console.log(error);
        }
      );
    } else {
      console.log("error");
    }
  }

  eliminarMensaje(id: number) {
    this.mensajeService.eliminarMensaje(id).subscribe(() => {
      this.obtenerMensajes();
    });
  }
}





