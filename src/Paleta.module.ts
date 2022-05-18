import { Module } from "@nestjs/common";
import { PaletaController } from "./Paleta.controller";
import { PaletaService } from "./Paleta.service";

@Module({
    controllers:[PaletaController],
    providers:[PaletaService],
})//teste de branch
export class PaletaModule{}