package br.com.ifsul.gymail;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@EnableSwagger2
@SpringBootApplication
public class GymailApplication {

    public static void main(String[] args) {
        SpringApplication.run(GymailApplication.class, args);
    }

}
