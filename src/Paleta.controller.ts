import { Controller, Get } from "@nestjs/common";
import { PaletaService } from "./Paleta.service";

@Controller('paletas')
export class PaletaController{

    constructor(private paletaService: PaletaService){//só pode ser chamado dentro paletaController

    }

    @Get()
    findAll():string[]{
        return this.paletaService.findAll();
    }
}