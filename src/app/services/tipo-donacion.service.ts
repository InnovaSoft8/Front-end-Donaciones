import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoDonacion } from '../models/tipo-donacion';

@Injectable({
  providedIn: 'root',
})
export class TipoDonacionService {
  private apiUrl = 'http://localhost:8080/tipo-donaciones'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  // Obtener todos los tipos de donación
  getTiposDonacion(): Observable<TipoDonacion[]> {
    return this.http.get<TipoDonacion[]>(this.apiUrl);
  }

  // Obtener un tipo de donación por su ID
  getTipoDonacion(id: number): Observable<TipoDonacion> {
    return this.http.get<TipoDonacion>(`${this.apiUrl}/tipos-donacion/${id}`);
  }

  // Registrar un nuevo tipo de donación
  registrarTipoDonacion(tipoDonacion: TipoDonacion): Observable<TipoDonacion> {
    return this.http.post<TipoDonacion>(
      `${this.apiUrl}/tipos-donacion`,
      tipoDonacion
    );
  }

  // Eliminar un tipo de donación por su ID
  eliminarTipoDonacion(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/tipos-donacion/${id}`);
  }
}
