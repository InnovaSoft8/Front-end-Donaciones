import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comentario } from '../models/comentario';
import { Proyecto } from '../models/proyecto';
import { Donante } from '../models/donante';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  private apiUrl = 'http://localhost:8080/comentarios'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  // Obtener todos los comentarios
  getComentarios(): Observable<Comentario[]> {
    return this.http.get<Comentario[]>(this.apiUrl);
  }

  // Obtener un comentario por su ID
  getComentario(id: number): Observable<Comentario> {
    return this.http.get<Comentario>(`${this.apiUrl}${id}`);
  }

  // Registrar un nuevo comentario
  registrarComentario(comentario: Comentario): Observable<Comentario> {
    return this.http.post<Comentario>(this.apiUrl, comentario);
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
    return this.http.delete<void>(`${this.apiUrl}${id}`);
  }

  getProyecto(): Observable<Proyecto[]> {
    const url = 'http://localhost:8080/proyectos'; // Replace with your API URL for getting countries
    return this.http.get<Proyecto[]>(url);
  }

  getDonante(): Observable<Donante[]> {
    const url = 'http://localhost:8080/donantes'; // Replace with your API URL for getting countries
    return this.http.get<Donante[]>(url);
  }

}