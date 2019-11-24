package com.ser515.funmath.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ser515.funmath.model.AnnouncementsModel;
import com.ser515.funmath.services.AnnouncementsService;

@RestController
@RequestMapping("/announcements")
public class AnnouncementController {

	@Autowired
	AnnouncementsService announcementsService;
	
	@PostMapping("/create")
	public void findGradesByID(@RequestBody AnnouncementsModel announcement) {
		announcementsService.addAnnouncement(announcement);;
	}
	
	@GetMapping("/getAll")
	public List<AnnouncementsModel> getAll() {
		return announcementsService.findAll();
	}
}
