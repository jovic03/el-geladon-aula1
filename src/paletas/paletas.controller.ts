import { Controller } from '@nestjs/common';
import { PaletasService } from './paletas.service';

@Controller('paletas')
export class PaletasController {
  constructor(private readonly paletasService: PaletasService) {}
}
