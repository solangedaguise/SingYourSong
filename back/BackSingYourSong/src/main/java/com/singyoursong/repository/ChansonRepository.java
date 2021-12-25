package com.singyoursong.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.singyoursong.model.Chanson;
@Repository
public interface ChansonRepository extends JpaRepository<Chanson, Long>{

}
