package com.singyoursong.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.singyoursong.model.Chanson;
import com.singyoursong.repository.ChansonRepository;
import com.singyoursong.utils.CommonUtils;
@Service
public class ChansonService implements IChansonService {
	
	@Autowired
	private ChansonRepository repo;
	
	@Override
	public List<Chanson> getRandom(Integer nombreChansons) {
		List<Chanson> allUsers = this.getAll();
		return (List<Chanson>) CommonUtils.pickNRandom(allUsers, nombreChansons);
	}

	@Override
	public void saveMultiple(List<Chanson> chansons) {
		repo.saveAll(chansons);

	}

	@Override
	public List<Chanson> getAll() {
		return repo.findAll();
	}

	@Override
	public Optional<Chanson> getById(Long id) {
		return repo.findById(id);
	}

}
