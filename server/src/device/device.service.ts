import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { Device } from './entities/device.entity';

@Injectable()
export class DeviceService {

  constructor(
    @InjectRepository(Device) private deviceRespository: Repository<Device>,
  ) {}


  create(createDeviceDto: CreateDeviceDto) {
    return this.deviceRespository.save(createDeviceDto);
  }

  findAll() {
    return `This action returns all device`;
  }

  findOne(id: number) {
    return this.deviceRespository.findOneBy({ id });
  }

  update(id: number, updateDeviceDto: UpdateDeviceDto) {
    return this.deviceRespository.update(id, updateDeviceDto);
  }

  remove(id: number) {
    // return this.deviceRespository.remove();
  }

  play(id: number) {
  }
}
