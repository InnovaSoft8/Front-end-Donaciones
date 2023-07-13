import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TransaccionInternacional } from '../models/transaccion-internacional';

@Injectable({
  providedIn: 'root'
})
export class TransaccionInternacionalService {
  private apiUrl = 'http://localhost:8080/transacciones-internacionales'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  // Obtener todas las transacciones internacionales
  getTransaccionesInternacionales(): Observable<TransaccionInternacional[]> {
    return this.http.get<TransaccionInternacional[]>(`${this.apiUrl}/transacciones-internacionales`);
  }

  // Obtener una transacción internacional por su ID
  getTransaccionInternacional(id: number): Observable<TransaccionInternacional> {
    return this.http.get<TransaccionInternacional>(`${this.apiUrl}/transacciones-internacionales/${id}`);
  }

  // Registrar una nueva transacción internacional
  registrarTransaccionInternacional(transaccion: TransaccionInternacional): Observable<TransaccionInternacional> {
    return this.http.post<TransaccionInternacional>(`${this.apiUrl}/transacciones-internacionales`, transaccion);
  }

  // Eliminar una transacción internacional por su ID
  eliminarTransaccionInternacional(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/transacciones-internacionales/${id}`);
  }
}



