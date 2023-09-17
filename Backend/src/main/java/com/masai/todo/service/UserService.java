package com.masai.todo.service;

import java.util.Set;

import com.masai.todo.entity.TodoTask;
import com.masai.todo.entity.TodoUser;

public interface UserService {

	public TodoUser createUser(TodoUser user);

	public TodoUser getUserByEmail(String email);

	public Set<TodoTask> getAllTask( String email);

	public TodoTask createTask( String email, TodoTask todoTask);

	public TodoTask findTaskById(String email, Integer taskId);

	public TodoTask deleteTaskById(String email, Integer taskId);

	public void toggleFavorite(String email, Integer taskId);

	public void toggleComplete(String email, Integer taskId);
	
}
