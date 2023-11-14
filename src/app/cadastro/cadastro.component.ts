import { Component } from '@angular/core';
import { CadastroService } from './cadastro.component.service';
import { ICadastroMusica } from '../model/Icadastro-musica';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent {
  cadastroMusica!:string;
  listaMusica!:ICadastroMusica[];
  tempoDeMusica!:number;
  artistaDaMusica!:string;
  constructor(private cadastroService:CadastroService){
    this.listaMusica= this.cadastroService.musicas
  }
  adiconarNovaMusica():void{
      this.cadastroService.adicionar(this.cadastroMusica, this.artistaDaMusica, this.tempoDeMusica)
  }

 
}