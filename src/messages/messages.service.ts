import { MessagessRepository } from "./messages.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MessagessService {

    constructor(public messageRepo : MessagessRepository) {


    }

    findOne(id:string){
        return this.messageRepo.findOne(id);
    }

    findAll(){
        return this.messageRepo.findAll();
    }

    create(content: string){
        return this.messageRepo.create(content);
    }
}