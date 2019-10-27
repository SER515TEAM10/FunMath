package com.ser515.funmath.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ser515.funmath.model.Users;
import com.ser515.funmath.services.UserService;

@RestController
@RequestMapping("/user/")
public class UserController {
	
	@Autowired
	UserService userService;
	
	@GetMapping("/getAll")
	public List<Users> getAll(){
		return userService.findAll();
	}
	@GetMapping("/getCount")
	public Long getCount(){
		return userService.getCount();
	}
	
	@GetMapping("/search/{id}")
	public Users findUserById(@PathVariable Integer id) {
		return userService.findUserById(id);
	}
	
	@PostMapping("/register")
	public Users saveUser(@RequestBody Users user) {
		return userService.saveUser(user);
	}
	@DeleteMapping("/remove/{id}")
	public void removeUser(@PathVariable Integer id) {
		userService.removeUser(id);
		
	}
	
}
