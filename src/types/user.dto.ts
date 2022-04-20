/* eslint-disable prettier/prettier */
import { ApiPropertyOptional } from '@nestjs/swagger';

export class CreateCatDto {
  @ApiPropertyOptional({
    description: 'provinsi object id',
  })
  name: string;
  age: number;
  breed: string;
}