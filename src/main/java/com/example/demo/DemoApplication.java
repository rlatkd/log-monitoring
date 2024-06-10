package com.example.demo;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@Slf4j
public class DemoApplication implements ApplicationRunner {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Override
	public void run(ApplicationArguments args) throws Exception {
		int i = 0;
		while (true) {
			Thread.sleep(1000);
			log.info("SPRINGBOOT_ELK_01 :: {}", ++i);
			log.trace("TRACE");
			log.debug("DEBUG");
			log.info("INFO");
			log.warn("WARN");
			log.error("ERROR");
		}
	}

}
