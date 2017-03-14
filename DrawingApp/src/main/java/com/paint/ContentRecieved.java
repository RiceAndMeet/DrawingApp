package com.paint;

public class ContentRecieved {
	private String shape;
	private int x, y, height,width,r,lineWidth;
	private ContentRecieved point1,point2;
	
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
	public int getR() {
		return r;
	}
	public void setR(int r) {
		this.r = r;
	}
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
	

	public String getShape() {
		return shape;
	}
	public void setShape(String shape) {
		this.shape = shape;
	}

	public ContentRecieved(){}
}
