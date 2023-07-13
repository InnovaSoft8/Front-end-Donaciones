import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mensaje } from '../models/mensaje';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {
  private apiUrl = 'http://localhost:8080/mensajes'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  // Obtener todos los mensajes
  getMensajes(): Observable<Mensaje[]> {
    return this.http.get<Mensaje[]>(`${this.apiUrl}/mensajes`);
  }

  // Obtener un mensaje por su ID
  getMensaje(id: number): Observable<Mensaje> {
    return this.http.get<Mensaje>(`${this.apiUrl}/mensajes/${id}`);
  }

  // Registrar un nuevo mensaje
  registrarMensaje(mensaje: Mensaje): Observable<Mensaje> {
    return this.http.post<Mensaje>(`${this.apiUrl}/mensajes`, mensaje);
  }

  // Eliminar un mensaje por su ID
  eliminarMensaje(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/mensajes/${id}`);
  }
}