package com.ser515.funmath.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ser515.funmath.model.Users;

@Repository
public interface UserRepository extends JpaRepository<Users,Integer> {
	
}
