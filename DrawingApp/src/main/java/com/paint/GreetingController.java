package com.paint;

import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;
import java.util.UUID;

import javax.imageio.ImageIO;
import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import sun.misc.BASE64Decoder;

@RestController
public class GreetingController{

    @Autowired
    ServletContext servletContext;
    
    @SuppressWarnings("restriction")
	@RequestMapping(value ="/greeting", method= RequestMethod.POST)
    public String greeting(@RequestParam(value="img") String data){
    	if (data != null){
	    	data=data.replace("data:image/png;base64,","");
			data=data.replace(" ", "+");
			byte[] imgByte;
			
			BASE64Decoder decoder = new BASE64Decoder();
			try {
				imgByte = decoder.decodeBuffer(data);
			} catch (IOException e) {
				return "Bad Image";
			}
			ByteArrayInputStream bis = new ByteArrayInputStream(imgByte);
			BufferedImage image;
			try {
				image = ImageIO.read(bis);
			} catch (IOException e1) {
				return "Can't Read image";
			}
			try {
				bis.close();
			} catch (IOException e1) {
				return "Can't Close the file Stream";
			}
		
			 String realPath = servletContext.getRealPath("/");
			 String imageName="images/"+UUID.randomUUID()+".png";
			 File file = new File(realPath+imageName);
			 
			 try {
				ImageIO.write(image, "png", file);
			} catch (IOException e) {
					return "Problem Writing Image file";
			}

			 return imageName; 
    	} 
    	else {
    		return "Image Data NULL";
    	}
    }
    
    
 
}