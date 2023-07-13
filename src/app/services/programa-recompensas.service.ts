import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProgramaRecompensas } from '../models/programa-recompensas';

@Injectable({
  providedIn: 'root'
})
export class ProgramaRecompensasService {
  private apiUrl = 'http://localhost:8080/programas-recompensas'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  // Obtener todos los programas de recompensas
  getProgramasRecompensas(): Observable<ProgramaRecompensas[]> {
    return this.http.get<ProgramaRecompensas[]>(`${this.apiUrl}/programas-recompensas`);
  }

  // Obtener un programa de recompensas por su ID
  getProgramaRecompensas(id: number): Observable<ProgramaRecompensas> {
    return this.http.get<ProgramaRecompensas>(`${this.apiUrl}/programas-recompensas/${id}`);
  }

  // Registrar un nuevo programa de recompensas
  registrarProgramaRecompensas(programaRecompensas: ProgramaRecompensas): Observable<ProgramaRecompensas> {
    return this.http.post<ProgramaRecompensas>(`${this.apiUrl}/programas-recompensas`, programaRecompensas);
  }

  // Eliminar un programa de recompensas por su ID
  eliminarProgramaRecompensas(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/programas-recompensas/${id}`);
  }
}