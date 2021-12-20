import { Cliente } from 'app/models/clientes'
import { Produto } from '../produtos'

export interface Venda {
    cliente?: Cliente;
    items?: Array<ItemVenda>;
    formaPagamento?: string;
    total: number;
}

export interface ItemVenda {
    produto: Produto;
    quantidade: number;
}