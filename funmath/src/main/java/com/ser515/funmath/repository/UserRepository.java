package com.ser515.funmath.repository;

import org.springframework.data.repository.CrudRepository;

import com.ser515.funmath.model.Users;

/**
 * @author asmig
 *
 */
public interface UserRepository extends CrudRepository<Users, Integer> {
	
}
