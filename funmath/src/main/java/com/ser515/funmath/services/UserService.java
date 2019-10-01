package com.ser515.funmath.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ser515.funmath.model.Users;
import com.ser515.funmath.repository.UserRepository;

/**
 * @author asmig
 *
 */
@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	public List<Users> getAllUsers(){
		List<Users> userList = new ArrayList<>();
		userRepository.findAll().forEach((userList::add));
		return userList;
	}
	public void updateUserRole(Users user) {
		userRepository.save(user);
		
	}
}
