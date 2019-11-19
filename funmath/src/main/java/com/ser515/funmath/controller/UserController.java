package com.ser515.funmath.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.ser515.funmath.model.AccessRequest;
import com.ser515.funmath.model.ExpressionModel;
import com.ser515.funmath.model.QuestionPoolModel;
import com.ser515.funmath.model.Users;
import com.ser515.funmath.services.QuestionService;
import com.ser515.funmath.services.UserService;

@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	UserService userService;	
	@Autowired
	QuestionService questionService;
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	private static final String PATH = "/error";

	@GetMapping("/getAll")
	public List<Users> getAll() {
		return userService.findAll();
	}

	@GetMapping("/getCount")
	public Long getCount() {
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
	public Users saveUser(@RequestBody Map<String, String> json) {
		Users user = new Users();
		user.setFirstName(json.get("firstName"));
		user.setLastName(json.get("lastName"));
		user.setEmailId(json.get("emailId"));
		String encryptPwd = passwordEncoder.encode(json.get("password"));
		user.setPassword(encryptPwd);
		user.setGender(json.get("gender"));
		user.setDob(json.get("dob"));
		return userService.saveUser(user);
	}

	@RequestMapping(path = "/getAllUsers/", method = RequestMethod.GET)
	public List<Users> getAllUsers() {
		return userService.getAllUsers();
	}

	@RequestMapping(path = "/updateUserRole/", method = RequestMethod.PUT)
	public void updateUserRole(@RequestBody Users user) {
		userService.updateUserRole(user);
	}

	/*
	 * Send JSON like: { "username": "abc@xyz.com", "password": "password" }
	 */
	@RequestMapping(path = "/login/", method = RequestMethod.POST)
	public @ResponseBody Users validateLogin(@RequestBody Map<String, String> json) {
		return userService.login(json.get("username"), json.get("password"));
	}

	@DeleteMapping("/remove/{id}")
	public void removeUser(@PathVariable Integer id) {
		userService.removeUser(id);

	}

	@PostMapping("/expression/save")
	public void saveExpresions(@RequestBody ExpressionModel expressionModel) {
		userService.saveExpression(expressionModel);

	}
	@GetMapping("/request/getAll/{requestStatus}")
	public List<AccessRequest> getPendingRequests(@PathVariable String requestStatus) {
		return userService.getPendingRequests(requestStatus);

	}
	
	
	/*
	 * Send input as shown below
	 * { "Id": 1, "emailId": "sharaddhar@asu.edu", "requestDate": "2000-05-01",
	 * "requestStatus": "Approved" }
	 */
	@PostMapping("/request/modifyStatus")
	public void modifyRequest(@RequestBody Map<String,String> jsonRequest) {
		
		AccessRequest request = new AccessRequest((Integer.parseInt(jsonRequest.get("Id"))),jsonRequest.get("emailId"),jsonRequest.get("requestDate"),jsonRequest.get("requestStatus"));
		userService.addModifyRequest(request);

	}
	
	@PostMapping("/question/add")
	public void addQuestionsToPool(@RequestBody List<QuestionPoolModel> questionList) {		
		questionService.addQuestions(questionList);
	}
	
	@GetMapping("/question/getAll")
	public List<QuestionPoolModel> getAllQuestions() {		
		return questionService.getAllQuestions();
	}

}
