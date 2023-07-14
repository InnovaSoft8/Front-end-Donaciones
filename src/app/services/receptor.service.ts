import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Receptor } from '../models/receptor';
import { Pais } from '../models/pais';

@Injectable({
  providedIn: 'root'
})
export class ReceptorService {
  private apiUrl = 'http://localhost:8080/receptores'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  getReceptores(): Observable<Receptor[]> {
    return this.http.get<Receptor[]>(this.apiUrl);
  }

  registrarReceptor(receptor: Receptor): Observable<any> {
    return this.http.post(this.apiUrl, receptor);
  }

  eliminarReceptor(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

  getPaises(): Observable<Pais[]> {
    const url = 'http://localhost:8080/paises'; // Replace with your API URL for getting countries
    return this.http.get<Pais[]>(url);
  }

  modificarReceptor(id: number, receptor: Receptor): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, receptor);
  }
}