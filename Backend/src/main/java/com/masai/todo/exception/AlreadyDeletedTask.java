package com.masai.todo.exception;

@SuppressWarnings("serial")
public class AlreadyDeletedTask extends RuntimeException {

	public AlreadyDeletedTask(String message) {
		super(message);
	}
}
