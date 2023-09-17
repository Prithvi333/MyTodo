package com.masai.todo.exception;

@SuppressWarnings("serial")
public class TaskNotFound extends RuntimeException {

	public TaskNotFound(String message) {
		super(message);
	}
}
