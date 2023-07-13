import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Desastre } from '../models/desastre';

@Injectable({
  providedIn: 'root'
})
export class DesastreService {
  private apiUrl = 'http://localhost:8080/desastres'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  // Obtener todos los desastres
  getDesastres(): Observable<Desastre[]> {
    return this.http.get<Desastre[]>(`${this.apiUrl}/desastres`);
  }

  // Obtener un desastre por su ID
  getDesastre(id: number): Observable<Desastre> {
    return this.http.get<Desastre>(`${this.apiUrl}/desastres/${id}`);
  }

  // Registrar un nuevo desastre
  registrarDesastre(desastre: Desastre): Observable<Desastre> {
    return this.http.post<Desastre>(`${this.apiUrl}/desastres`, desastre);
  }

  // Eliminar un desastre por su ID
  eliminarDesastre(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/desastres/${id}`);
  }
}