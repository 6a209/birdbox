import { Module } from '@nestjs/common';
import { BindService } from './bind.service';
import { BindController } from './bind.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bind } from './entities/bind.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Bind])],
  controllers: [BindController],
  providers: [BindService]
})
export class BindModule {}
