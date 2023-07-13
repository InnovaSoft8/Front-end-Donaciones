import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductoDonado } from '../models/producto-donado';

@Injectable({
  providedIn: 'root'
})
export class ProductoDonadoService {
  private apiUrl = 'http://localhost:8080/productos-donados'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  // Obtener todos los productos donados
  getProductosDonados(): Observable<ProductoDonado[]> {
    return this.http.get<ProductoDonado[]>(`${this.apiUrl}/productos-donados`);
  }

  // Obtener un producto donado por su ID
  getProductoDonado(id: number): Observable<ProductoDonado> {
    return this.http.get<ProductoDonado>(`${this.apiUrl}/productos-donados/${id}`);
  }

  // Registrar un nuevo producto donado
  registrarProductoDonado(productoDonado: ProductoDonado): Observable<ProductoDonado> {
    return this.http.post<ProductoDonado>(`${this.apiUrl}/productos-donados`, productoDonado);
  }

  // Eliminar un producto donado por su ID
  eliminarProductoDonado(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/productos-donados/${id}`);
  }
}