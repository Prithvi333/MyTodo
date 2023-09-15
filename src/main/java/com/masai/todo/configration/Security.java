package com.masai.todo.configration;

import java.util.Arrays;
import java.util.Collections;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;

import jakarta.servlet.http.HttpServletRequest;

@Configuration
public class Security {

	@Bean
	public SecurityFilterChain applySecurity(HttpSecurity http) throws Exception {

		http.sessionManagement(
				sessionManagement -> sessionManagement.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
				.cors(cors ->

				cors.configurationSource(new CorsConfigurationSource() {

					@Override
					public CorsConfiguration getCorsConfiguration(HttpServletRequest request) {

						CorsConfiguration cfg = new CorsConfiguration();
						cfg.setAllowedOriginPatterns(Collections.singletonList("*"));
						cfg.setAllowedMethods(Collections.singletonList("*"));
						cfg.setAllowCredentials(true);
						cfg.setAllowedHeaders(Collections.singletonList("*"));
						cfg.setExposedHeaders(Arrays.asList("Authorization"));

						return cfg;
					}
				})).authorizeHttpRequests(htp -> {

					htp.anyRequest().authenticated();
				}).cors(cors -> cors.disable()).formLogin(Customizer.withDefaults())
				.httpBasic(Customizer.withDefaults());

		return http.build();
	}

	@Bean
	public BCryptPasswordEncoder encodePassword() {

		return new BCryptPasswordEncoder();
	}

}
