package com.singyoursong.service;

import java.util.List;
import java.util.Optional;

import com.singyoursong.model.User;

public interface IUserService {

	List<User> getAllUsers();
	
	Optional<User> getUser(Long id);
	
	/**
	 * Choisis N joueurs aléatoirement dans tous les joueurs existants
	 * @param nombreJoueurs
	 * @return
	 */
	List<User> getRandomUsers(Integer nombreJoueurs);
	
	void saveMultipleUsers(List<User> users) throws Exception;

	void saveUser(User user) throws Exception;

	void deleteUserById(long id) throws Exception;

}
