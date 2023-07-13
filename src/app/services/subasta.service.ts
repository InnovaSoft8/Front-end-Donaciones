import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subasta } from '../models/subasta';

@Injectable({
  providedIn: 'root'
})
export class SubastaService {
  private apiUrl = 'URL_DEL_API'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  // Obtener todas las subastas
  getSubastas(): Observable<Subasta[]> {
    return this.http.get<Subasta[]>(`${this.apiUrl}/subastas`);
  }

  // Obtener una subasta por su ID
  getSubasta(id: number): Observable<Subasta> {
    return this.http.get<Subasta>(`${this.apiUrl}/subastas/${id}`);
  }

  // Registrar una nueva subasta
  registrarSubasta(subasta: Subasta): Observable<Subasta> {
    return this.http.post<Subasta>(`${this.apiUrl}/subastas`, subasta);
  }

  // Eliminar una subasta por su ID
  eliminarSubasta(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/subastas/${id}`);
  }
}