package com.masai.todo.service;

import java.time.LocalTime;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.function.Consumer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.masai.todo.entity.TodoTask;
import com.masai.todo.entity.TodoUser;
import com.masai.todo.exception.AlreadyDeletedTask;
import com.masai.todo.exception.EmptyTaskList;
import com.masai.todo.exception.TaskNotFound;
import com.masai.todo.repository.TodoUserRepo;

@Service
public class UserServiceImp implements UserService {

	@Autowired
	TodoUserRepo userRepo;

	@Autowired
	PasswordEncoder passwordEncoder;

	@Override
	public TodoUser createUser(TodoUser user) {

		user.setUserPassword(passwordEncoder.encode(user.getUserPassword()));
		user.setRole("ROLE_USER");
		return userRepo.save(user);
	}

	@Override
	public TodoUser getUserByEmail(String email) {

		Optional<TodoUser> user = userRepo.findByUserEmail(email);

		if (user.isPresent()) {

			return user.get();
		} else {
			throw new UsernameNotFoundException("User not found with the given email address");
		}

	}

	@Override
	public Set<TodoTask> getAllTask(String email) {

		TodoUser todoUser = getUserByEmail(email);

		Set<TodoTask> todoList = todoUser.getTask();

		if (!todoList.isEmpty()) {

			return todoList;

		} else {
			throw new EmptyTaskList("Task list is Empty");
		}

	}

	@Override
	public TodoTask createTask(String email, TodoTask todoTask) {

		TodoUser todoUser = getUserByEmail(email);
		todoTask.setTaskTime(LocalTime.now());
		todoUser.getTask().add(todoTask);

		userRepo.save(todoUser);

		return todoTask;
	}

	@Override
	public TodoTask findTaskById(String email, Integer taskId) {

		TodoUser todoUser = getUserByEmail(email);


		Set<TodoTask> todoList = todoUser.getTask();

		if (todoList.isEmpty())
			throw new EmptyTaskList("Task list is Empty");

		java.util.function.Predicate<TodoTask> pred = item -> item.getTaskId() == taskId;

		List<TodoTask>  list = todoList.stream().filter(pred).toList();
		
		if (list.isEmpty())
			throw new TaskNotFound("Task not found with id " + taskId);

		return list.get(0);
	}

	@Override
	public TodoTask deleteTaskById(String email, Integer taskId) {

		TodoUser todoUser = getUserByEmail(email);

		Set<TodoTask> todoList = todoUser.getTask();

		TodoTask task = null;
		;

		if (todoList.isEmpty())
			throw new EmptyTaskList("Task list is Empty");

		for (TodoTask tasks : todoList) {

			if (tasks.getTaskId() == taskId)
				task = tasks;
		}

		if (task == null) {
			throw new TaskNotFound("Task not found with id " + taskId);
		}

		else if (task.isDeleted() == true) {

			throw new AlreadyDeletedTask("Task is already deleted");

		}
		task.setDeleted(!task.isDeleted());
		userRepo.save(todoUser);
		return task;
	}

	@Override
	public void toggleFavorite(String email, Integer taskId) {

		TodoUser todoUser = getUserByEmail(email);

		Set<TodoTask> todoList = todoUser.getTask();

		Consumer<TodoTask> consume = task -> {
			if (task.getTaskId() == taskId)
				task.setFavorite(!task.isFavorite());
		};

		todoList.forEach(consume);
		userRepo.save(todoUser);

	}

	@Override
	public void toggleComplete(String email, Integer taskId) {

		TodoUser todoUser = getUserByEmail(email);

		Set<TodoTask> todoList = todoUser.getTask();

		Consumer<TodoTask> consume = task -> {
			if (task.getTaskId() == taskId)
				task.setComplete(!task.isComplete());
		};

		todoList.forEach(consume);

		userRepo.save(todoUser);

	}





}
