package com.paint;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class SocketController {
    @MessageMapping("/hello")
    @SendTo("/info/greetings")
    public ContentSend greeting(ContentRecieved message) throws Exception {

        return new ContentSend("Hello, " + message.getColor()+ "!",message.getX(),
        message.getY(),message.getHeight(),message.getWidth(),message.getLineWidth(),message.getColor());
    }

}