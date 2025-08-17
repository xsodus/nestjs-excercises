import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { MessageFormatter } from './message-formatter';
import { LoggerService } from './logger.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, MessageFormatter, LoggerService],
})
export class AppModule {}
