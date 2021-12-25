package com.singyoursong.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
import lombok.Getter;
import lombok.ToString;

@ToString
@Data
@Getter
@Entity
@Table(name = "app_user")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "prenom")
	private String prenom;

	@Column(name = "commentaire")
	private String commentaire;
}
