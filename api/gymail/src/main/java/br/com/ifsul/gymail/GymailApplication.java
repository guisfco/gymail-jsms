package br.com.ifsul.gymail;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.Collections;

@EnableSwagger2
@SpringBootApplication
public class GymailApplication {

    public static void main(String[] args) {
        SpringApplication.run(GymailApplication.class, args);
    }

    @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .apis(RequestHandlerSelectors.basePackage("br.com.ifsul.gymail"))
                .build()
                .apiInfo(apiInfo());
    }

    private ApiInfo apiInfo() {
        return new ApiInfo(
                "GyMail - API",
                "Serviço referente ao sistema de troca de mensagens. DSV: http://gymail-api.herokuapp.com/api/gymail/swagger-ui.html",
                "API 1.0",
                "Terms of service",
                new Contact("Guilherme dos Santos Francisco e Yasmin Moraes da Silva", "http://gymail-api.herokuapp.com/api/gymail/swagger-ui.html", ""),
                "License of API", "API license URL", Collections.emptyList());
    }

}
