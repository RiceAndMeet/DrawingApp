package com.paint;

public class ContentRecieved {
	private String content;
	
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public ContentRecieved(){
		this.content = "default message";
	}
	public ContentRecieved (String content){
		this.content=content;
	}
}
