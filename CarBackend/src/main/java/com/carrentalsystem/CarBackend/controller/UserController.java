package com.carrentalsystem.CarBackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.carrentalsystem.CarBackend.model.Users;
import com.carrentalsystem.CarBackend.service.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {

	@Autowired
	private UserService userservice;
	
	@GetMapping("/allusers")
	public List<Users> getAllUsers(){
		return userservice.getAllUsers();
	}
	@GetMapping("/by/{user_id}")
	public Users getAllUserById(@PathVariable Long user_id)
	{
		return userservice.getAllUserById(user_id);
	}
	
	@PostMapping("/add")
	public void addUser(@RequestBody Users user) {
		userservice.addUser(user);
	}
	@PostMapping("/addbatch")
	public void addUsers(@RequestBody List<Users> user) {
		userservice.addUsers(user);
	}
	@PutMapping("/update/{user_id}")
	public void UpdateUser(@PathVariable Long user_id,@RequestBody Users user) {
		userservice.updateUser(user_id,user);
	}
}
