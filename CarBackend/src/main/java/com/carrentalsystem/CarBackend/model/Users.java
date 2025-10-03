package com.carrentalsystem.CarBackend.model;

import java.sql.Date;
import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.*;

@Entity
@Table(name="users")
public class Users {
   
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Column(nullable = false, unique = true)
	private String user_name;
	@Column(nullable = false)
	private String password;
	@Column(nullable=false,unique=true)
	private String email;
	
	@Column(nullable = false)
	private String phone_number;
	
	@Column(nullable = false)
	 private String name;
	
	@Column(nullable=false)
	private String role="customer";
	
	 @CreationTimestamp
	 @Column(nullable = false, updatable = false)
	 private LocalDateTime createdAt;
	 
	public Users() {
		super();
		
	}
	public Users(Long id, String user_name, String password, String email, String phone_number, String name,
			String role, LocalDateTime createdAt) {
		super();
		this.id = id;
		this.user_name = user_name;
		this.password = password;
		this.email = email;
		this.phone_number = phone_number;
		this.name = name;
		this.role = role;
		this.createdAt = createdAt;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUser_name() {
		return user_name;
	}

	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone_number() {
		return phone_number;
	}

	public void setPhone_number(String phone_number) {
		this.phone_number = phone_number;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	 
	 
}
