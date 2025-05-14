import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagessService } from './messages.service';
import { MessagessRepository } from './messages.repository';

@Module({
  controllers: [MessagesController],
  providers:[MessagessService,MessagessRepository]
})
export class MessagesModule {}
