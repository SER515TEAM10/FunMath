package com.groupten.funmath.landing;

import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class landingPageController {

	    private static final String template = "Hello, %s!";
	    private final AtomicLong counter = new AtomicLong();

	    @RequestMapping("/") //http://localhost:8080?name=Amit
	    public landingPageModel landing(@RequestParam(value="name", defaultValue="World") String name) {
	    	return new landingPageModel(counter.incrementAndGet(),
                    String.format(template, name));
	    }
}
