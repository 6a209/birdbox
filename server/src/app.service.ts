import { Inject, Injectable, Post } from '@nestjs/common';
import { Subscribe, Payload, Topic, MqttService } from 'nest-mqtt';

@Injectable()
export class AppService {

  constructor(@Inject(MqttService) private readonly mqttService: MqttService) {}
  getHello(): string {
    return 'Hello World!';
  }

  @Subscribe('test')
  test(@Payload() payload) {
    console.log("subscribe")
    console.log(payload)
  }

  @Post() 
  publish() : string {
    this.mqttService.publish('play', {play: "on"});
    return 'publish'
  }
}
