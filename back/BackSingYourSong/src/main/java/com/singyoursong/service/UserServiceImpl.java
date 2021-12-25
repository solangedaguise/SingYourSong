package com.singyoursong.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl {
//	@Value("${server.port}")
//	private String port;
	
	public String getAllUsers() {
		return "COUCOU";
	}
}
