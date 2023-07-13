import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patrocinador } from '../models/patrocinador';

@Injectable({
  providedIn: 'root'
})
export class PatrocinadorService {
  private apiUrl = 'URL_DEL_API'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  // Obtener todos los patrocinadores
  getPatrocinadores(): Observable<Patrocinador[]> {
    return this.http.get<Patrocinador[]>(`${this.apiUrl}/patrocinadores`);
  }

  // Obtener un patrocinador por su ID
  getPatrocinador(id: number): Observable<Patrocinador> {
    return this.http.get<Patrocinador>(`${this.apiUrl}/patrocinadores/${id}`);
  }

  // Registrar un nuevo patrocinador
  registrarPatrocinador(patrocinador: Patrocinador): Observable<Patrocinador> {
    return this.http.post<Patrocinador>(`${this.apiUrl}/patrocinadores`, patrocinador);
  }

  // Eliminar un patrocinador por su ID
  eliminarPatrocinador(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/patrocinadores/${id}`);
  }
}