import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evento } from '../models/evento';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  private apiUrl = 'http://localhost:8080/desastres/eventos'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  // Obtener todos los eventos
  getEventos(): Observable<Evento[]> {
    return this.http.get<Evento[]>(`${this.apiUrl}/eventos`);
  }

  // Obtener un evento por su ID
  getEvento(id: number): Observable<Evento> {
    return this.http.get<Evento>(`${this.apiUrl}/eventos/${id}`);
  }

  // Registrar un nuevo evento
  registrarEvento(evento: Evento): Observable<Evento> {
    return this.http.post<Evento>(`${this.apiUrl}/eventos`, evento);
  }

  // Eliminar un evento por su ID
  eliminarEvento(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/eventos/${id}`);
  }
}