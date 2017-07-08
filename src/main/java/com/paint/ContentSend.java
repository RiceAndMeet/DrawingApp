package com.paint;


public class ContentSend {
	private String content,color;
	private int x, y, height,width,r ,lineWidth;
	private ContentRecieved point1, point2;
	
public ContentSend() {}
	
	public ContentSend (String shape,int x, int y, int height, int width, int lineWidth, String color){
		this.content=shape;
		this.x = x;
		this.y= y;
		this.height = height;
		this.width = width;
		this.lineWidth = lineWidth;
		this.color = color;
	}
	public ContentSend (String shape,int x, int y, int r, int lineWidth, String color){
		this.content=shape;
		this.x = x;
		this.y= y;
		this.r = r;
		this.lineWidth = lineWidth;
		this.color = color;
	}
	public ContentSend (String shape,ContentRecieved point1, ContentRecieved point2, int lineWidth, String color){
		this.content=shape;
		this.point1=point1;
		this.point2=point2;
		this.lineWidth = lineWidth;
		this.color = color;
	}
	
	/*getter and Setter*/
	public ContentRecieved getPoint1() {
		return point1;
	}

	public void setPoint1(ContentRecieved point1) {
		this.point1 = point1;
	}

	public ContentRecieved getPoint2() {
		return point2;
	}

	public void setPoint2(ContentRecieved point2) {
		this.point2 = point2;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public int getR() {
		return r;
	}

	public void setR(int r) {
		this.r = r;
	}

	
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

	
}
