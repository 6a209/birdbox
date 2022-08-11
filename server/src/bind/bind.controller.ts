import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BindService } from './bind.service';
import { CreateBindDto } from './dto/create-bind.dto';
import { UpdateBindDto } from './dto/update-bind.dto';

@Controller('bind')
export class BindController {
  constructor(private readonly bindService: BindService) {}

  @Post()
  create(@Body() createBindDto: CreateBindDto) {
    return this.bindService.create(createBindDto);
  }

  @Get(':uid')
  getAllByUid(@Param('uid') id: number) {
    return this.bindService.findAllByUid(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.bindService.removeByDeviceId(+id);
  }
}
