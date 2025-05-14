import { MessagessRepository } from "./messages.repository";
export class MessagessService {
    messageRepo: MessagessRepository;
    constructor() {

        this.messageRepo = new MessagessRepository();
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