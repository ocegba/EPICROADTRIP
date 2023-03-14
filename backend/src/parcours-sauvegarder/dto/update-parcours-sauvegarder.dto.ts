import { PartialType } from '@nestjs/mapped-types';
import { CreateParcoursSauvegarderDto } from './create-parcours-sauvegarder.dto';

export class UpdateParcoursSauvegarderDto extends PartialType(CreateParcoursSauvegarderDto) {}
