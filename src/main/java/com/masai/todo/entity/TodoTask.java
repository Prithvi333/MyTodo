package com.masai.todo.entity;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity
public class TodoTask {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer taskId;
	@NotBlank(message = "${blankTitle}")
	@NotNull(message = "${nullTitle}")
	String taskTitle;
	@NotBlank(message = "${blankDesc}")
	@NotNull(message = "${nullDesc}")
	@Max(value = 200, message="${sizeDesc}")
	String taskDesc;
	@NotBlank(message = "${blankDay}")
	@NotNull(message = "${nullDay}")
	@Enumerated
	Day taskDay;
	@NotBlank(message = "${blankDate}")
	@NotNull(message = "${nullDate}")
	@Temporal(TemporalType.DATE)
	LocalDate taskDeadline;
	@NotBlank(message = "${blankPriority}")
	@NotNull(message = "${nullPriority}")
	@Enumerated
	Priority taskPriority;
	@Temporal(TemporalType.TIME)
	LocalTime taskTime;

	public TodoTask(String taskTitle, String taskDesc, Day taskDay, LocalDate taskDeadline, Priority taskPriority,
			LocalTime taskTime) {
		super();
		this.taskTitle = taskTitle;
		this.taskDesc = taskDesc;
		this.taskDay = taskDay;
		this.taskDeadline = taskDeadline;
		this.taskPriority = taskPriority;
		this.taskTime = taskTime;
	}

	@Override
	public int hashCode() {
		return Objects.hash(taskDay, taskDeadline, taskDesc, taskId, taskPriority, taskTime, taskTitle);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		TodoTask other = (TodoTask) obj;
		return taskDay == other.taskDay && Objects.equals(taskDeadline, other.taskDeadline)
				&& Objects.equals(taskDesc, other.taskDesc) && Objects.equals(taskId, other.taskId)
				&& taskPriority == other.taskPriority && Objects.equals(taskTime, other.taskTime)
				&& Objects.equals(taskTitle, other.taskTitle);
	}

}
