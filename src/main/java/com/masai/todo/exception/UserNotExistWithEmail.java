package com.masai.todo.exception;

@SuppressWarnings("serial")
public class UserNotExistWithEmail extends RuntimeException {

	public UserNotExistWithEmail(String message) {
		super(message);
	}

}
