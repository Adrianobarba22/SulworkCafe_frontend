export interface ItemCafe {
  id?: number;
  colaboradorId: number;
  descricao: string;
  dataEvento: string; // formato ISO (yyyy-MM-dd)
  entregue?: boolean;
}
