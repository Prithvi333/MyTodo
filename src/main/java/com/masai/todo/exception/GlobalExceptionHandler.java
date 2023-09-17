package com.masai.todo.exception;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.NoHandlerFoundException;

@ControllerAdvice
public class GlobalExceptionHandler {

	@ExceptionHandler(AlreadyDeletedTask.class)
	public ResponseEntity<ExceptionFormater> handleAlreadyDeletedTask(AlreadyDeletedTask adt) {
		ExceptionFormater exceptionFormatter = new ExceptionFormater(LocalDateTime.now(), adt.getMessage());

		return new ResponseEntity<>(exceptionFormatter, HttpStatus.BAD_GATEWAY);
	}

	@ExceptionHandler(TaskNotFound.class)
	public ResponseEntity<ExceptionFormater> handleTaskNotFound(TaskNotFound tf) {

		ExceptionFormater exceptionFormatter = new ExceptionFormater(LocalDateTime.now(), tf.getMessage());

		return new ResponseEntity<>(exceptionFormatter, HttpStatus.BAD_REQUEST);
	}

	@ExceptionHandler(EmptyTaskList.class)
	public ResponseEntity<ExceptionFormater> handleEmptyTaskList(EmptyTaskList el) {

		ExceptionFormater exceptionFormatter = new ExceptionFormater(LocalDateTime.now(), el.getMessage());

		return new ResponseEntity<>(exceptionFormatter, HttpStatus.BAD_REQUEST);
	}

	@ExceptionHandler(UserNotExistWithEmail.class)
	public ResponseEntity<ExceptionFormater> handleUsetNotExist(UserNotExistWithEmail ex) {

		ExceptionFormater exceptionFormatter = new ExceptionFormater(LocalDateTime.now(), ex.getMessage());

		return new ResponseEntity<>(exceptionFormatter, HttpStatus.NOT_FOUND);
	}

	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<ExceptionFormater> handleValidation(MethodArgumentNotValidException me) {

		ExceptionFormater exceptionFormater = new ExceptionFormater(LocalDateTime.now(),
				me.getBindingResult().getFieldError().getDefaultMessage());
		return new ResponseEntity<>(exceptionFormater, HttpStatus.BAD_REQUEST);

	}

	@ExceptionHandler(NoHandlerFoundException.class)

	public ResponseEntity<ExceptionFormater> handleNotFound(NoHandlerFoundException ne) {

		ExceptionFormater exceptionFormatter = new ExceptionFormater(LocalDateTime.now(), ne.getMessage());
		return new ResponseEntity<>(exceptionFormatter, HttpStatus.BAD_REQUEST);
	}

}
