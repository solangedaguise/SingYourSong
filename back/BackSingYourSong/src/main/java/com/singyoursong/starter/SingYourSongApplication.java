package com.singyoursong.starter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages={"com.singyoursong.*", "com.singyoursong.repository"})
@EntityScan("com.singyoursong.model")
@EnableJpaRepositories("com.singyoursong.repository")
public class SingYourSongApplication {
	public static void main(String[] args) {
		SpringApplication.run(SingYourSongApplication.class, args);
	}
}
