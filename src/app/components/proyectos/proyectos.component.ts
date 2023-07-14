import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../../services/proyecto.service';
import { Proyecto } from '../../models/proyecto';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
  providers: [DatePipe]
})
export class ProyectosComponent implements OnInit {
  proyectos: Proyecto[] = [];

  constructor(private proyectoService: ProyectoService) {}

  ngOnInit(): void {
    this.obtenerProyectos();
  }

  obtenerProyectos() {
    this.proyectoService.getProyectos().subscribe((proyectos: Proyecto[]) => {
      this.proyectos = proyectos;
    });
  }
}