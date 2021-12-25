package com.singyoursong.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.singyoursong.model.User;
import com.singyoursong.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserService service;

	@GetMapping("/all")
	public List<User> getAllUsers() {
		return service.getAllUsers();
	}
	
	@PostMapping("/multiple")
	public ResponseEntity<?> saveMultipleUsers(@RequestBody List<User> users) {
		try {
			service.saveMultipleUsers(users);
			return new ResponseEntity<>(HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
