package com.ser515.funmath.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name = "annoucements")
public class AnnouncementsModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "announcement_id")
	private int announcementId;
	
	@Column(name = "announcement_text")
	private String announcementText;
	
	@Column(name = "class_number")
	private int classNumber;
	
	public AnnouncementsModel() {
		
	}
	
	public AnnouncementsModel(int announcementId, String announcementText, int classNumber) {
		super();
		this.announcementId = announcementId;
		this.announcementText = announcementText;
		this.classNumber = classNumber;
	}

	public int getAnnouncementId() {
		return announcementId;
	}

	public void setAnnouncementId(int announcementId) {
		this.announcementId = announcementId;
	}

	public String getAnnouncementText() {
		return announcementText;
	}

	public void setAnnouncementText(String announcementText) {
		this.announcementText = announcementText;
	}

	public int getClassNumber() {
		return classNumber;
	}

	public void setClassNumber(int classNumber) {
		this.classNumber = classNumber;
	}
	

}
