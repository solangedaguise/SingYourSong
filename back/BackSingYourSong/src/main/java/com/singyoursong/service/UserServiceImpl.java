package com.singyoursong.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.Random;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

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
	public List<User> getRandomUsers(Integer nombreJoueurs) {
		List<User> allUsers = this.getAllUsers();
		return pickNRandom(allUsers, nombreJoueurs);
	}
	
	@Override
	public void saveMultipleUsers(List<User> users) throws Exception {
		users.stream().map(e -> {
			System.out.println(e);
			return e;
			}).collect(Collectors.toList());
		repo.saveAll(users);
	}
	
	public static List<User> pickNRandom(List<User> elements, int n) {
	    List<User> copy = new ArrayList<User>(elements);
	    Collections.shuffle(copy);
	    return n > copy.size() ? copy.subList(0, copy.size()) : copy.subList(0, n);
	}
}
