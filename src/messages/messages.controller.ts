import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { createMessageDto } from './DTOs/create-message.dto';
import { MessagessService } from './messages.service';

@Controller('messages')
export class MessagesController {
    messageService: MessagessService;
    constructor(){
        this.messageService = new MessagessService();
    }
    @Get()
    listMessages() {
        return this.messageService.findAll();
    }

    @Post()
    createMessage(@Body() body: createMessageDto) {
       return this.messageService.create(body.content);
    }

    @Get('/:id')
    getMessage(@Param('id') id: string) {
        return this.messageService.findOne(id);

    }
}
