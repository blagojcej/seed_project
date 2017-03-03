/**
 * Created by Blagojce on 04.1.2017.
 */

export class Message{
    //Content of the message
    content: string;

    //Author of the message - username logged in
    username: string;

    //ID of the message - because two or more messages could have the same content
    messageId?: string;

    //ID of the username - because two or more authors could have the same name
    userId?: string;

    constructor(content: string, username: string, messageId?: string, userId?: string){
        this.content=content;
        this.username=username;
        this.messageId=messageId;
        this.userId=userId;
    }
}