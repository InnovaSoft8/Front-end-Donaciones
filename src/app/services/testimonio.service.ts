import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Testimonio } from '../models/testimonio';

@Injectable({
  providedIn: 'root'
})
export class TestimonioService {
  private apiUrl = 'http://localhost:8080/testimonios'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  // Obtener todos los testimonios
  getTestimonios(): Observable<Testimonio[]> {
    return this.http.get<Testimonio[]>(`${this.apiUrl}/testimonios`);
  }

  // Obtener un testimonio por su ID
  getTestimonio(id: number): Observable<Testimonio> {
    return this.http.get<Testimonio>(`${this.apiUrl}/testimonios/${id}`);
  }

  // Registrar un nuevo testimonio
  registrarTestimonio(testimonio: Testimonio): Observable<Testimonio> {
    return this.http.post<Testimonio>(`${this.apiUrl}/testimonios`, testimonio);
  }

  // Eliminar un testimonio por su ID
  eliminarTestimonio(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/testimonios/${id}`);
  }
}