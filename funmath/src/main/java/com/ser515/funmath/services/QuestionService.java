package com.ser515.funmath.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ser515.funmath.model.QuestionPoolModel;
import com.ser515.funmath.repositories.QuestionPoolRepository;

@Service
public class QuestionService {
	@Autowired
	QuestionPoolRepository repository;
	
	
	public void addQuestions(List<QuestionPoolModel> questionList) {
		repository.saveAll(questionList);		
	}
	public List<QuestionPoolModel> getAllQuestions() {
		return repository.findAll();
		
		
	}
	

}
