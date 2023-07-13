import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DesastreUbicacion } from '../models/desastre-ubicacion';

@Injectable({
  providedIn: 'root'
})
export class DesastreUbicacionService {
  private apiUrl = 'http://localhost:8080/desastre-ubicaciones'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  // Obtener todas las relaciones DesastreUbicacion
  getDesastresUbicaciones(): Observable<DesastreUbicacion[]> {
    return this.http.get<DesastreUbicacion[]>(`${this.apiUrl}/desastres-ubicaciones`);
  }

  // Obtener una relación DesastreUbicacion por su ID
  getDesastreUbicacion(id: number): Observable<DesastreUbicacion> {
    return this.http.get<DesastreUbicacion>(`${this.apiUrl}/desastres-ubicaciones/${id}`);
  }

  // Registrar una nueva relación DesastreUbicacion
  registrarDesastreUbicacion(desastreUbicacion: DesastreUbicacion): Observable<DesastreUbicacion> {
    return this.http.post<DesastreUbicacion>(`${this.apiUrl}/desastres-ubicaciones`, desastreUbicacion);
  }

  // Eliminar una relación DesastreUbicacion por su ID
  eliminarDesastreUbicacion(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/desastres-ubicaciones/${id}`);
  }
}