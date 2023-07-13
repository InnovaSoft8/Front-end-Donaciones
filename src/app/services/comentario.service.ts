import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comentario } from '../models/comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  private apiUrl = 'http://localhost:8080/comentarios'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  // Obtener todos los comentarios
  getComentarios(): Observable<Comentario[]> {
    return this.http.get<Comentario[]>(`${this.apiUrl}/comentarios`);
  }

  // Obtener un comentario por su ID
  getComentario(id: number): Observable<Comentario> {
    return this.http.get<Comentario>(`${this.apiUrl}/comentarios/${id}`);
  }

  // Registrar un nuevo comentario
  registrarComentario(comentario: Comentario): Observable<Comentario> {
    return this.http.post<Comentario>(`${this.apiUrl}/comentarios`, comentario);
  }

  // Actualizar un comentario existente
  actualizarComentario(comentario: Comentario): Observable<Comentario> {
    return this.http.put<Comentario>(
      `${this.apiUrl}/comentarios/${comentario.idComentario}`,
      comentario
    );
  }

  // Eliminar un comentario por su ID
  eliminarComentario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/comentarios/${id}`);
  }
}