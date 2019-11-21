package com.ser515.funmath.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ser515.funmath.model.SubmittedAssignments;

public interface SubmittedAssignmentsRepository extends JpaRepository<SubmittedAssignments, Integer> {
	

}
