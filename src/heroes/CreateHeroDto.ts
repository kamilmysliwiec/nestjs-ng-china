import {IsNotEmpty} from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateHeroDto {
  @IsNotEmpty()
  @ApiModelProperty()
  name: string;
}
