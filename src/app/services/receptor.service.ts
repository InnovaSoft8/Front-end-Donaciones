import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Receptor } from '../models/receptor';

@Injectable({
  providedIn: 'root'
})
export class ReceptorService {
  private apiUrl = 'http://localhost:8080/receptores'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  // Obtener todos los receptores
  getReceptores(): Observable<Receptor[]> {
    return this.http.get<Receptor[]>(`${this.apiUrl}/receptores`);
  }

  // Obtener un receptor por su ID
  getReceptor(id: number): Observable<Receptor> {
    return this.http.get<Receptor>(`${this.apiUrl}/receptores/${id}`);
  }

  // Registrar un nuevo receptor
  registrarReceptor(receptor: Receptor): Observable<Receptor> {
    return this.http.post<Receptor>(`${this.apiUrl}/receptores`, receptor);
  }

  // Eliminar un receptor por su ID
  eliminarReceptor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/receptores/${id}`);
  }
}