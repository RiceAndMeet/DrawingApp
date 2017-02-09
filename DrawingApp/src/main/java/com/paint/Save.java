package com.paint;

import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.UUID;

import javax.imageio.ImageIO;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import sun.misc.BASE64Decoder;



/**
 * Save images on the server machine , outside of web app root directory
 */
@SuppressWarnings("restriction")
@WebServlet("/saveImage")
public class Save extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	private String data,path,directory;
	private BufferedImage image;
	 
	public void init() throws ServletException{
	      // Do required initialization
	      data= path =null;
	      image =null;
	      
	      //create a directory in the current path to store images
	      File file = new File("");
	      File dir= new File(file.getAbsolutePath()+"/images");
	      dir.mkdir();  
	      directory = dir.getAbsolutePath();
	    	  
	      
	}
	
	public void doGet(HttpServletRequest request, HttpServletResponse response)
	            throws ServletException, IOException
	{
		 //abstract image data 
		 data=request.getParameter("img");
		 data=data.replace("data:image/png;base64,","");
		 data=data.replace(" ", "+");
		 
		 //construct image, turn string into base64 byte code  
		 byte[] imgByte;
		BASE64Decoder decoder = new BASE64Decoder();
		 imgByte = decoder.decodeBuffer(data);
		 ByteArrayInputStream bis = new ByteArrayInputStream(imgByte);
		 image = ImageIO.read(bis);
		 bis.close();
		 
		 //create the images base on current directory 
		 path=directory+ "/"+ UUID.randomUUID()+".png";
		 File file = new File(path);
		 ImageIO.write(image, "png", file);
		 
	     PrintWriter out = response.getWriter();
	     out.println(path);

	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) 
				throws ServletException, IOException {
		doGet(request, response);
	}
}
