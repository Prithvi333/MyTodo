package com.masai.todo.entity;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
public class TodoUser {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer userId;
	@NotNull(message = "${emptyUsername}")
	@NotBlank(message = "${blankUsername}")
	String userName;

	@NotNull(message = "${emptyEmail}")
	@NotBlank(message = "${blankEmail}")

	@Column(unique = true)
	String userEmail;

	@NotNull(message = "${emptyPassword}")
	@NotBlank(message = "${blankPassword}")
	@Size(min = 6, message = "${sizePassword}")
	String userPassword;

	String role;

	@ElementCollection(fetch = FetchType.EAGER)
	@Embedded
	Set<TodoTask> task = new HashSet<>();
     
	public TodoUser(String userName, String userEmail, String userPassword, String role, Set<TodoTask> task) {
		super();
		this.userName = userName;
		this.userEmail = userEmail;
		this.userPassword = userPassword;
		this.role = role;
		this.task = task;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public String getUserPassword() {
		return userPassword;
	}

	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public Set<TodoTask> getTask() {
		return task;
	}

	public void setTask(Set<TodoTask> task) {
		this.task = task;
	}

	@Override
	public String toString() {
		return "TodoUser [userId=" + userId + ", userName=" + userName + ", userEmail=" + userEmail + ", userPassword="
				+ userPassword + ", role=" + role + ", task=" + task + "]";
	}

}
