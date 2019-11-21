package com.ser515.funmath.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ser515.funmath.model.Assignment;

public interface AssignmentRepository extends JpaRepository<Assignment,Integer> {
	
	List<Assignment> findAllByClassNumber(int classNumber);

}
