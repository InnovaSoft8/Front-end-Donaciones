import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaccion } from '../models/transaccion';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {
  private apiUrl = 'http://localhost:8080/transacciones'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  // Obtener todas las transacciones
  getTransacciones(): Observable<Transaccion[]> {
    return this.http.get<Transaccion[]>(`${this.apiUrl}/transacciones`);
  }

  // Obtener una transacción por su ID
  getTransaccion(id: number): Observable<Transaccion> {
    return this.http.get<Transaccion>(`${this.apiUrl}/transacciones/${id}`);
  }

  // Registrar una nueva transacción
  registrarTransaccion(transaccion: Transaccion): Observable<Transaccion> {
    return this.http.post<Transaccion>(`${this.apiUrl}/transacciones`, transaccion);
  }

  // Eliminar una transacción por su ID
  eliminarTransaccion(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/transacciones/${id}`);
  }
}