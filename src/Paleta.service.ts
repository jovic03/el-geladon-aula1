import { Injectable } from "@nestjs/common";

@Injectable()
export class PaletaService{
    paletas:string[]= ['Morango','Doce de Leite','Nutella'];//aqui nao tem const/let pois aqui é uma propriedade da classe e o findAll seria um metodo

    findAll():string[]{
        return this.paletas;
    }
}