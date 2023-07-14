import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Donacion } from '../models/donacion';
import { Donante } from '../models/donante';
import { Proyecto } from '../models/proyecto';
import { TipoDonacion } from '../models/tipo-donacion';

@Injectable({
  providedIn: 'root',
})
export class DonacionService {
  private apiUrl = 'http://localhost:8080/donaciones'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  // Obtener todas las donaciones
  getDonaciones(): Observable<Donacion[]> {
    return this.http.get<Donacion[]>(this.apiUrl);
  }

  // Obtener una donacion por su ID
  getDonacion(id: number): Observable<Donacion> {
    return this.http.get<Donacion>(`${this.apiUrl}${id}`);
  }

  // Registrar una nueva donacion
  registrarDonacion(donacion: Donacion): Observable<Donacion> {
    return this.http.post<Donacion>(this.apiUrl, donacion);
  }

  // Eliminar una donacion por su ID
  eliminarDonacion(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}`);
  }

  getDonante(): Observable<Donante[]> {
    const url = 'http://localhost:8080/donantes'; // Replace with your API URL for getting countries
    return this.http.get<Donante[]>(url);
  }

  getProyecto(): Observable<Proyecto[]> {
    const url = 'http://localhost:8080/proyectos'; // Replace with your API URL for getting countries
    return this.http.get<Proyecto[]>(url);
  }

  getTipoDonacion(): Observable<TipoDonacion[]> {
    const url = 'http://localhost:8080/tipo-donaciones'; // Replace with your API URL for getting countries
    return this.http.get<TipoDonacion[]>(url);
  }
}
