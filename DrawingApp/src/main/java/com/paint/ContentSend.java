package com.paint;

public class ContentSend {
	private String content;
	private int x, y, height,width, lineWidth;
	private String color;
	
	public int getX() {
		return x;
	}

	public void setX(int x) {
		this.x = x;
	}

	public int getY() {
		return y;
	}

	public void setY(int y) {
		this.y = y;
	}

	public int getHeight() {
		return height;
	}

	public void setHeight(int height) {
		this.height = height;
	}

	public int getWidth() {
		return width;
	}

	public void setWidth(int width) {
		this.width = width;
	}

	public int getLineWidth() {
		return lineWidth;
	}

	public void setLineWidth(int lineWidth) {
		this.lineWidth = lineWidth;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}
	
	
	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public ContentSend(String content) {
		this.content = content;
	}
	public ContentSend() {}
	
	public ContentSend (String content,int x, int y, int height, int width, int lineWidth, String color){
		this.content=content;
		this.x = x;
		this.y= y;
		this.height = height;
		this.width = width;
		this.lineWidth = lineWidth;
		this.color = color;
	}
	
}
