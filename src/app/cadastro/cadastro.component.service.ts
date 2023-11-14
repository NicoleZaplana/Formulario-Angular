import { ICadastroMusica } from "../model/Icadastro-musica";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class CadastroService{
    musicas:ICadastroMusica[]=[{
        nome:"watch",
        artista:"Billie Eilish",
        tempo: 3,

    }, {
        nome:"dahlia",
        artista:"(G)idle",
        tempo: 2,
    }]

    adicionar(nomeRecebido:string, artistaRecebido:string, tempoRecebido:number): void{
        const novaMusica:ICadastroMusica={
            nome:nomeRecebido,
            artista: artistaRecebido,
            tempo: tempoRecebido,
        }
        this.musicas.push(novaMusica)
    }
    excluir(index:number):void{
        this.musicas.splice(index, 1)
    }
    editar(index:number, nomeEditado: string, artistaEditado:string, tempoEditado:number):void{
        const editarMusicas: ICadastroMusica={
            nome:nomeEditado,
            artista:artistaEditado,
            tempo:tempoEditado,
        }
        this.musicas[index]=editarMusicas;
    }
    musicaAlterada(index:number):ICadastroMusica{
        return this.musicas[index];
    }
    }
    
 
