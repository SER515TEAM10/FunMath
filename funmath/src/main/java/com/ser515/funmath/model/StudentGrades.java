package com.ser515.funmath.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "student_grades")
public class StudentGrades {
	@Id
	@Column(name = "ass_id")
	private int assignmentId;
	
	@Id
	@Column(name = "student_user_id")
	private int studentUserId;

	@Column(name = "marks")
	private int marks;
	
	@Column(name = "maximum_marks")
	private int maxMarks;
	
	@Column(name = "comments")
	private String comments;
	
	public int getAssignmentId() {
		return assignmentId;
	}
	public void setAssignmentId(int assignmentId) {
		this.assignmentId = assignmentId;
	}
	public int getStudentUserId() {
		return studentUserId;
	}
	public void setStudentUserId(int studentUserId) {
		this.studentUserId = studentUserId;
	}
	public int getMarks() {
		return marks;
	}
	public void setMarks(int marks) {
		this.marks = marks;
	}
	public int getMaxMarks() {
		return maxMarks;
	}
	public void setMaxMarks(int maxMarks) {
		this.maxMarks = maxMarks;
	}
	public String getComments() {
		return comments;
	}
	public void setComments(String comments) {
		this.comments = comments;
	}	
}
