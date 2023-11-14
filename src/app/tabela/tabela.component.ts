import { Component } from '@angular/core';
import { CadastroService } from '../cadastro/cadastro.component.service';
import { ICadastroMusica } from '../model/Icadastro-musica';
import { IHistoricoItem} from '../model/Ihistorico-item';
import { HistoricoService } from '../historico.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent {
  cadastroMusica!:string;
  listaMusica!:ICadastroMusica[];
  tempoDeMusica!:number;
  artistaDaMusica!:string;
  editarIndex:number=-1
  listaHistorico!: IHistoricoItem[];
  constructor(private cadastroService:CadastroService, public historicoService:HistoricoService  ){
    this.listaMusica= this.cadastroService.musicas
    this.listaHistorico=this.historicoService.historicos
  }
  adiconarNovaMusica():void{
      this.cadastroService.adicionar(this.cadastroMusica, this.artistaDaMusica, this.tempoDeMusica)
    
  }
  excluirMusica(index:number): void {
    this.cadastroService.excluir(index)
    const detalhes=`Música excluída: ${this.listaMusica[index].nome}`
    this.historicoService.adicionarDetalheExcluir(detalhes)
  }
  editarMusica(index: number ):void{
    this.editarIndex=index;
    const musicaEditada=this.cadastroService.musicaAlterada(index)
    this.cadastroMusica=musicaEditada.nome
    this.artistaDaMusica=musicaEditada.artista
    this.tempoDeMusica=musicaEditada.tempo

    const detalhes=`Música editada: ${this.listaMusica[index].nome}`
    this.historicoService.adicionarDetalheEditar(detalhes)
  }
  salvarEdicao():void{
    this.cadastroService.editar(this.editarIndex, this.cadastroMusica, this.artistaDaMusica, this.tempoDeMusica)
    this.cancelarEdicao();
  }
  cancelarEdicao():void{
    this.editarIndex=-1
    this.cadastroMusica=''
    this.artistaDaMusica=''
    this.tempoDeMusica=0
  }
  limparHistorico():void{
    this.historicoService.limparHistorico();
  } 


}

