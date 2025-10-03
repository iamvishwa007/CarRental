package com.carrentalsystem.CarBackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.carrentalsystem.CarBackend.model.Users;
import com.carrentalsystem.CarBackend.repository.UserRepo;

@Service
public class UserService {
	
	@Autowired
	private UserRepo userrepo;

	public List<Users> getAllUsers() {
		return userrepo.findAll();	
	}
	public Users getAllUserById(Long user_id) {
		return userrepo.findById(user_id).orElse(null);
	}
	public void addUser(Users user) {
	   userrepo.save(user);
	}
	public void addUsers(List<Users> user) {
		userrepo.saveAll(user);
	}
	public void updateUser(Long user_id, Users user) {
	   Users exUser=userrepo.findById(user_id).orElseThrow(()->new RuntimeException("user not found"+user_id));
	   if(user.getName()!=null) exUser.setName(user.getName());
	   if (user.getPassword() != null) exUser.setPassword(user.getPassword());
	   if (user.getEmail() != null) exUser.setEmail(user.getEmail());
	   if (user.getPhone_number() != null) exUser.setPhone_number(user.getPhone_number());
	   if (user.getName() != null) exUser.setName(user.getName());
	   if (user.getRole() != null) exUser.setRole(user.getRole());
	   
	   userrepo.save(exUser);
	}
       
}
