package com.ser515.funmath.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.ser515.funmath.model.Users;
import com.ser515.funmath.services.UserService;


/**
 * @author asmig
 *
 */
@RestController
@RequestMapping("/funmath")
public class UserController {

	@Autowired
	UserService userService;


    private static final String PATH = "/error";

    @RequestMapping(value = PATH)
    public String error() {
        return "Error handling";
    }

	@RequestMapping(path="/getAllUsers/",method=RequestMethod.GET)	
	public List<Users> getAllUsers(){
		return userService.getAllUsers();
	}
	
	@RequestMapping(path="/updateUserRole/",method=RequestMethod.PUT)	
	public void updateUserRole(@RequestBody Users user){
		userService.updateUserRole(user);
	}
	@RequestMapping(path="/login/",method=RequestMethod.POST)	
	public @ResponseBody Users validateLogin(String username, String password){
		return userService.login(username, password);
	}

}