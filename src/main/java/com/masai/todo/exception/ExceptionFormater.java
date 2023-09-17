package com.masai.todo.exception;

import java.time.LocalDateTime;

public class ExceptionFormater {

	LocalDateTime localDateAndTime;
	String errorMessage;

	public ExceptionFormater(LocalDateTime localDateAndTime, String errorMessage) {
		super();
		this.localDateAndTime = localDateAndTime;
		this.errorMessage = errorMessage;
	}

}
