package com.singyoursong.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {
	@RequestMapping("/all")
	public String getAllUsers() {
//		@Value("${server.port}") String port
//		System.out.println("LE PORT" + port);
		return "COUCOU";
	}
}
