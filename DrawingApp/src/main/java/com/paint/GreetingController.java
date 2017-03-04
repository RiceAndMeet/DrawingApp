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

@SuppressWarnings("restriction")
@RestController
public class GreetingController{

    @Autowired
    private ServletContext servletContext;
    @Autowired
    private UserDAO userDao;
    
    @RequestMapping(value ="/greeting", method= RequestMethod.POST)
    public Image greeting(@RequestParam(value="img") String data){
    	if (data != null){
	    	data=data.replace("data:image/png;base64,","");
			data=data.replace(" ", "+");
			byte[] imgByte;
			
			BASE64Decoder decoder = new BASE64Decoder();
			try {
				imgByte = decoder.decodeBuffer(data);
			} catch (IOException e) { System.out.println("Bad Image"); return null;}
			
			ByteArrayInputStream bis = new ByteArrayInputStream(imgByte);
			BufferedImage image;
			try {
				image = ImageIO.read(bis);
			} catch (IOException e1) {System.out.println("Can't Read image"); return null;}
			
			try {
				bis.close();
			} catch (IOException e1) {System.out.println( "Can't Close the file Stream"); return null;}
			
			 //setting up the path 
			 String realPath = servletContext.getRealPath("/");
			 String imageName="images/"+UUID.randomUUID()+".png";
			 File file = new File(realPath+imageName);
			 
			 // Insert image info into database 
			java.util.Date dateobj = new java.util.Date();
			java.sql.Date sqlDate = new java.sql.Date (dateobj.getTime());
			 Image database_image = new Image (imageName,sqlDate);
			 userDao.save(database_image);
			 
			try {
				ImageIO.write(image, "png", file);
			} catch (IOException e) {System.out.println("Problem Writing Image file"); return null;}

			return database_image; 
    	} 
    	else {
    		System.out.println( "Image Data NULL");
    		return null;
    	}

    }
    
    
 
}