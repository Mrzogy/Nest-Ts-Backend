import { readFile, writeFile } from "fs/promises";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MessagessRepository {
    async findOne(id: string) {
        const content = await readFile('messages.json', 'utf-8');
        const messages = JSON.parse(content);
        return messages[id];
    }

    async findAll() {
        const content = await readFile('messages.json', 'utf-8');
        const messages = JSON.parse(content);
        return messages
    }

    async create(content: string) {
        const contents = await readFile('messages.json', 'utf-8');
        const messages = JSON.parse(contents);
        const id = Math.floor(Math.random() * 999)
        messages[id] = { id, content: content }

        await writeFile('messages.json', JSON.stringify(messages));
    }
}