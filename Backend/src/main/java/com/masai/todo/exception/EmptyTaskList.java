package com.masai.todo.exception;

@SuppressWarnings("serial")
public class EmptyTaskList extends RuntimeException {

	public EmptyTaskList(String message) {
		super(message);
	}
}
