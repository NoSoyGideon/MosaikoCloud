package io.nosoygideon.easyhammer.mosaikoback;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.jdbc.autoconfigure.DataSourceAutoConfiguration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@EnableAspectJAutoProxy
@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class MosaikoBackApplication {

    public static void main(String[] args) {
        SpringApplication.run(MosaikoBackApplication.class, args);
    }

}
