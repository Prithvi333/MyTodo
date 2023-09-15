package com.masai.todo.service;

import java.io.IOException;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

import javax.crypto.SecretKey;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class TokenGenerator extends OncePerRequestFilter {

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {

		org.springframework.security.core.Authentication auth = SecurityContextHolder.getContext().getAuthentication();

		if (auth != null) {

			SecretKey key = Keys.hmacShaKeyFor(CredentialHolder.jwtKey.getBytes());

			String jwt = Jwts.builder().setIssuer("TodoManager").setSubject("Jwt token")
					.claim("username", auth.getName()).claim("authority", amendAuthority(auth.getAuthorities()))
					.signWith(key).compact();
			response.setHeader(CredentialHolder.jwtHeader, jwt);
		}
		filterChain.doFilter(request, response);

	}

	@Override
	protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {

		return !request.getServletPath().equals("/signin");
	}

	public String amendAuthority(Collection<? extends GrantedAuthority> authority) {

		Set<String> set = new HashSet<>();
		for (GrantedAuthority aut : authority) {
			set.add(aut.getAuthority());
		}
		return String.join(",", set);
	}
	
	
}
