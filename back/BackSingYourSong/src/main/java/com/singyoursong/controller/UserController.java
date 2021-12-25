package com.singyoursong.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.singyoursong.service.UserServiceImpl;

@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	private UserServiceImpl service;
	
	@GetMapping("/all")
	public String getAllUsers() {
//		System.out.println("LE PORT" + port);
		return service.getAllUsers();
	}
}
