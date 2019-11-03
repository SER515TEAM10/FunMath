package com.ser515.funmath.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.ser515.funmath.model.Users;
import com.ser515.funmath.repositories.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

	public List<Users> getAllUsers() {
		List<Users> userList = new ArrayList<>();
		userRepository.findAll().forEach((userList::add));
		return userList;
	}

	public void updateUserRole(Users user) {
		userRepository.save(user);
	}

	public List<Users> findAll() {
		return userRepository.findAll();
	}

	public Long getCount() {
		return userRepository.count();
	}

	public Users saveUser(Users user) {
		try {
			return userRepository.saveAndFlush(user);

		} catch (Exception ex) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND,
					"Unable to add users at the moment, please try after sometime:" + ex.getMessage());
		}
	}

	public Users login(String emailID, String password) {
		Users user = userRepository.findByEmailId(emailID);
		if (user == null) {
			throw new UsernameNotFoundException("Username not found!");
		} else {
			if (encoder.matches(password, user.getPassword())) {
				return user;
			} else {

				throw new BadCredentialsException("Password is incorrect!");
			}
		}
	}

	public Users findUserById(int id) {
		System.out.println(id);
		Optional<Users> user = userRepository.findById(id);
		if (user.isPresent()) {
			return user.get();
		}
		throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find user with given id:" + id);
	}

	public void removeUser(int id) {
		try {
			userRepository.deleteById(id);
		} catch (Exception ex) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND,
					"Unable to remove user with id:" + id + " - Error:" + ex.getMessage());
		}

	}
}
