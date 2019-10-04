package com.ser515.funmath;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableAutoConfiguration
@ComponentScan(basePackages={"com.ser515.funmath.controller", "com.ser515.funmath.services"})
public class FunmathApplication {

	public static void main(String[] args) {
		SpringApplication.run(FunmathApplication.class, args);
	}

}
