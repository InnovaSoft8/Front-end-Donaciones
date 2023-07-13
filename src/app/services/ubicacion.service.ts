import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ubicacion } from '../models/ubicacion';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {
  private apiUrl = 'http://localhost:8080/ubicaciones'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  // Obtener todas las ubicaciones
  getUbicaciones(): Observable<Ubicacion[]> {
    return this.http.get<Ubicacion[]>(`${this.apiUrl}/ubicaciones`);
  }

  // Obtener una ubicación por su ID
  getUbicacion(id: number): Observable<Ubicacion> {
    return this.http.get<Ubicacion>(`${this.apiUrl}/ubicaciones/${id}`);
  }

  // Registrar una nueva ubicación
  registrarUbicacion(ubicacion: Ubicacion): Observable<Ubicacion> {
    return this.http.post<Ubicacion>(`${this.apiUrl}/ubicaciones`, ubicacion);
  }

  // Eliminar una ubicación por su ID
  eliminarUbicacion(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/ubicaciones/${id}`);
  }
}