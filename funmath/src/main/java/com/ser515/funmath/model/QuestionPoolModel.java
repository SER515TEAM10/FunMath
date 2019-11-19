package com.ser515.funmath.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name = "question_pool")
public class QuestionPoolModel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int questionId;
	private int questionNumber;
	private int classNumber;
	private String questionCategory;
	private String displayType;
	private String displayEntity;
	private String questionDescription;
	private String questionExtradetails;
	private String answerType;
	private String answerChoice;
	private String answerDescription;
	private String answerExtradetails;
	private String correctAnswer;
	private String correctAnswerType;

	
	public QuestionPoolModel() {
		
	}
	public QuestionPoolModel(int questionId, int questionNumber, int classNumber, String questionCategory,
			String displayType, String displayEntity, String questionDescription, String questionExtradetails,
			String answerType, String answerChoice, String answerDescription, String answerExtradetails,
			String correctAnswer, String correctAnswerType) {
		super();
		this.questionId = questionId;
		this.questionNumber = questionNumber;
		this.classNumber = classNumber;
		this.questionCategory = questionCategory;
		this.displayType = displayType;
		this.displayEntity = displayEntity;
		this.questionDescription = questionDescription;
		this.questionExtradetails = questionExtradetails;
		this.answerType = answerType;
		this.answerChoice = answerChoice;
		this.answerDescription = answerDescription;
		this.answerExtradetails = answerExtradetails;
		this.correctAnswer = correctAnswer;
		this.correctAnswerType = correctAnswerType;
	}

	public int getQuestionId() {
		return questionId;
	}

	public void setQuestionId(int questionId) {
		this.questionId = questionId;
	}

	public int getClassNumber() {
		return classNumber;
	}

	public void setClassNumber(int classNumber) {
		this.classNumber = classNumber;
	}

	public String getQuestionCategory() {
		return questionCategory;
	}

	public void setQuestionCategory(String questionCategory) {
		this.questionCategory = questionCategory;
	}

	public String getDisplayType() {
		return displayType;
	}

	public void setDisplayType(String displayType) {
		this.displayType = displayType;
	}

	public String getDisplayEntity() {
		return displayEntity;
	}

	public void setDisplayEntity(String displayEntity) {
		this.displayEntity = displayEntity;
	}

	public String getQuestionDescription() {
		return questionDescription;
	}

	public void setQuestionDescription(String questionDescription) {
		this.questionDescription = questionDescription;
	}

	public String getQuestionExtradetails() {
		return questionExtradetails;
	}

	public void setQuestionExtradetails(String questionExtraDetails) {
		this.questionExtradetails = questionExtraDetails;
	}

	public String getAnswerType() {
		return answerType;
	}

	public void setAnswerType(String answerType) {
		this.answerType = answerType;
	}

	public String getAnswerChoice() {
		return answerChoice;
	}

	public void setAnswerChoice(String answerChoice) {
		this.answerChoice = answerChoice;
	}

	public String getAnswerDescription() {
		return answerDescription;
	}

	public void setAnswerDescription(String answerDescription) {
		this.answerDescription = answerDescription;
	}

	public String getAnswerExtradetails() {
		return answerExtradetails;
	}

	public void setAnswerExtradetails(String answerExtraDetails) {
		this.answerExtradetails = answerExtraDetails;
	}

	public String getCorrectAnswer() {
		return correctAnswer;
	}

	public void setCorrectAnswer(String correctAnswer) {
		this.correctAnswer = correctAnswer;
	}

	public String getCorrectAnswerType() {
		return correctAnswerType;
	}

	public void setCorrectAnswerType(String correctAnswerType) {
		this.correctAnswerType = correctAnswerType;
	}

	public int getQuestionNumber() {
		return questionNumber;
	}

	public void setQuestionNumber(int questionNumber) {
		this.questionNumber = questionNumber;
	}

}
