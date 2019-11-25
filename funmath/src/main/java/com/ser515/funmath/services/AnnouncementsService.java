package com.ser515.funmath.services;

import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.ser515.funmath.model.AnnouncementsModel;
import com.ser515.funmath.repositories.AnnouncementRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;

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
	
	public List<AnnouncementsModel> findAnnouncementsByClass(int classNumber) {
		if (announcementRepository.findByClassNumber(classNumber).isEmpty()) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find announcement for class:" + classNumber);
		}
		return announcementRepository.findByClassNumber(classNumber);
	}
}