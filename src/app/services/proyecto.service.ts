import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private apiUrl = 'http://localhost:8080/proyectos'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  // Obtener todos los proyectos
  getProyectos(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(`${this.apiUrl}/proyectos`);
  }

  // Obtener un proyecto por su ID
  getProyecto(id: number): Observable<Proyecto> {
    return this.http.get<Proyecto>(`${this.apiUrl}/proyectos/${id}`);
  }

  // Registrar un nuevo proyecto
  registrarProyecto(proyecto: Proyecto): Observable<Proyecto> {
    return this.http.post<Proyecto>(`${this.apiUrl}/proyectos`, proyecto);
  }

  // Eliminar un proyecto por su ID
  eliminarProyecto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/proyectos/${id}`);
  }
}