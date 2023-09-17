package com.masai.todo.entity;

public class SortingDTO {

	String order;
	String direction;

	public SortingDTO(String order, String direction) {
		super();
		this.order = order;
		this.direction = direction;
	}

	public String getOrder() {
		return order;
	}

	public String getDirection() {
		return direction;
	}

	
	
}
