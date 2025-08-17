import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { MessageFormatter } from './message-formatter';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, MessageFormatter],
})
export class AppModule {}
