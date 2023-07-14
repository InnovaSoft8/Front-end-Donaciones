import { Component, OnInit } from '@angular/core';
import { ComentarioService } from '../../services/comentario.service';
import { Comentario } from '../../models/comentario';
import { Proyecto } from '../../models/proyecto';
import { Donante } from '../../models/donante';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css'],
})
export class ComentariosComponent implements OnInit {
  comentarios: Comentario[] = [];
  proyectos: Proyecto[] = [];
  donantes: Donante[] = [];
  error: string = '';

  nuevoComentario: Comentario = {
    idComentario: 0,
    contenido: '',
    fechaHora: new Date(),
    idDonante: 0,
    idProyecto: 0,
  };

  constructor(private comentarioService: ComentarioService) {}

  ngOnInit(): void {
    this.obtenerComentarios();
    this.obtenerProyectos();
    this.obtenerDonantes();
  }

  obtenerComentarios() {
    this.comentarioService.getComentarios().subscribe((comentarios: Comentario[]) => {
      this.comentarios = comentarios;
    });
  }

  obtenerProyectos() {
    this.comentarioService.getProyecto().subscribe((proyectos: Proyecto[]) => {
      this.proyectos = proyectos;
    });
  }

  obtenerDonantes() {
    this.comentarioService.getDonante().subscribe((donantes: Donante[]) => {
      this.donantes = donantes;
    });
  }

  obtenerNombreProyecto(idProyecto: number): string {
    const proyecto = this.proyectos.find((p) => p.idProyecto === idProyecto);
    return proyecto ? proyecto.nombre : '';
  }

  obtenerNombreDonante(idDonante: number): string {
    const donante = this.donantes.find((d) => d.idDonante === idDonante);
    return donante ? donante.nombre : '';
  }

  registrarComentario() {
    // Validar que todos los campos estén completos
    if (
      this.nuevoComentario.contenido &&
      this.nuevoComentario.idDonante &&
      this.nuevoComentario.idProyecto
    ) {
      this.comentarioService.registrarComentario(this.nuevoComentario).subscribe(
        () => {
          this.nuevoComentario = {
            idComentario: 0,
            contenido: '',
            fechaHora: new Date(),
            idDonante: 0,
            idProyecto: 0,
          };
          this.obtenerComentarios();
        },
        (error) => {
          this.error = 'Error al registrar el comentario';
          console.log(error);
        }
      );
    } else {
      this.error = 'Todos los campos son obligatorios';
    }
  }

  eliminarComentario(id: number) {
    this.comentarioService.eliminarComentario(id).subscribe(() => {
      this.obtenerComentarios();
    });
  }
}