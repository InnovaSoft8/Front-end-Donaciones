import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Voluntario } from '../models/voluntario';

@Injectable({
  providedIn: 'root'
})
export class VoluntarioService {
  private apiUrl = 'http://localhost:8080/voluntarios'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  // Obtener todos los voluntarios
  getVoluntarios(): Observable<Voluntario[]> {
    return this.http.get<Voluntario[]>(`${this.apiUrl}/voluntarios`);
  }

  // Obtener un voluntario por su ID
  getVoluntario(id: number): Observable<Voluntario> {
    return this.http.get<Voluntario>(`${this.apiUrl}/voluntarios/${id}`);
  }

  // Registrar un nuevo voluntario
  registrarVoluntario(voluntario: Voluntario): Observable<Voluntario> {
    return this.http.post<Voluntario>(`${this.apiUrl}/voluntarios`, voluntario);
  }

  // Eliminar un voluntario por su ID
  eliminarVoluntario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/voluntarios/${id}`);
  }
}