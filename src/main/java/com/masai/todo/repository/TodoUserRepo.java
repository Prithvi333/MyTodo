package com.masai.todo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.masai.todo.entity.TodoUser;

public interface TodoUserRepo extends JpaRepository<TodoUser, Integer>, PagingAndSortingRepository<TodoUser, Integer> {

	Optional<TodoUser> findByUserEmail(String email);

}
