package com.masai.todo.controller;

import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.masai.todo.entity.TodoTask;
import com.masai.todo.entity.TodoUser;
import com.masai.todo.repository.TodoUserRepo;
import com.masai.todo.service.UserService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/todo")
public class UserController {
	@Autowired
	UserService userService;
	@Autowired
	TodoUserRepo userRepo;

	private static String emailHolder;

	@GetMapping("/signin")
	public ResponseEntity<String> logIn(Authentication auth) {

		emailHolder = auth.getName();

		Optional<TodoUser> usr = userRepo.findByUserEmail(auth.getName());

		if (usr.isPresent()) {
			TodoUser user = usr.get();
			return new ResponseEntity<>(user.getUserEmail(), HttpStatus.OK);
		}
		return new ResponseEntity<>("Login failed", HttpStatus.UNAUTHORIZED);
	}

	@GetMapping("/email")
	public ResponseEntity<TodoUser> getUserByEmail() {
		System.out.println(emailHolder);
		TodoUser user = userService.getUserByEmail(emailHolder);

		return new ResponseEntity<>(user, HttpStatus.OK);
	}

	@PostMapping("/user")
	public ResponseEntity<TodoUser> addUser(@Valid @RequestBody TodoUser todoUser) {
		TodoUser user = userService.createUser(todoUser);

		return new ResponseEntity<>(user, HttpStatus.CREATED);

	}

	@PostMapping("/task")
	public ResponseEntity<TodoTask> addTask(@Valid @RequestBody TodoTask todoTask) {
		TodoTask task = userService.createTask(emailHolder, todoTask);

		return new ResponseEntity<>(task, HttpStatus.CREATED);
	}

	@GetMapping("/tasks")
	public ResponseEntity<Set<TodoTask>> getAllTask() {

		Set<TodoTask> taskList = userService.getAllTask(emailHolder);

		return new ResponseEntity<>(taskList, HttpStatus.ACCEPTED);
	}

	@GetMapping("/findtask/{taskid}")
	public ResponseEntity<TodoTask> getTaskById(@PathVariable("taskid") Integer taskId) {

		TodoTask task = userService.findTaskById(emailHolder, taskId);

		return new ResponseEntity<>(task, HttpStatus.OK);
	}

	@DeleteMapping("/deletetask/{taskid}")
	public ResponseEntity<TodoTask> deleteTask(@PathVariable("taskid") Integer taskId) {

		TodoTask deletedTask = userService.deleteTaskById(emailHolder, taskId);
		return new ResponseEntity<>(deletedTask, HttpStatus.OK);

	}

	@PostMapping("/favoritetask/{taskid}")
	public ResponseEntity<String> toogleFavorite(@PathVariable("taskid") Integer taskId) {

		userService.toggleFavorite(emailHolder, taskId);

		return new ResponseEntity<>("Successfully change favorite status", HttpStatus.OK);

	}

	@PostMapping("/completetask/{taskid}")
	public ResponseEntity<String> toogleComplete(@PathVariable("taskid") Integer taskId) {
		System.out.println(emailHolder);
		userService.toggleComplete(emailHolder, taskId);

		return new ResponseEntity<>("Successfully change complete status", HttpStatus.OK);

	}

	@GetMapping("/signout")
	public ResponseEntity<String> signOut() {
		emailHolder = null;
		return new ResponseEntity<>("Sign out successfully", HttpStatus.OK);

	}

}
