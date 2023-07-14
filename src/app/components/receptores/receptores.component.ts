import { Component, OnInit } from '@angular/core';
import { ReceptorService } from '../../services/receptor.service';
import { Receptor } from '../../models/receptor';
import { Pais } from '../../models/pais';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-receptores',
  templateUrl: './receptores.component.html',
  styleUrls: ['./receptores.component.css'],
})
export class ReceptoresComponent implements OnInit {
  receptores: Receptor[] = [];
  paises: Pais[] = [];
  error: string = '';
  busqueda: string = '';
  receptoresFiltrados: Receptor[] = [];

  nuevoReceptor: Receptor = {
    idReceptor: 0,
    nombre: '',
    direccion: '',
    correoElectronico: '',
    telefono: '',
    fechaRegistro: new Date(),
    idPais: 0,
  };

  constructor(
    private receptorService: ReceptorService,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    this.obtenerReceptores();
    this.obtenerPaises();
    this.filtrarReceptores();
  }

  obtenerReceptores() {
    this.receptorService.getReceptores().subscribe((receptores: Receptor[]) => {
      this.receptores = receptores;
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

  registrarReceptor() {
    // Validar que todos los campos estén completos
    if (
      this.nuevoReceptor.nombre &&
      this.nuevoReceptor.direccion &&
      this.nuevoReceptor.correoElectronico &&
      this.nuevoReceptor.telefono &&
      this.nuevoReceptor.idPais
    ) {
      this.receptorService.registrarReceptor(this.nuevoReceptor).subscribe(
        () => {
          this.nuevoReceptor = {
            idReceptor: 0,
            nombre: '',
            direccion: '',
            correoElectronico: '',
            telefono: '',
            fechaRegistro: new Date(),
            idPais: 0,
          };
          this.obtenerReceptores();
        },
        (error) => {
          this.error = 'Error al registrar el receptor';
          console.log(error);
        }
      );
    } else {
      this.error = 'Todos los campos son obligatorios';
    }
  }

  eliminarReceptor(id: number) {
    this.receptorService.eliminarReceptor(id).subscribe(() => {
      this.obtenerReceptores();
    });
  }
  
  filtrarReceptores() {
    this.receptoresFiltrados = this.receptores.filter((receptor) =>
      receptor.nombre.toLowerCase().includes(this.busqueda.toLowerCase())
    );
  }
}