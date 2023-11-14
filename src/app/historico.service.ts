import { Injectable } from '@angular/core';
import { IHistoricoItem } from './model/Ihistorico-item';

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {
  historicos:IHistoricoItem[]=[]

  adicionarDetalheExcluir(detalhes: string): void {
    const item: IHistoricoItem = this.itemHistorico("Exclusão", detalhes)
    this.historicos.push(item);
  }

  adicionarDetalheEditar(detalhes: string): void {
    const item: IHistoricoItem = this.itemHistorico("Edição", detalhes)
    this.historicos.push(item);
  }

  limparHistorico(): void {
    this.historicos = []
  }

  private itemHistorico(config: string, detalhes: string): IHistoricoItem {
    const agora = new Date();
    return {
      data: agora.toLocaleDateString(),
      hora: agora.toLocaleTimeString(),
      config: config,
      detalhes: detalhes,
    }
}
}

