package com.paint;

import java.io.*;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Send and download image to client
 */
@WebServlet("/ImageDisplay")
public class ImageDisplay extends HttpServlet {
	private static final long serialVersionUID = 1L;
       

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		 //send response to the server 
		 String filepath = request.getParameter("filepath");
		if (filepath != null){	
			 String rootdir=request.getServletContext().getRealPath("/");
		 	 FileInputStream file = new FileInputStream(rootdir+filepath);
			 response.setContentType("image/png");
			 response.addHeader("Content-Disposition", "attachment; filename="+filepath.substring(6));
			 
			 BufferedInputStream in = new BufferedInputStream(file);
			 BufferedOutputStream out = new BufferedOutputStream(response.getOutputStream());
			 
			 int count = 0;
			 while ((count=in.read())!=-1){
				 out.write(count);
			 }
			 
			 in.close();
			 out.close();
			 file.close();
		}
		else {
			PrintWriter out = response.getWriter();
		     out.println("<html><body><h1>");
		     out.println("ERROR FilePath is Empty");
		     out.println("</h1></body></html>");
	
		}
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
