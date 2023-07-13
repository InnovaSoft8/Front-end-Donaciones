import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recurso } from '../models/recurso';

@Injectable({
  providedIn: 'root'
})
export class RecursoService {
  private apiUrl = 'http://localhost:8080/recursos'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  // Obtener todos los recursos
  getRecursos(): Observable<Recurso[]> {
    return this.http.get<Recurso[]>(`${this.apiUrl}/recursos`);
  }

  // Obtener un recurso por su ID
  getRecurso(id: number): Observable<Recurso> {
    return this.http.get<Recurso>(`${this.apiUrl}/recursos/${id}`);
  }

  // Registrar un nuevo recurso
  registrarRecurso(recurso: Recurso): Observable<Recurso> {
    return this.http.post<Recurso>(`${this.apiUrl}/recursos`, recurso);
  }

  // Eliminar un recurso por su ID
  eliminarRecurso(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/recursos/${id}`);
  }
}