package com.ser515.funmath.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;

import com.ser515.funmath.model.Users;
import com.ser515.funmath.services.UserService;

@RestController
@RequestMapping("/user/")
public class UserController {
	
	@Autowired
	UserService userService;
  	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
      private static final String PATH = "/error";
	
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
	
	 @RequestMapping(value = PATH)
    public String error() {
        return "Error handling";
    }

    
    @PostMapping("/register")
	public Users saveUser(@RequestBody Users user) {
    	String pwd= user.getPassword();
    	String encryptPwd = passwordEncoder.encode(pwd);
    	user.setPassword(encryptPwd);
		return userService.saveUser(user);
	}
  
	@RequestMapping(path="/getAllUsers/",method=RequestMethod.GET)	
	public List<Users> getAllUsers(){
		return userService.getAllUsers();
	}

	
	@RequestMapping(path="/updateUserRole/",method=RequestMethod.PUT)	
	public void updateUserRole(@RequestBody Users user){
		userService.updateUserRole(user);
	}
	
/*
    Send JSON like:
	{
		"username": "abc@xyz.com",
		"password": "password"
	}
*/
	@RequestMapping(path="/login/",method=RequestMethod.POST)	
	public @ResponseBody Users validateLogin(@RequestBody Map<String, String> json){
		return userService.login(json.get("username"), json.get("password"));
	}

}

	@DeleteMapping("/remove/{id}")
	public void removeUser(@PathVariable Integer id) {
		userService.removeUser(id);
		
	}
	
}

