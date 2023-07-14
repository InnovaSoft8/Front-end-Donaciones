import { Component, OnInit } from '@angular/core';
import { DonacionService } from '../../services/donacion.service';
import { Donacion } from '../../models/donacion';
import { Donante } from '../../models/donante';
import { Proyecto } from '../../models/proyecto';
import { TipoDonacion } from '../../models/tipo-donacion';

@Component({
  selector: 'app-donaciones',
  templateUrl: './donaciones.component.html',
  styleUrls: ['./donaciones.component.css'],
})
export class DonacionesComponent implements OnInit {
  donaciones: Donacion[] = [];
  donantes: Donante[] = [];
  proyectos: Proyecto[] = [];
  tiposDonacion: TipoDonacion[] = [];
  error: string = '';

  nuevaDonacion: Donacion = {
    idDonacion: 0,
    monto: 0,
    fechaHora: new Date(),
    idDonante: 0,
    idProyecto: 0,
    idTipoDonacion: 0,
  };

  constructor(private donacionService: DonacionService) {}

  ngOnInit(): void {
    this.obtenerDonaciones();
    this.obtenerDonantes();
    this.obtenerProyectos();
    this.obtenerTiposDonacion();
  }

  obtenerDonaciones() {
    this.donacionService.getDonaciones().subscribe((donaciones: Donacion[]) => {
      this.donaciones = donaciones;
    });
  }

  obtenerDonantes() {
    this.donacionService.getDonante().subscribe((donantes: Donante[]) => {
      this.donantes = donantes;
    });
  }

  obtenerProyectos() {
    this.donacionService.getProyecto().subscribe((proyectos: Proyecto[]) => {
      this.proyectos = proyectos;
    });
  }

  obtenerTiposDonacion() {
    this.donacionService.getTipoDonacion().subscribe((tiposDonacion: TipoDonacion[]) => {
      this.tiposDonacion = tiposDonacion;
    });
  }

  obtenerNombreDonante(idDonante: number): string {
    const donante = this.donantes.find((d) => d.idDonante === idDonante);
    return donante ? donante.nombre : '';
  }

  obtenerNombreProyecto(idProyecto: number): string {
    const proyecto = this.proyectos.find((p) => p.idProyecto === idProyecto);
    return proyecto ? proyecto.nombre : '';
  }

  obtenerNombreTipoDonacion(idTipoDonacion: number): string {
    const tipoDonacion = this.tiposDonacion.find((td) => td.idTipoDonacion === idTipoDonacion);
    return tipoDonacion ? tipoDonacion.descripcion : '';
  }

  registrarDonacion() {
    // Validar que todos los campos estén completos
    if (
      this.nuevaDonacion.monto &&
      this.nuevaDonacion.fechaHora &&
      this.nuevaDonacion.idDonante &&
      this.nuevaDonacion.idProyecto &&
      this.nuevaDonacion.idTipoDonacion
    ) {
      this.donacionService.registrarDonacion(this.nuevaDonacion).subscribe(
        () => {
          this.nuevaDonacion = {
            idDonacion: 0,
            monto: 0,
            fechaHora: new Date(),
            idDonante: 0,
            idProyecto: 0,
            idTipoDonacion: 0,
          };
          this.obtenerDonaciones();
        },
        (error) => {
          this.error = 'Error al registrar la donación';
          console.log(error);
        }
      );
    } else {
      this.error = 'Todos los campos son obligatorios';
    }
  }

  eliminarDonacion(id: number) {
    this.donacionService.eliminarDonacion(id).subscribe(() => {
      this.obtenerDonaciones();
    });
  }
}