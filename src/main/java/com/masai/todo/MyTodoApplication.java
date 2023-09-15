package com.masai.todo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.PropertySource;
import org.springframework.validation.beanvalidation.LocalValidatorFactoryBean;

@SpringBootApplication
@PropertySource("valid.properties")
public class MyTodoApplication {

	public static void main(String[] args) {
		SpringApplication.run(MyTodoApplication.class, args);
	}

	@Bean
	public LocalValidatorFactoryBean getValidation(MessageSource ms) {

		LocalValidatorFactoryBean lfb = new LocalValidatorFactoryBean();

		lfb.setValidationMessageSource(ms);
		return lfb;

	}

}
