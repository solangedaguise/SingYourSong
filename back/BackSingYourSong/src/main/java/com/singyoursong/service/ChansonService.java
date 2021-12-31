package com.singyoursong.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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
	public List<Chanson> getRandom(Integer nombreChansons, List<Long> dejaJoue) {
		List<Chanson> allUsers = this.getAll();
		allUsers = allUsers.stream().filter(elem -> !dejaJoue.contains(elem.getId())).collect(Collectors.toList());
		return (List<Chanson>) CommonUtils.pickNRandom(allUsers, nombreChansons);
	}

	@Override
	public void saveMultiple(List<Chanson> chansons) {
	    
		List<Chanson> chansonsEmbed = chansons.stream().map(chanson -> {
			chanson.setLienEmbed(chanson.getLien().replaceAll("watch.v=", "embed/"));
			return chanson;
		}).collect(Collectors.toList());
		repo.saveAll(chansonsEmbed);

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
