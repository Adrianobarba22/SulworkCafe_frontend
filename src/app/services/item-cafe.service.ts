import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ItemCafeService {
  private readonly API = '/api/itens-cafe'; // Agora usando proxy

  constructor(private http: HttpClient) {}

  salvar(item: any): Observable<any> {
    return this.http.post(this.API, item);
  }

  listar(): Observable<any[]> {
    return this.http.get<any[]>(this.API);
  }
}
