package com.ser515.funmath.services;

import org.springframework.stereotype.Service;

import com.ser515.funmath.model.AnnouncementsModel;
import com.ser515.funmath.repositories.AnnouncementRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

@Service
public class AnnouncementsService {
	
	@Autowired
	AnnouncementRepository announcementRepository;
	
	public void addAnnouncement(AnnouncementsModel announcement) {
		announcementRepository.save(announcement);		
	}
	
	public List<AnnouncementsModel> findAll() {
		return announcementRepository.findAll();
	}
}