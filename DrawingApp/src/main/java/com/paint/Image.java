package com.paint;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;


@Entity 
@Table(name = "user_drawings")
public class Image {
	
	@NotNull
	@Column (name="image_content")
	private String imageLocation;
	
	@Id
	@Column (name="id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@Column (name="submission_date")
	private Date date ;
	
	public Image(){}
	
	public Image (String imageLocation, Date date){
		this.setDate(date);
		this.imageLocation = imageLocation;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}
	
	public String getImageLocation() {
		return imageLocation;
	}

	public void setImageLocation(String imageLocation) {
		this.imageLocation = imageLocation;
	}

	
}
