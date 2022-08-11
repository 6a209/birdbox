import { PartialType } from '@nestjs/mapped-types';
import { CreateBindDto } from './create-bind.dto';

export class UpdateBindDto extends PartialType(CreateBindDto) {}
