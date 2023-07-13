import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Donacion } from '../models/donacion';

@Injectable({
  providedIn: 'root'
})
export class DonacionService {
  private apiUrl = 'URL_DEL_API'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  // Obtener todas las donaciones
  getDonaciones(): Observable<Donacion[]> {
    return this.http.get<Donacion[]>(`${this.apiUrl}/donaciones`);
  }

  // Obtener una donacion por su ID
  getDonacion(id: number): Observable<Donacion> {
    return this.http.get<Donacion>(`${this.apiUrl}/donaciones/${id}`);
  }

  // Registrar una nueva donacion
  registrarDonacion(donacion: Donacion): Observable<Donacion> {
    return this.http.post<Donacion>(`${this.apiUrl}/donaciones`, donacion);
  }

  // Eliminar una donacion por su ID
  eliminarDonacion(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/donaciones/${id}`);
  }
}