package com.ser515.funmath.services;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;

import org.springframework.stereotype.Service;
import com.ser515.funmath.model.Users;
import com.ser515.funmath.repositories.UserRepository;


/**
 * @author asmi
 *
 */
@Service
public class UserService{
	
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
	
    public Users login(String emailID, String password) {
		 Users user = userRepository.findByEmailId(emailID);
		    if (user == null) {
		    	return null;
		    }
		    else
		    {
		    	if (password.equals(user.getPassword()))
		    	{
		    		return user;
		    	}
		    	else
		    	{
		    		return null;
		    	//	throw new UsernameNotFoundException("Password is incorrect!");
		    	}
		    }
	}
}
