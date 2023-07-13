import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MetaFinanciamiento } from '../models/meta-financiamiento';

@Injectable({
  providedIn: 'root'
})
export class MetaFinanciamientoService {
  private apiUrl = 'http://localhost:8080/metas-financiamiento'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  // Obtener todas las metas de financiamiento
  getMetasFinanciamiento(): Observable<MetaFinanciamiento[]> {
    return this.http.get<MetaFinanciamiento[]>(`${this.apiUrl}/metas-financiamiento`);
  }

  // Obtener una meta de financiamiento por su ID
  getMetaFinanciamiento(id: number): Observable<MetaFinanciamiento> {
    return this.http.get<MetaFinanciamiento>(`${this.apiUrl}/metas-financiamiento/${id}`);
  }

  // Registrar una nueva meta de financiamiento
  registrarMetaFinanciamiento(metaFinanciamiento: MetaFinanciamiento): Observable<MetaFinanciamiento> {
    return this.http.post<MetaFinanciamiento>(`${this.apiUrl}/metas-financiamiento`, metaFinanciamiento);
  }

  // Eliminar una meta de financiamiento por su ID
  eliminarMetaFinanciamiento(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/metas-financiamiento/${id}`);
  }
}