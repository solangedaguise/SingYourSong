package com.singyoursong.starter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages={"com.singyoursong"})
public class SingYourSongApplication {
	public static void main(String[] args) {
		SpringApplication.run(SingYourSongApplication.class, args);
	}
}