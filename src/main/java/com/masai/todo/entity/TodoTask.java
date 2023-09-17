package com.masai.todo.entity;

import java.time.LocalTime;
import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.AssertFalse;

@Entity
public class TodoTask {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer taskId;
//	@NotBlank(message = "{blankTitle}")
//	@NotNull(message = "{nullTitle}")
	String taskTitle;
//	@NotBlank(message = "{blankDesc}")
//	@NotNull(message = "{nullDesc}")
//	@Max(value = 200, message = "{sizeDesc}")
	String taskDesc;
//	@NotBlank(message = "{blankDay}")
//	@NotNull(message = "{nullDay}")
	@Enumerated
	Day taskDay;
//	@NotBlank(message = "{blankDate}")
//	@NotNull(message = "{nullDate}")

	String taskDeadline;

	boolean isFavorite;
	boolean isComplete;

	boolean isDeleted;

//	@NotBlank(message = "{blankPriority}")
//
//	@NotNull(message = "{nullPriority}")
	Priority taskPriority;
	LocalTime taskTime;

	public TodoTask() {
		super();
	}

	public TodoTask(String taskTitle, String taskDesc, Day taskDay, String taskDeadline,
			@AssertFalse boolean isFavorite, @AssertFalse boolean isComplete, @AssertFalse boolean isDeleted,
			Priority taskPriority, LocalTime taskTime) {
		super();
		this.taskTitle = taskTitle;
		this.taskDesc = taskDesc;
		this.taskDay = taskDay;
		this.taskDeadline = taskDeadline;
		this.isFavorite = isFavorite;
		this.isComplete = isComplete;
		this.isDeleted = isDeleted;
		this.taskPriority = taskPriority;
		this.taskTime = taskTime;
	}

	public boolean isDeleted() {
		return isDeleted;
	}

	public void setDeleted(boolean isDeleted) {
		this.isDeleted = isDeleted;
	}

	public Integer getTaskId() {
		return taskId;
	}

	public String getTaskTitle() {
		return taskTitle;
	}

	public void setTaskTitle(String taskTitle) {
		this.taskTitle = taskTitle;
	}

	public String getTaskDesc() {
		return taskDesc;
	}

	public void setTaskDesc(String taskDesc) {
		this.taskDesc = taskDesc;
	}

	public Day getTaskDay() {
		return taskDay;
	}

	public void setTaskDay(Day taskDay) {
		this.taskDay = taskDay;
	}

	public String getTaskDeadline() {
		return taskDeadline;
	}

	public void setTaskDeadline(String taskDeadline) {
		this.taskDeadline = taskDeadline;
	}

	public boolean isFavorite() {
		return isFavorite;
	}

	public void setFavorite(boolean isFavorite) {
		this.isFavorite = isFavorite;
	}

	public boolean isComplete() {
		return isComplete;
	}

	public void setComplete(boolean isComplete) {
		this.isComplete = isComplete;
	}

	public Priority getTaskPriority() {
		return taskPriority;
	}

	public void setTaskPriority(Priority taskPriority) {
		this.taskPriority = taskPriority;
	}

	public LocalTime getTaskTime() {
		return taskTime;
	}

	public void setTaskTime(LocalTime taskTime) {
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
