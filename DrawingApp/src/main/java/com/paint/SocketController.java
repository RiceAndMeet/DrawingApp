package com.paint;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class SocketController {
    @MessageMapping("/rectangle")
    @SendTo("/info/greetings")
    public ContentSend greeting(ContentRecieved message) throws Exception {
    	if (message.getShape().equals("rectangle")){
    		return new ContentSend(message.getShape(),message.getX(),
    		message.getY(),message.getHeight(),message.getWidth(),message.getLineWidth(),message.getColor());
    	}
    	else if (message.getShape().equals("circle")){
    		return new ContentSend("circle",message.getX(),
    		message.getY(),message.getR(),message.getLineWidth(),message.getColor());
    	}
    	else if (message.getShape().equals("line")){
    		return new ContentSend("line",message.getPoint1(), message.getPoint2(),
    				message.getLineWidth(),message.getColor());
    	}
    	else if (message.getShape().equals("brush")){
    		return new ContentSend("brush",message.getPoint1(), message.getPoint2(),
    				message.getLineWidth(),message.getColor());
    	}
    	return null;
    }


}