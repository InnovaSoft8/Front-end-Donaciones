import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Donante } from '../models/donante';
import { Pais } from '../models/pais';

@Injectable({
  providedIn: 'root'
})
export class DonanteService {
  private apiUrl = 'http://localhost:8080/donantes'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getDonantes(): Observable<Donante[]> {
    return this.http.get<Donante[]>(this.apiUrl);
  }

  registrarDonante(donante: Donante): Observable<any> {
    return this.http.post(this.apiUrl, donante);
  }

  eliminarDonante(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

  getPaises(): Observable<Pais[]> {
    const url = 'http://localhost:8080/paises'; // Replace with your API URL for getting countries
    return this.http.get<Pais[]>(url);
  }
}
