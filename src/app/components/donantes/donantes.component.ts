import { Component, OnInit } from '@angular/core';
import { DonanteService } from '../../services/donante.service';
import { Donante } from '../../models/donante';
import { Pais } from '../../models/pais';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-donantes',
  templateUrl: './donantes.component.html',
  styleUrls: ['./donantes.component.css'],
})
export class DonantesComponent implements OnInit {
  donantes: Donante[] = [];
  paises: Pais[] = [];
  error: string = '';

  nuevoDonante: Donante = {
    idDonante: 0,
    nombre: '',
    direccion: '',
    correoElectronico: '',
    telefono: '',
    fechaRegistro: new Date(),
    idPais: 0,
  };

  constructor(
    private donanteService: DonanteService,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    this.obtenerDonantes();
    this.obtenerPaises();
  }

  obtenerDonantes() {
    this.donanteService.getDonantes().subscribe((donantes: Donante[]) => {
      this.donantes = donantes;
    });
  }

  obtenerPaises() {
    this.paisService.getPaises().subscribe((paises: Pais[]) => {
      this.paises = paises;
    });
  }

  obtenerNombrePais(idPais: number): string {
    const pais = this.paises.find((p) => p.idPais === idPais);
    return pais ? pais.nombre : '';
  }

  registrarDonante() {
    // Validar que todos los campos estén completos
    if (
      this.nuevoDonante.nombre &&
      this.nuevoDonante.direccion &&
      this.nuevoDonante.correoElectronico &&
      this.nuevoDonante.telefono &&
      this.nuevoDonante.idPais
    ) {
      this.donanteService.registrarDonante(this.nuevoDonante).subscribe(
        () => {
          this.nuevoDonante = {
            idDonante: 0,
            nombre: '',
            direccion: '',
            correoElectronico: '',
            telefono: '',
            fechaRegistro: new Date(),
            idPais: 0,
          };
          this.obtenerDonantes();
        },
        (error) => {
          this.error = 'Error al registrar el donante';
          console.log(error);
        }
      );
    } else {
      this.error = 'Todos los campos son obligatorios';
    }
  }

  eliminarDonante(id: number) {
    this.donanteService.eliminarDonante(id).subscribe(() => {
      this.obtenerDonantes();
    });
  }
}