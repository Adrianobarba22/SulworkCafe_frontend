export interface Colaborador {
  id?: number;
  nome: string;
  cpf: string;
}

export type NovoColaborador = Omit<Colaborador, 'id'>;
