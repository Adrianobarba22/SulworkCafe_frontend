import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Colaborador, NovoColaborador } from '../models/colaborador.model';


@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {
  private apiUrl = 'http://localhost:8080/api/colaboradores';

  constructor(private http: HttpClient) {}

  salvar(colaborador: NovoColaborador): Observable<Colaborador> {
    return this.http.post<Colaborador>(this.apiUrl, colaborador);
  }

  listar(): Observable<Colaborador[]> {
    return this.http.get<Colaborador[]>(this.apiUrl).pipe(
      catchError((error) => {
        console.error("Erro ao listar colaboradores", error);
        throw new Error("Erro ao listar colaboradores: " + error.message);
      })
    );
  }
}
