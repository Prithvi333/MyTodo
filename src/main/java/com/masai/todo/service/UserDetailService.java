package com.masai.todo.service;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.masai.todo.entity.TodoUser;
import com.masai.todo.repository.TodoUserRepo;

@Service
public class UserDetailService implements UserDetailsService {

	@Autowired
	private TodoUserRepo repo;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		Optional<TodoUser> user = repo.findByUserEmail(username);

		if (user.isPresent()) {

			TodoUser todoUser = user.get();

			String userName = todoUser.getUserEmail();
			String userPassword = todoUser.getUserPassword();

			Set<GrantedAuthority> authority = new HashSet<>();

			SimpleGrantedAuthority aut = new SimpleGrantedAuthority(todoUser.getRole());
			authority.add(aut);

			return new User(userName, userPassword, authority);
		}

		else {
			throw new Error("User not found");
		}

	}

}
