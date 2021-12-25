package com.singyoursong.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.singyoursong.model.Chanson;
import com.singyoursong.model.User;
import com.singyoursong.service.IChansonService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/chanson")
public class ChansonController {

	@Autowired
	private IChansonService service;

	@GetMapping("/all")
	public List<Chanson> getAll() {
		return service.getAll();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Chanson> getById(@PathVariable Long id) {
		Optional<Chanson> chanson = service.getById(id);

		if (chanson.isPresent()) {
			return new ResponseEntity<>(chanson.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@GetMapping("/random")
	public List<Chanson> getRandom(@RequestParam Integer nombreChansons) {
		return service.getRandom(nombreChansons);
	}
	
	@PostMapping("/multiple")
	public ResponseEntity<?> saveMultiple(@RequestBody List<Chanson> chansons) {
		try {
			service.saveMultiple(chansons);
			return new ResponseEntity<>(HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
