import { Injectable } from '@nestjs/common';
import { MessageFormatter } from './message-formatter';

@Injectable()
export class AppService {
  constructor(private readonly formatter: MessageFormatter) {}

  getHello(): string {
    return this.formatter.fomat('Hello World!');
  }
}
