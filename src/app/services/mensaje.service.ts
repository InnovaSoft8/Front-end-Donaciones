import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mensaje } from '../models/mensaje';
import { Donante } from '../models/donante';
import { Receptor } from '../models/receptor';

@Injectable({
  providedIn: 'root',
})
export class MensajeService {
  private apiUrl = 'http://localhost:8080/mensajes'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  // Obtener todos los mensajes
  getMensajes(): Observable<Mensaje[]> {
    return this.http.get<Mensaje[]>(this.apiUrl);
  }

  // Obtener un mensaje por su ID
  getMensaje(id: number): Observable<Mensaje> {
    return this.http.get<Mensaje>(`${this.apiUrl}${id}`);
  }

  // Registrar un nuevo mensaje
  registrarMensaje(mensaje: Mensaje): Observable<Mensaje> {
    return this.http.post<Mensaje>(this.apiUrl, mensaje);
  }

  // Eliminar un mensaje por su ID
  eliminarMensaje(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}`);
  }

  getDonante(): Observable<Donante[]> {
    const url = 'http://localhost:8080/donantes'; // Replace with your API URL for getting countries
    return this.http.get<Donante[]>(url);
  }

  getReceptor(): Observable<Receptor[]> {
    const url = 'http://localhost:8080/receptores'; // Replace with your API URL for getting countries
    return this.http.get<Receptor[]>(url);
  }

}
