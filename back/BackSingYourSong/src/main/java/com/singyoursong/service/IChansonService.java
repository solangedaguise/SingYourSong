package com.singyoursong.service;

import java.util.List;
import java.util.Optional;

import com.singyoursong.model.Chanson;

public interface IChansonService {

	List<Chanson> getRandom(Integer nombreChansons, List<Long> dejaJoue);

	void saveMultiple(List<Chanson> chansons);

	List<Chanson> getAll();

	Optional<Chanson> getById(Long id);

}
