package com.ser515.funmath.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import com.ser515.funmath.repositories.SubmittedAssignmentsRepository;
import com.ser515.funmath.model.SubmittedAssignments;

@Service
public class SubmitAssignmentService {
	
	@Autowired
	private SubmittedAssignmentsRepository submittedAssignmentsRepository;

	public List<SubmittedAssignments> findGrades(String studentEmail) {
		if (submittedAssignmentsRepository.findByStudentEmail(studentEmail).isEmpty()) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find user with given id:" + studentEmail);
		}
		return submittedAssignmentsRepository.findByStudentEmail(studentEmail);
	}
}