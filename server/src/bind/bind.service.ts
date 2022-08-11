import { Injectable } from '@nestjs/common';
import { CreateBindDto } from './dto/create-bind.dto';
import { UpdateBindDto } from './dto/update-bind.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Bind } from './entities/bind.entity';

@Injectable()
export class BindService {

  constructor(
    @InjectRepository(Bind) private bindRespository: Repository<Bind>,
  ) {}


  create(createBindDto: CreateBindDto) {
    return this.bindRespository.save(createBindDto);
  }

  findAllByUid(uid: number) {
    return this.bindRespository.findBy({ uid: uid });
  }

  removeByDeviceId(deviceId: number) {
    return this.bindRespository.delete({ deviceId });
  }
}
