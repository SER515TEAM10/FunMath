package com.ser515.funmath.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ser515.funmath.model.Users;
import com.ser515.funmath.services.UserService;


/**
 * @author asmig
 *
 */
@RestController
public class UserController {
	
	@Autowired
	UserService userService;
	
	
	@RequestMapping(path="/getAllUsers/",method=RequestMethod.GET)	
	public List<Users> getAllUsers(){
		return userService.getAllUsers();
	}
	@RequestMapping(path="/updateUserRole/",method=RequestMethod.PUT)	
	public void updateUserRole(@RequestBody Users user){
		userService.updateUserRole(user);
	}
	
}
