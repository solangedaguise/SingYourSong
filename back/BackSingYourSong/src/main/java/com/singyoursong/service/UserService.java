package com.singyoursong.service;

import java.util.List;
import java.util.Optional;

import com.singyoursong.model.User;

public interface UserService {

	List<User> getAllUsers();

	void saveMultipleUsers(List<User> users) throws Exception;

	Optional<User> getUser(Long id);

}
