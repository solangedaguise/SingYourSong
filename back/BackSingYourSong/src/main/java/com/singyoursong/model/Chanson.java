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
@Table(name = "chanson")
public class Chanson {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "artiste")
	private String artiste;

	@Column(name = "titre")
	private String titre;
	
	@Column(name = "lien")
	private String lien;
	
	@Column(name = "lienEmbed")
	private String lienEmbed;
	
	@Column(name = "nombreChanteurs")
	private Integer nombreChanteurs;
}
