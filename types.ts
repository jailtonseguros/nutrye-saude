export interface Produto {
  id: string;
  nome: string;
  categoria: string;
  descricao: string;
  beneficio: string;
  linkMercadoLivre: string;
  imagem: string;
  detalhes?: string;
}

export interface Mensagem {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}
