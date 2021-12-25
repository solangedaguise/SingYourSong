package com.singyoursong.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.singyoursong.model.User;
import com.singyoursong.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository repo;
	
	@Override
	public List<User> getAllUsers() {
		return repo.findAll();
	}
	
	@Override
	public Optional<User> getUser(Long id) {
		return repo.findById(id);
	}
	
	@Override
	public void saveMultipleUsers(List<User> users) throws Exception {
		users.stream().map(e -> {
			System.out.println(e);
			return e;
			}).collect(Collectors.toList());
		repo.saveAll(users);
	}
}
