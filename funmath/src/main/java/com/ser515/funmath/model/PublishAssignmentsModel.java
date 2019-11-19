package com.ser515.funmath.model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name = "published_assignments")
public class PublishAssignmentsModel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int assignmentId;
	private int assignmentNumber;
	private int questionId;
	private int classNumber;
	private Date creationDate;
	private Date dueDate;
	private int totalPoints;

	public PublishAssignmentsModel(int assignmentId, int assignmentNumber, int questionId, int classNumber,
			Date creationDate, Date dueDate, int totalPoints) {
		super();
		this.assignmentId = assignmentId;
		this.assignmentNumber = assignmentNumber;
		this.questionId = questionId;
		this.classNumber = classNumber;
		this.creationDate = creationDate;
		this.dueDate = dueDate;
		this.totalPoints = totalPoints;
	}

	public int getAssignmentId() {
		return assignmentId;
	}

	public void setAssignmentId(int assignmentId) {
		this.assignmentId = assignmentId;
	}

	public int getAssignmentNumber() {
		return assignmentNumber;
	}

	public void setAssignmentNumber(int assignmentNumber) {
		this.assignmentNumber = assignmentNumber;
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

	public Date getCreationDate() {
		return creationDate;
	}

	public void setCreationDate(Date creationDate) {
		this.creationDate = creationDate;
	}

	public Date getDueDate() {
		return dueDate;
	}

	public void setDueDate(Date dueDate) {
		this.dueDate = dueDate;
	}

	public int getTotalPoints() {
		return totalPoints;
	}

	public void setTotalPoints(int totalPoints) {
		this.totalPoints = totalPoints;
	}

}
