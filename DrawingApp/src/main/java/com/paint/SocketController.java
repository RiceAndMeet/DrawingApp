package com.paint;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class SocketController {


    @MessageMapping("/hello")
    @SendTo("/info/greetings")
    public ContentSend greeting(ContentRecieved message) throws Exception {
        Thread.sleep(1000); // simulated delay
        return new ContentSend("Hello, " + message.getContent() + "!");
    }

}