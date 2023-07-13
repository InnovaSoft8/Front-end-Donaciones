import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PublicacionRedesSociales } from '../models/publicacion-redes-sociales';

@Injectable({
  providedIn: 'root'
})
export class PublicacionRedesSocialesService {
  private apiUrl = 'http://localhost:8080/publicaciones-redes-sociales'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  // Obtener todas las publicaciones de redes sociales
  getPublicacionesRedesSociales(): Observable<PublicacionRedesSociales[]> {
    return this.http.get<PublicacionRedesSociales[]>(`${this.apiUrl}/publicaciones-redes-sociales`);
  }

  // Obtener una publicación de redes sociales por su ID
  getPublicacionRedesSociales(id: number): Observable<PublicacionRedesSociales> {
    return this.http.get<PublicacionRedesSociales>(`${this.apiUrl}/publicaciones-redes-sociales/${id}`);
  }

  // Registrar una nueva publicación de redes sociales
  registrarPublicacionRedesSociales(publicacion: PublicacionRedesSociales): Observable<PublicacionRedesSociales> {
    return this.http.post<PublicacionRedesSociales>(`${this.apiUrl}/publicaciones-redes-sociales`, publicacion);
  }

  // Eliminar una publicación de redes sociales por su ID
  eliminarPublicacionRedesSociales(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/publicaciones-redes-sociales/${id}`);
  }
}